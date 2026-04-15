export const siteConfig = {
  name: "Aaron J Trevena",
  title: "Technical Leader | Principal Engineer | Photography | Triathlon | Surflifesaving",
  description: "Website of Aaron Trevena",
  accentColor: "#1d4ed8",
  social: {
    email: "aaron@aarontrevena.co.uk",
    linkedin: "https://www.linkedin.com/in/aarontrevena/",
    github: "https://github.com/hashbangperl",
    instagram: "https://www.instagram.com/myactionpix_aaron/",
    coderwall: "https://coderwall.com/hashbangperl"
  },
  aboutMe: {
    heading: "I'm an experienced technical leader with experience in scaling both projects and teams, from hands-on leadership of small teams to workforce planning, budgeting and leading engineering for a division with multiple teams on multiple platforms. Experienced system architect and engineer, specialising in high traffic and high availability Internet applications.",
    paras: [
    "25 years working in a mix of freelance, contractor, consultant and permanent roles brings experience and lessons from implementing a wide variety of projects using different technologies across a broad range of industries. I bring a pragmatic approach to both technology and project management, using agile processes, open source and AI/LLM to suit a business or project with a focus on communication, collaboration and return on investment, using tools that work for the team rather than my personal taste or industry fashion.",
    "Based in Cornwall, I've been able to find a work/life balance, mixing volunteering with lifesaving and swimming as photographer, marshall and manikin wrangler with my work - balancing work with outdoor hobbies like photography, cycling and triathlon as well as lifesaving means I can avoid burnout and going down rabbit holes, it means I regularly get to 'touch grass' and that helps when work can become stressful and demanding."
    ],
  },	
  skills: ["Linux", "SQL", "Databases", "Object Oriented Programming", "Scripting", "AWS", "Devops", "Security", "Webservices", "System Integration", "Line management", "Technical leadership", "Agile", "System Operations"],
  opensource: [
    {
      name: "Devon & Cornwall Linux User Group",
      description:
        "Co-founded with Alex Charrett, in 1999 as part of running the University of Plymouth Computing & Internet Society. It now has hundreds of members on the active mailing list, and holds occasional meetup in Plymouth",
      link: "https://www.dcglug.org.uk/",
      skills: ["Linux", "Advocacy", "Leadership"],
    },
    {
      name: "Autodia Diagramming Tool",
      description:
        "Command-line tool, available in most Linux distributions, to extract and document class diagrams, database schema from code or databases directly. Templated output can generate text/html documentation, xml, etc and built in support for layout and graphing tools allow generating diagrams with Dia, GraphViz, SpringGraph and others.",
      link: "https://metacpan.org/pod/Autodia",
      skills: ["Perl", "UML", "SQL", "OOP", "Directed Graphs"],
    },
  ],
  experience: [
    {
      company: "Amtivo Group",
      title: "Principal Engineer",
      dateRange: "Feb 2023 - Present",
      bullets: [
        "Led development of microservices and middleware architecture",
        "Line management of ERP Development Team",
	"Introduced and successfully rolled out continuous deployment and git workflows for new and legacy platforms",
	"Produced roadmap and collaborated on sprint planning with CTO and Architect and Product Manager",
	"Introduced agile processes and coding standards",
	"Designed and implemented integration to Netsuite and SAGE accounting systems",
        "Mentored 2 teams including 8 developers",
      ],
    },
    {
      company: "Centralnic (now Team Internet)",
      title: "Head of Engineering (EMEA Retail)",
      dateRange: "Apr 2021 - Feb 2023",
      bullets: [
      	"Management and leadership of european retail engineering, a department of 20 staff running 6 websites on a range of platforms, producing 35 million USD ARR and 250 thousand customers",
	"Lead multiple projects to integrate acquisitions, merge teams and sites to focus on building a smaller number of better performing brands and sites",
	"Migrated all EMEA retail code to shared group github, and rolled out zendesk & hubspot integration for multiple sites",
	"Introduced and implemented coding standards and git / release work flows for EMEA retail brands and contributed to group policies",
	"Introduced 2nd level and holiday cover out of hours system operations support from shared services team for multiple retail teams and platforms",
	"Requirement gathering, planning, coordinating and supervising large projects across multiple brands/platforms in collaboration with multiple product management and stakeholder teams",
	"Coordinating response to incidents across teams with global IT and infosec teams, CISO and CTO",
	"Managed workforce planning, salary updates, and IAS38 reporting on intangible assets and resource use",
	"Managed recruitment, interviews, training and performance/personal/professional development reviews and OKRs based on division and group-wide engineering goals",
      ],
    },
    {
      company: "Centralnic (now Team Internet)",
      title: "iwantmyname Team Lead",
      dateRange: "Sep 2020 - Feb 2023",
      bullets: [
      	"Recruited, interviewed and onboarded new engineering team for iwantmyname retail DNS sales and domain management platform",
	"Introduced and integrated on-call rota, payments and documented process with pingdom, pagerduty and ELK/Graphite, migrated iwantmyname to centralnic group incident management",
	"Provided Updates, new features and support of legacy perl and erlang systems using RabbitMQ, Couchdb, Postgres, AWS S3 and EC2",
	"Implemented new invoice creation process, localisation and internationalisation",
	"Rationalised and migrated from multiple services and providers to group-wide systems, making significant savings on services and infrastructure by cancelling unused or duplicated services and subscriptions"	
      ],
    },
    {
     company: "AST Software Solutions Ltd",
     title: "Self Employed Contractor/Consultant/Freelancer",
     dateRange: "Sep 2014 - Sep 2020",
     bullets: [
     	      "Technical Team Lead for All Around The World SASU",
	      "Created pitch, spec and MVP multi-tenant SIEM portal and alert/issue tracking system",
	      "Migrated client’s inhouse prototype from PHP and MongoDB to hybrid data storage using Postgres (including JSONB),  InfluxDB for SNMP polling & sampling ingress and MongoDB for aggregation and freeform SNMP result storage",
	      "Delivered a clustered SNMP polling system and web application and REST webservice to monitor, manage and update millions of devices",
	      "Senior Developer at Best Practical Solutions, LLC",
	      "Senior Developer at GoDaddy",
	      "Backend Technical Lead at Tokeet",
	      "Senior Developer at BBC",
	      "Senior Developer at Daisy Group / Elder Studios",
     ]
    }
  ],
  education: [
    {
      school: "University of Plymouth",
      degree: "BSc (Hons) Computer Systems & Networks",
      dateRange: "1995 - 2000",
      achievements: [
        "Founded Devon and Cornwall Linux User Group",
        "Treasurer of computing society",
      ],
    },
  ],
  photography:
    {
      header: "I've been shooting sports, performing arts, nature and landscapes for about 15 years, including as official photographer for Surf Lifesaving GB",
      body: "Highlights of my photography include having a picture in Cornwall Living magazine and shooting my daughter taking her first open national medal at the GB Surflifesaving Champsionships.",
      photos: [
        {
    	title: "Flags Dive",
    	url: "/gallery/AaronTrevena_FlagsDive.JPG",
    	alt: "Flags Dive",
  	},
  	{
    	title: "Youth Obs Swim",
    	url: "/gallery/AaronTrevena_YouthObsSwim.jpg",
    	alt: "Youth Obs Swim",
  	},
  	{
    	title: "Chess The Muscial",
    	url: "/gallery/chess_pair.jpg",
    	alt: "Chess The Muscial",
  	},
  	{
    	title: "Gwithian sunset board session",
    	url: "/gallery/DSC_0217.jpg",
    	alt: "backlit lifesavers at Gwithian for sunset board session",
  	},
  	{
    	title: "Fisheye Skate Ramp Truro",
    	url: "/gallery/DSC_0254.jpg",
    	alt: "Fisheye Skate Ramp Truro",
  	},
  	{
    	title: "Youth Pool Tube",
    	url: "/gallery/AaronTrevena_YouthPoolTube.jpg",
    	alt: "Youth Pool Tube",
  	},
  	{
    	title: "Youth Surf Swim",
    	url: "/gallery/AaronTrevena_YouthSurfSwim.JPG",
    	alt: "Youth Surf Swim",
  	},
  	{
    	title: "Rail Skate Truro",
    	url: "/gallery/DSC_0259bw.jpg",
    	alt: "skater sliding on rail at truro skatepark",
  	},

  	{
    	title: "Youth Tube Start",
    	url: "/gallery/AaronTrevena_YouthTubeStart.JPG",
    	alt: "Youth Tube Start",
  	},
  	{
    	title: "Youth Tube Water",
    	url: "/gallery/AaronTrevena_YouthTubeWater.JPG",
    	alt: "Youth Tube Water",
  	},

  	{
    	title: "3 Daft Monkeys",
    	url: "/gallery/DSC_0338.JPG",
    	alt: "Vocal/Guitar and fiddle players in black and white",
  	},
  	{
    	title: "Flags Tussle",
    	url: "/gallery/AaronTrevena_FlagsTussle.JPG",
    	alt: "Flags Tussle",
  	},
  	{
    	title: "Chess the Musical",
    	url: "/gallery/DSC_0401.JPG",
    	alt: "Row of singers at performance of Chess the Musical",
  	},
  	{
    	title: "Surfski at Fistral",
    	url: "/gallery/DSC_0422.JPG",
    	alt: "2 Surfski athletes paddling out over surf at Fistral Beach",
  	},
  	{
    	title: "3 Daft Monkeys",
    	url: "/gallery/DSC_0425.jpg",
    	alt: "Guitar & Bass player",
  	},

  	{
    	title: "Open Board Race",
    	url: "/gallery/AaronTrevena_OpenBoardRace.JPG",
    	alt: "Open Board Race",
  	},
  	{
	title: "3 Daft Monkeys",
    	url: "/gallery/DSC_0441_edit2_filtered.jpg",
    	alt: "Vocal/Guitarist on stage",
  	},
  	{
    	title: "Wistman's wood",
    	url: "/gallery/DSC_0815.jpg",
    	alt: "Gnarly trees at Wistmans wood",
  	},
  	{
    	title: "Gyllyngvase nipper lifesavers",
    	url: "/gallery/DSC_0862.jpg",
    	alt: "Gyllyngvase nipper lifesavers",
  	},
  	{
    	title: "Castle to Castle",
    	url: "/gallery/DSC_1200.JPG",
    	alt: "Swimmers and lifeguards on Castle to Castle swim",
  	},
  	{
    	title: "Jason Thomas Performing Arts",
    	url: "/gallery/DSC_1704.jpg",
    	alt: "Musical Theatre show, young dancers",
  	},
	{
    	title: "Open Ski Race",
    	url: "/gallery/AaronTrevena_OpenSkiRace.JPG",
    	alt: "Open Ski Race",
  	},
	{
    	title: "Laddock Time Trial",
    	url: "/gallery/DSC_2059ccrop.jpg",
    	alt: "Cyclist in aero tuck on Laddock Time Trial",
  	},
  	{
    	title: "Youth Double Ski",
    	url: "/gallery/AaronTrevena_YouthDoubleSki.JPG",
    	alt: "Youth Double Ski",
  	},
  	{
    	title: "St Piran at Redditch Tour Series Crit race",
    	url: "/gallery/DSC_4848.png",
    	alt: "St Piran at Redditch Tour Series Crit race",
  	},

  	{
    	title: "Gylly SurfSki",
    	url: "/gallery/DSC_33501.jpg",
    	alt: "Surf ski athletes training at gylly being passed by a fishing boat",
  	},
      ]
    },
  volunteering: [
    {
      foo: "bar"
    }
  ]
};
