using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Autofac;
using deepakkumar.tech.Services;
using Autofac.Extensions.DependencyInjection;
using deepakkumar.tech.Models.Profile;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace deepakkumar.tech
{
  public class Startup
  {
    public Startup()
    {
    }

    public IConfigurationRoot Configuration { get; private set; }
    public IContainer ApplicationContainer { get; private set; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public IServiceProvider ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();

      var builder = new ContainerBuilder();
      builder.RegisterType<ProfileService>().As<IProfileService>();
      builder.Populate(services);
      this.ApplicationContainer = builder.Build();
      return new AutofacServiceProvider(this.ApplicationContainer);
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(
      IApplicationBuilder app,
      IHostingEnvironment env,
      IApplicationLifetime applicationLifetime)
    {
      var builder = new ConfigurationBuilder()
        .SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables();
      this.Configuration = builder.Build();

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        {
          HotModuleReplacement = true
        });
      }
      else
      {
        app.UseExceptionHandler("/Error");
      }

      app.UseStaticFiles();

      //app.UseMvc();
      app.UseMvc(routes =>
      {
        routes.MapRoute(
            name: "webapi",
            template: "api/{controller=Home}/{action=Index}/{id?}");

        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute(
            name: "spa-fallback",
            defaults: new { controller = "Home", action = "Index" });
      });
      DocumentDBRepository<ProfileData>.Initialize(this.Configuration);
      applicationLifetime.ApplicationStopped.Register(() => this.ApplicationContainer.Dispose());
    }
  }
}
