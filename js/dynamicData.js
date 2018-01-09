var skillTotal = [1,2,3,4,5,6,7,8,9,10];

var data = {
	skills: [{
		name: "C#",
		level: 8
	},{
		name: "JS",
		level: 8
	},{
		name: "CSS",
		level: 7
	},{
		name: "HTML5",
		level: 7
	},{
		name: "Angular",
		level: 7
	}
	,{
		name: "Jquery",
		level: 8
	}
	,{
		name: "Typescript",
		level: 7
	}
	,{
		name: "Gulp",
		level: 6
	}
	,{
		name: "MVC",
		level: 7
	}
	,{
		name: "Web Api",
		level: 6
	}
	,{
		name: "Autofac",
		level: 5
	}
	,{
		name: "SCSS",
		level: 5
	}
	,{
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
	}]
};

$('#skillTmpl').tmpl(data).appendTo('.skillTemplate');
$('#hobbiesTmpl').tmpl(data).appendTo('.hobbyTemplate');