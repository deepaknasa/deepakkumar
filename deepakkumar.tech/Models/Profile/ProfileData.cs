using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace deepakkumar.tech.Models.Profile
{
  public class ProfileData
  {
    public List<Skill> Skills { get; set; }
    public List<Hobby> Hobbies { get; set; }
    public List<Certificate> Certificates { get; set; }
    public List<Education> Education { get; set; }
    public string AboutMe { get; set; }
    public List<SocialMediaLink> SocialMediaLinks { get; set; }
    public List<ResumeLink> ResumeLinks { get; set; }
    public List<WorkExp> WorkEx { get; set; }
  }

  public class SocialMediaLink
  {
    public string UserName { get; set; }
    public string ProfileLink { get; set; }
    public string Icon { get; set; }
  }

  public class Hobby
  {
    public string Icon { get; set; }
    public string Name { get; set; }
  }

  public class Certificate
  {
    public string Name { get; set; }
    public string Desc { get; set; }
  }

  public class Education
  {
    public string Degree { get; set; }
    public string Uni { get; set; }
  }

  public class ResumeLink
  {
    public string ResumePath { get; set; }
    public string Icon { get; set; }
    public string Text { get; set; }
  }

  public class WorkExp
  {
    public string Title { get; set; }
    public string Period { get; set; }
    public string CompanyUrl { get; set; }
    public string CompanyName { get; set; }
    public string JobDuties { get; set; }
  }

  public class Skill
  {
    public string Name { get; set; }
    public int Level { get; set; }
  }
}
