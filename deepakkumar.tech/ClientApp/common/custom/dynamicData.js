var skillTotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var data = {
    skills: [{
        name: "C#",
        level: 8
    }, {
        name: "JS",
        level: 8
    }, {
        name: "CSS",
        level: 7
    }, {
        name: "HTML5",
        level: 7
    }, {
        name: "Angular",
        level: 7
    }
        , {
        name: "Jquery",
        level: 8
    }
        , {
        name: "Typescript",
        level: 7
    }
        , {
        name: "Gulp",
        level: 6
    }
        , {
        name: "MVC",
        level: 7
    }
        , {
        name: "Web Api",
        level: 6
    }
        , {
        name: "Autofac",
        level: 5
    }
        , {
        name: "SCSS",
        level: 5
    }
        , {
        name: "Bootstrap",
        level: 7
    }],
    hobbies: [{
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
    }],
    certificates: [{
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
    }],
    education: [{
        degree: "Master of Computer Applications",
        uni: "Thapar University | 2008 - 2011"
    },
    {
        degree: "Bachelor of Science",
        uni: "Punjabi University | 2005 - 2008"
    }]
};

//$('#skillTmpl').tmpl(data).appendTo('.skillTemplate');
//$('#hobbiesTmpl').tmpl(data).appendTo('.hobbyTemplate');
//$('#certificatesTmpl').tmpl(data).appendTo('.certificatesTemplate');
//$('#educationTmpl').tmpl(data).appendTo('.educationTmpl');

//<script type="text/x-jquery-tmpl" id="skillTmpl">
//    {%each skills%}
//    <div class="row">
//        <span class="offset-0 col-3 px-0 skill-name">${name}</span>
//        <ul class="col-7 col-sm-9 skill-dots pr-0 my-0 skill-level">
//            {%each(i, it) skillTotal%}
//            {%if level >= it%}
//            <li><i class="fa fa-circle" aria-hidden="true"></i></li>
//            {%else%}
//            <li><i class="fa fa-circle-o" aria-hidden="true"></i></li>
//            {%/if%}
//            {%/each%}
//        </ul>
//    </div>
//    {%/each%}
//</script>
//<script type="text/x-jquery-tmpl" id="hobbiesTmpl">
//        {%each(i, h) hobbies%}
//    <div class="col-4 pb-2">
//            <div class="hobby-icon">
//                <i class="fa ${h.icon}"></i>
//                <span class="f3">${h.name}</span>
//            </div>
//        </div>
//        {%/each%}
//</script>
//<script type="text/x-jquery-tmpl" id="certificatesTmpl">
//    {%each(i, c) certificates%}
//    <div class="work-ex-item">
//        <span class="timeline-bubble secondary-text">
//            <i class="fa fa-circle d-inline"></i>
//        </span>
//        <div class="work-ex-heading">
//            <span class="f2 d-block">${c.name}</span>
//            <span class="f3 d-block font-italic text-muted"><strong>${c.desc}</strong></span>
//        </div>
//    </div>
//    {%/each%}
//</script>
//<script type="text/x-jquery-tmpl" id="educationTmpl">
//        {%each(i, c) education%}
//    <div class="work-ex-item">
//            <span class="timeline-bubble secondary-text">
//                <i class="fa fa-circle d-inline"></i>
//            </span>
//            <div class="work-ex-heading">
//                <span class="f2 d-block">${c.uni}</span>
//                <span class="f3 d-block font-italic text-muted"><strong>${c.degree}</strong></span>
//            </div>
//        </div>
//        {%/each%}
//</script>
