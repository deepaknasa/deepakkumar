using deepakkumar.tech.Models.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace deepakkumar.tech.Services.Profile
{
    public class ProfileService
    {
        public List<Skill> GetSkills()
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
}
