"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.skills = [{
                name: "C#",
                level: 8
            },
            {
                name: "JS",
                level: 8
            },
            {
                name: "CSS",
                level: 7
            },
            {
                name: "HTML5",
                level: 7
            },
            {
                name: "Angular",
                level: 7
            },
            {
                name: "Jquery",
                level: 8
            },
            {
                name: "Typescript",
                level: 7
            },
            {
                name: "Gulp",
                level: 6
            },
            {
                name: "MVC",
                level: 7
            }, {
                name: "Web Api",
                level: 6
            },
            {
                name: "Autofac",
                level: 5
            },
            {
                name: "SCSS",
                level: 5
            },
            {
                name: "Bootstrap",
                level: 7
            }];
        this.hobbies = [{
                icon: "fa-bicycle",
                name: "Cycling"
            },
            {
                icon: "fa-plane",
                name: "Travel"
            },
            {
                icon: "fa-users",
                name: "Politics"
            },
            {
                icon: "fa-film",
                name: "Movies"
            }];
        this.certificates = [{
                name: "IKM Assessment | 87 / 100",
                desc: "C#/SQL Server"
            },
            {
                name: "IKM Assessment | 85 / 100",
                desc: "HTML/CSS/JS"
            },
            {
                name: "Microsoft Certification | MCSD",
                desc: "ASP.Net MVC"
            }];
        this.education = [{
                degree: "Master of Computer Applications",
                uni: "Thapar University | 2008 - 2011"
            },
            {
                degree: "Bachelor of Science",
                uni: "Punjabi University | 2005 - 2008"
            }];
        this.aboutMe = "Microsoft Certified developer (license #11720431) have 7 years of experience of developing web applications based on Asp.Net MVC. Strong emphasis on Agile methodologies and implementation of SOLID design principles. Currently building a sophisticated platform to assess student's ability in numeracy and languages.";
        this.socialMediaLinks = [{
                icon: 'fa-facebook',
                profileLink: 'http://www.facebook.com/deepaknasa',
                userName: 'deepaknasa'
            },
            {
                icon: 'fa-linkedin',
                profileLink: 'http://www.linkedin.com/in/deepak-kumar-vatts',
                userName: 'deepak-kumar-vatts'
            },
            {
                icon: 'fa-github',
                profileLink: 'https://github.com/deepaknasa/',
                userName: 'deepaknasa'
            }];
        this.resumeLinks = [{
                icon: 'fa-file-pdf-o',
                resumePath: 'https://www.dropbox.com/s/xal81uw7f44tki5/DeepakResume.pdf?dl=0',
                text: 'pdf'
            },
            {
                icon: 'fa-file-text-o',
                resumePath: 'https://www.dropbox.com/s/b7n7rkrnx8u3p3m/DeepakResume.docx?dl=0',
                text: 'text'
            }];
        this.workEx = [{
                title: 'Software Developer',
                period: 'Oct/2016 - Present',
                companyUrl: 'http://janison.com/',
                companyName: 'Janison Education Group',
                jobDuties: '<p>Joined the company to work on crucial part of reports download and background sync processes to assess writing tests. Main responsibilities include build new features and support older functionalities.</p><br /><p>Improved team onboarding process by creating much needed getting started documents.Created new pages for Node based application to view reports. Created background sync process to send and receive data to 3rd party system. Created automated tests using Ghost Inspector which reduced regression testing upto 40%. Swagger API tooling helped to create human readable documentation of newly created Web APIs. Created test cases in TestRail platform integrated with JIRA to link stories with test cases for better management.</p>'
            },
            {
                title: 'Software Developer',
                period: '2011 - 2016',
                companyUrl: 'https://www.sapientconsulting.com/',
                companyName: 'Sapient Consulting',
                jobDuties: "<p>Worked on variety of projects spread across different domains like Sports, FMCG, Human Resources. Migrated legacy classic Asp application to Asp.Net MVC platform Active Directory (AD) Authentication mechanism used to make the login process smooth for the application users. Written Microsoft Unit Tests to automate the regression testing of back end logic upto some extent. It reduced the testing efforts by 25%. Used OOPS concepts to create common components in ASP.NET MVC business layer to handle similar operations for 9 different functional pages. It reduced lines of code upto 45%.</p>\n\t\t\t\t\t\t\t<div class='collapse' id='collapseEx'>\n\t\t\t\t\t\t\t\t\t<p>Worked autonomously on 4 different small-medium scale applications while working in this project. Was responsible for writing new code, testing and maintaining the applications. Used C# Cryptography to generate the password hash and store it in the database. Created common platform for 88 football clubs based on UK. Hosted the 88 websites on AWS infrastructure with 12 active web servers and 4 always on standby. Witnessed highest combined traffic of 80000 visitors per minute on the all managed sites during the fixture announcement day. Client's previous vendor was failing to achieve this milestone in last 3 years, thus achieving this milestone put Sapient in very advantageous position and helped bag new projects from client.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>Optimized the old WCF service code by adding few ServiceBehaviors to reduce the line of codes by almost 50%, improved the Maintainability Index and reduced the cyclomatic complexity. Helped Managers to give estimates for their new pitches. Used LESS Cruncher tool to create the final minified CSS files. Created PDF generator to publish weekly reports to higher stakeholders, this tool reduces the human efforts by 75%.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a class=\"show-more secondary-text fl-right\" data-toggle=\"collapse\" href=\"#collapseEx\" aria-expanded=\"false\" aria-controls=\"collapseEx\"></a>"
            }];
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: require("./profile.component.html"),
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map