namespace deepakkumar.tech.Controllers
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  using Microsoft.AspNetCore.Mvc;
  using System.Net;
  using deepakkumar.tech.Services;
  using deepakkumar.tech.Models.Profile;

  [Route("api/[controller]")]
  public class ProfileController : Controller
  {
    private IProfileService _profileSvc;
    public ProfileController(IProfileService profileService)
    {
      this._profileSvc = profileService;
    }

    //Get api/profile
    [HttpGet]
    public async Task<ProfileData> Get()
    {
      return await this._profileSvc.GetProfileDataAsync();
    }
  }
}
