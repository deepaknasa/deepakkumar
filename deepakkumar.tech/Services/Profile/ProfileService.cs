using deepakkumar.tech.Models.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace deepakkumar.tech.Services
{
  public class ProfileService : IProfileService
  {
    public async Task<ProfileData> GetProfileDataAsync()
    {
      var data = await DocumentDBRepository<ProfileData>.GetProfileDataAsync();
      if (data == null)
      {
        //create default profile data
        await DocumentDBRepository<ProfileData>.CreateProfileDataAsync(DefaultProfileData());
        data = await DocumentDBRepository<ProfileData>.GetProfileDataAsync();
      }
      return await Task.FromResult<ProfileData>(data);
    }

    private ProfileData DefaultProfileData()
    {
      return new ProfileData
      {
        Skills = this.GetSkills(),
        Hobbies = this.GetHobbies(),
        Certificates = this.GetCertificates(),
        Education = this.GetEducation(),
        AboutMe = this.GetAboutMeInfo(),
        SocialMediaLinks = this.GetSocialLinks(),
        ResumeLinks = this.GetResumeInfo(),
        WorkEx = this.GetWorkExInfo()
      };
    }

    private List<Certificate> GetCertificates()
    {
      return new List<Certificate> {
                 new Certificate
                 {
                  Name = "IKM Assessment | 87 / 100",
                  Desc = "C#/SQL Server"
                },
                new Certificate
                {
                  Name = "IKM Assessment | 85 / 100",
                  Desc = "HTML/CSS/JS"
                },
                new Certificate
                {
                  Name = "Microsoft Certification | MCSD",
                  Desc = "ASP.Net MVC"
                }
            };
    }

    private List<Education> GetEducation()
    {
      return new List<Education> {
                new Education
                {
                  Degree = "Master of Computer Applications",
                  Uni = "Thapar University | 2008 - 2011"
                },
                new Education
                {
                  Degree = "Bachelor of Science",
                  Uni = "Punjabi University | 2005 - 2008"
                }
            };
    }

    private string GetAboutMeInfo()
    {
      return @"Microsoft Certified developer (license #11720431) have 7 years of experience of developing web applications based on Asp.Net MVC. Strong emphasis on Agile methodologies and implementation of SOLID design principles. Currently building a sophisticated platform to assess student's ability in numeracy and languages.";
    }

    private List<SocialMediaLink> GetSocialLinks()
    {
      return new List<SocialMediaLink> {
                 new SocialMediaLink
                 {
                  Icon = "fa-facebook",
                  ProfileLink = "http://www.facebook.com/deepaknasa",
                  UserName = "deepaknasa"
                },
                new SocialMediaLink
                {
                  Icon = "fa-linkedin",
                  ProfileLink = "http://www.linkedin.com/in/deepak-kumar-vatts",
                  UserName = "deepak-kumar-vatts"
                },
                new SocialMediaLink
                {
                  Icon = "fa-github",
                  ProfileLink = "https://github.com/deepaknasa/",
                  UserName = "deepaknasa"
                }
            };
    }

    private List<ResumeLink> GetResumeInfo()
    {
      return new List<ResumeLink> {
                new ResumeLink
                {
                  Icon = "fa-file-pdf-o",
                  ResumePath = "https://www.dropbox.com/s/xal81uw7f44tki5/DeepakResume.pdf?dl=0",
                  Text = "pdf"
                },
                new ResumeLink
                {
                  Icon = "fa-file-text-o",
                  ResumePath = "https://www.dropbox.com/s/b7n7rkrnx8u3p3m/DeepakResume.docx?dl=0",
                  Text = "text"
                }
            };
    }

    private List<WorkExp> GetWorkExInfo()
    {
      return new List<WorkExp> {
                new WorkExp
                {
                    Title = "Software Developer",
                    Period = "Oct/2016 - Present",
                    CompanyUrl = "http://janison.com/",
                    CompanyName = "Janison Education Group",
                    JobDuties = "<p>Joined the company to work on crucial part of reports download and background sync processes to assess writing tests. Main responsibilities include build new features and support older functionalities.</p><br /><p>Improved team onboarding process by creating much needed getting started documents.Created new pages for Node based application to view reports. Created background sync process to send and receive data to 3rd party system. Created automated tests using Ghost Inspector which reduced regression testing upto 40%. Swagger API tooling helped to create human readable documentation of newly created Web APIs. Created test cases in TestRail platform integrated with JIRA to link stories with test cases for better management.</p>"
                },
                        new WorkExp
                        {
                          Title = "Software Developer",
                          Period = "2011 - 2016",
                          CompanyUrl = "https://www.sapientconsulting.com/",
                          CompanyName = "Sapient Consulting",
                          JobDuties = @"<p>Worked on variety of projects spread across different domains like Sports, FMCG, Human Resources. Migrated legacy classic Asp application to Asp.Net MVC platform Active Directory (AD) Authentication mechanism used to make the login process smooth for the application users.Written Microsoft Unit Tests to automate the regression testing of back end logic upto some extent.It reduced the testing efforts by 25 %.Used OOPS concepts to create common components in ASP.NET MVC business layer to handle similar operations for 9 different functional pages.It reduced lines of code upto 45 %.</p>
                                              <div class='collapse' id='collapseEx'>
									                    <p>Worked autonomously on 4 different small-medium scale applications while working in this project.Was responsible for writing new code, testing and maintaining the applications.Used C# Cryptography to generate the password hash and store it in the database. Created common platform for 88 football clubs based on UK. Hosted the 88 websites on AWS infrastructure with 12 active web servers and 4 always on standby. Witnessed highest combined traffic of 80000 visitors per minute on the all managed sites during the fixture announcement day. Client's previous vendor was failing to achieve this milestone in last 3 years, thus achieving this milestone put Sapient in very advantageous position and helped bag new projects from client.
									                    </p>
									                    <p>Optimized the old WCF service code by adding few ServiceBehaviors to reduce the line of codes by almost 50%, improved the Maintainability Index and reduced the cyclomatic complexity.Helped Managers to give estimates for their new pitches.Used LESS Cruncher tool to create the final minified CSS files.Created PDF generator to publish weekly reports to higher stakeholders, this tool reduces the human efforts by 75%.</p>
								                    </div>
								                    <a class='show-more secondary-text fl-right collapsed' data-toggle='collapse' href='#collapseEx' aria-expanded='false' aria-controls='collapseEx'></a>"
                        }
};
    }

    private List<Hobby> GetHobbies()
    {
      return new List<Hobby> {
                new Hobby {
                  Icon = "fa-bicycle",
                  Name = "Cycling"
                },
                new Hobby {
                  Icon= "fa-plane",
                  Name= "Travel"
                },
                new Hobby {
                  Icon= "fa-users",
                  Name= "Politics"
                },
                new Hobby {
                  Icon = "fa-film",
                  Name = "Movies"
                }
            };
    }

    private List<Skill> GetSkills()
    {
      var skills = new List<Skill> {
                new Skill {
                    Name = "C#",
                    Level = 8
                },
                new Skill {
                    Name = "JS",
                    Level = 8
                },
                new Skill {
                    Name = "CSS",
                    Level = 7
                },
                new Skill {
                    Name = "HTML5",
                    Level = 7
                },
                new Skill {
                    Name = "Angular",
                    Level = 7
                },
                new Skill {
                    Name = "Jquery",
                    Level = 8
                },
                new Skill {
                    Name = "Typescript",
                    Level = 7
                },
                new Skill {
                    Name = "Gulp",
                    Level = 6
                },
                new Skill {
                    Name = "MVC",
                    Level = 7
                },
                new Skill {
                    Name = "Web Api",
                    Level = 6
                },
                new Skill {
                    Name = "Autofac",
                    Level = 5
                },
                new Skill {
                    Name = "SCSS",
                    Level = 5
                },
                new Skill {
                    Name = "Bootstrap",
                    Level = 7
                }
            };
      return skills;
    }

  }

  public interface IProfileService
  {
    Task<ProfileData> GetProfileDataAsync();
  }
}
