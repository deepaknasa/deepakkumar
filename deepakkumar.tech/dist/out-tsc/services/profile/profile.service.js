"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ProfileService = /** @class */ (function () {
    //profileData: ProfileData = {
    //  skills: [<Skill>{
    //    name: "C#",
    //    level: 8
    //  },
    //  <Skill>{
    //    name: "JS",
    //    level: 8
    //  },
    //  <Skill>{
    //    name: "CSS",
    //    level: 7
    //  },
    //  <Skill>{
    //    name: "HTML5",
    //    level: 7
    //  },
    //  <Skill>{
    //    name: "Angular",
    //    level: 7
    //  },
    //  <Skill>{
    //    name: "Jquery",
    //    level: 8
    //  },
    //  <Skill>{
    //    name: "Typescript",
    //    level: 7
    //  },
    //  <Skill>{
    //    name: "Gulp",
    //    level: 6
    //  },
    //  <Skill>{
    //    name: "MVC",
    //    level: 7
    //  },
    //  <Skill>{
    //    name: "Web Api",
    //    level: 6
    //  },
    //  <Skill>{
    //    name: "Autofac",
    //    level: 5
    //  },
    //  <Skill>{
    //    name: "SCSS",
    //    level: 5
    //  },
    //  <Skill>{
    //    name: "Bootstrap",
    //    level: 7
    //  }],
    //  hobbies: [<Hobby>{
    //    icon: "fa-bicycle",
    //    name: "Cycling"
    //  },
    //  <Hobby>{
    //    icon: "fa-plane",
    //    name: "Travel"
    //  },
    //  <Hobby>{
    //    icon: "fa-users",
    //    name: "Politics"
    //  },
    //  <Hobby>{
    //    icon: "fa-film",
    //    name: "Movies"
    //  }],
    //  certificates: [<Certificate>{
    //    name: "IKM Assessment | 87 / 100",
    //    desc: "C#/SQL Server"
    //  },
    //  <Certificate>{
    //    name: "IKM Assessment | 85 / 100",
    //    desc: "HTML/CSS/JS"
    //  },
    //  <Certificate>{
    //    name: "Microsoft Certification | MCSD",
    //    desc: "ASP.Net MVC"
    //  }],
    //  education: [<Education>{
    //    degree: "Master of Computer Applications",
    //    uni: "Thapar University | 2008 - 2011"
    //  },
    //  <Education>{
    //    degree: "Bachelor of Science",
    //    uni: "Punjabi University | 2005 - 2008"
    //  }],
    //  aboutMe: "Microsoft Certified developer (license #11720431) have 7 years of experience of developing web applications based on Asp.Net MVC. Strong emphasis on Agile methodologies and implementation of SOLID design principles. Currently building a sophisticated platform to assess student's ability in numeracy and languages.",
    //  socialMediaLinks: [<SocialMediaLink>{
    //    icon: 'fa-facebook',
    //    profileLink: 'http://www.facebook.com/deepaknasa',
    //    userName: 'deepaknasa'
    //  },
    //  <SocialMediaLink>{
    //    icon: 'fa-linkedin',
    //    profileLink: 'http://www.linkedin.com/in/deepak-kumar-vatts',
    //    userName: 'deepak-kumar-vatts'
    //  },
    //  <SocialMediaLink>{
    //    icon: 'fa-github',
    //    profileLink: 'https://github.com/deepaknasa/',
    //    userName: 'deepaknasa'
    //  }],
    //  resumeLinks: [<ResumeLink>{
    //    icon: 'fa-file-pdf-o',
    //    resumePath: 'https://www.dropbox.com/s/xal81uw7f44tki5/DeepakResume.pdf?dl=0',
    //    text: 'pdf'
    //  },
    //  <ResumeLink>{
    //    icon: 'fa-file-text-o',
    //    resumePath: 'https://www.dropbox.com/s/b7n7rkrnx8u3p3m/DeepakResume.docx?dl=0',
    //    text: 'text'
    //  }],
    //  workEx: [<WorkExp>{
    //    title: 'Software Developer',
    //    period: 'Oct/2016 - Present',
    //    companyUrl: 'http://janison.com/',
    //    companyName: 'Janison Education Group',
    //    jobDuties: '<p>Joined the company to work on crucial part of reports download and background sync processes to assess writing tests. Main responsibilities include build new features and support older functionalities.</p><br /><p>Improved team onboarding process by creating much needed getting started documents.Created new pages for Node based application to view reports. Created background sync process to send and receive data to 3rd party system. Created automated tests using Ghost Inspector which reduced regression testing upto 40%. Swagger API tooling helped to create human readable documentation of newly created Web APIs. Created test cases in TestRail platform integrated with JIRA to link stories with test cases for better management.</p>'
    //  },
    //  <WorkExp>{
    //    title: 'Software Developer',
    //    period: '2011 - 2016',
    //    companyUrl: 'https://www.sapientconsulting.com/',
    //    companyName: 'Sapient Consulting',
    //    jobDuties: `<p>Worked on variety of projects spread across different domains like Sports, FMCG, Human Resources. Migrated legacy classic Asp application to Asp.Net MVC platform Active Directory (AD) Authentication mechanism used to make the login process smooth for the application users. Written Microsoft Unit Tests to automate the regression testing of back end logic upto some extent. It reduced the testing efforts by 25%. Used OOPS concepts to create common components in ASP.NET MVC business layer to handle similar operations for 9 different functional pages. It reduced lines of code upto 45%.</p>
    //					<div class='collapse' id='collapseEx'>
    //							<p>Worked autonomously on 4 different small-medium scale applications while working in this project. Was responsible for writing new code, testing and maintaining the applications. Used C# Cryptography to generate the password hash and store it in the database. Created common platform for 88 football clubs based on UK. Hosted the 88 websites on AWS infrastructure with 12 active web servers and 4 always on standby. Witnessed highest combined traffic of 80000 visitors per minute on the all managed sites during the fixture announcement day. Client's previous vendor was failing to achieve this milestone in last 3 years, thus achieving this milestone put Sapient in very advantageous position and helped bag new projects from client.
    //							</p>
    //							<p>Optimized the old WCF service code by adding few ServiceBehaviors to reduce the line of codes by almost 50%, improved the Maintainability Index and reduced the cyclomatic complexity. Helped Managers to give estimates for their new pitches. Used LESS Cruncher tool to create the final minified CSS files. Created PDF generator to publish weekly reports to higher stakeholders, this tool reduces the human efforts by 75%.</p>
    //						</div>
    //						<a class="show-more secondary-text fl-right collapsed" data-toggle="collapse" href="#collapseEx" aria-expanded="false" aria-controls="collapseEx"></a>`
    //  }]
    //};
    function ProfileService(http) {
        this.http = http;
        this.profileApiUrl = 'api/profile';
    }
    ProfileService.prototype.getSkills = function () {
        return this.http.get(this.profileApiUrl);
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map