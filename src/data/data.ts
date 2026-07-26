import { GalleryItem, Milestone, TechStack } from "../types";

export const socials: Record<string, string> = {
    linkedin: "https://www.linkedin.com/in/jopeth-bryan-seda/",
    instagram: "https://www.instagram.com/jopeth.psd/",
    "up-mail": "mailto:jbseda@up.edu.ph",
    "personal-mail": "mailto:sedajopeth@gmail.com",
    github: "https://github.com/pingu204",
    repo: "https://github.com/pingu204/Jopeth",
    cv: "https://drive.google.com/drive/folders/1Vpj_t7dQ7SGKeTkMfC-mzY63p1waywXt?usp=sharing",
};

export const designs: GalleryItem[] = [
    {
        title: "UPD Computer Science Bootcamp 10.0 Merchandise",
        description:
            "I created t-shirt and lanyard designs for Bootcamp 10.0, an annual event for freshmen of the University of the Philippines-Diliman Department of Computer Science. Working closely with the event organizers, I conceptualized a cohesive brand that captures the aesthetic of computer science students while ensuring that the visual elements used in the design aligned with the theme of the event.",
        cover: "assets/Designs/DCSMerch/cover.png",
        images: [
            "assets/Designs/DCSMerch/mockup_white.png",
            "assets/Designs/DCSMerch/mockup_isko.png",
            "assets/Designs/DCSMerch/mockup_blurple.png",
            "assets/Designs/DCSMerch/mockup_dcs.png",
        ],
        platforms: ["illustrator"],
        tags: [
            "Merchandise Design",
            "Illustration",
            "Typography",
            "Branding",
            "Vector Art",
            "HUD Elements",
            "Technology",
        ],
        links: [
            {
                message: "View on Facebook",
                platform: "facebook",
                url: "https://www.facebook.com/dcsbootcamp11.0/posts/pfbid0QjX5G4A1MYBzKCdcpckEFJGNYt1eZd1k9HpjiY6tit4cumtGpA8McvahrRHp86kHl",
            },
        ],
    },
    {
        title: "PSHS-MC Senior Year Batch Shirt | A.Y. 20-21",
        description:
            "I once participated in a batch shirt design competition during my senior year in high school and was selected as the winner. The shirt's design draws inspiration from vintage and retro illustrations, aiming to evoke a sense of nostalgia.",
        cover: "assets/Designs/G11BatchShirt/shirt.png",
        images: ["assets/Designs/G11BatchShirt/details.png"],
        tags: [
            "Merchandise Design",
            "Vector Art",
            "Vintage-Style Illustration",
        ],
        platforms: ["illustrator", "photoshop"],
        links: [
            {
                platform: "behance",
                message: "View Case Study",
                url: "https://www.behance.net/gallery/223538375/Vibrant-Retro-Inspired-Batch-Shirt-Design",
            },
        ],
    },
    {
        title: "Typography Poster Collection",
        description:
            "As someone with an expansive bandwidth for thoughts and ideas, I decided to create posters out of anecdotes in my life. Here I utilize design to evoke a certain feeling, support my faves, and generally anything under the sun!",
        cover: "assets/Designs/Typography Posters/espresso_q.png",
        images: [
            "assets/Designs/Typography Posters/espresso_q.png",
            "assets/Designs/Typography Posters/email rant.png",
            "assets/Designs/Typography Posters/glimpse.png",
        ],
        platforms: ["photoshop"],
        links: [
            {
                platform: "instagram",
                message: "More on Instagram",
                url: "https://www.instagram.com/jopeth.psd/",
            },
        ],
        tags: ["Poster Design", "Typography", "Digital Art"],
    },
    {
        title: "Vector Illustrations Collection",
        description:
            "Some vector illustrations that I made, including portraits and scenery.",
        cover: "assets/Designs/Vectors/rainy full.png",
        images: [
            "assets/Designs/Vectors/rainy full.png",
            "assets/Designs/Vectors/muon_color.png",
            "assets/Designs/Vectors/haknyeon.png",
            "assets/Designs/Vectors/yoohyeon.png",
            "assets/Designs/Vectors/jennie.png",
        ],
        platforms: ["illustrator"],
        links: [
            {
                platform: "instagram",
                message: "More on Instagram",
                url: "https://www.instagram.com/jopeth.psd/",
            },
        ],
        tags: ["Vector Art", "Digital Art"],
    },
    {
        title: "PSHS-MC 'Ang Lagablab' School Paper Spreads | A.Y. 21-22",
        description:
            "For this project, I worked with a team of designers in creating the Filipino publication of Philippine Science High School - Main Campus that school year. I mainly worked on two spreads—one of the news pages and one of the editorial pages.",
        cover: "assets/Designs/Lagablab/cover.png",
        images: [
            "assets/Designs/Lagablab/B-1.png",
            "assets/Designs/Lagablab/H-1.png",
        ],
        platforms: ["indesign", "photoshop"],
        tags: ["Print Design", "Typography", "Digital Art"],
    },
    {
        title: "Leni-Kiko Jeepney Signs",
        description:
            "In solidarity with the Leni-Kiko tandem during the 2022 Presidential Elections in the Philippines, I made Jeepney signs that reflect their mass-centered campaign.",
        cover: "assets/Designs/LeniKiko/cover.png",
        images: ["assets/Designs/LeniKiko/cover.png"],
        platforms: ["photoshop", "illustrator"],
        tags: ["Digital Art", "Typography", "Poster Design", "Print Design"],
    },
];

export const designTags: string[] = [
    "Merchandise Design",
    "UI/UX Design",
    "Poster Design",
    "Typography",
    "Branding",
    "Digital Art",
    "Vector Art",
    "Print Design",
];

export const tech: GalleryItem[] = [
    {
        title: "PilipiNuts 2024",
        description:
            "I spearheaded the design of this website, which collates promising data science projects that expose the truths, trends, and turning points in the Philippines' path to sustainable development, all aligning with the United Nations' Global Goals. Furthermore, I implemented the mockup of the website using SvelteKit and Tailwind, mainly tasked with working on the About Us page.",
        cover: "assets/Tech/PilipiNuts/cover.png",
        images: ["assets/Tech/PilipiNuts/cover.png"],
        platforms: ["svelte", "tailwind", "figma"],
        tags: ["Front-end Development", "Web Development", "UI/UX Design"],
        links: [
            {
                message: "View Deployed Site",
                url: "https://pilipinuts-2024.vercel.app/",
            },
            {
                message: "View on GitHub",
                platform: "github",
                url: "https://github.com/paulrossener/pilipinuts-2024",
            },
        ],
    },
    {
        title: "RescueQuick",
        description:
            "Collaborated with a team of developers in developing an AI-powered flood monitoring system for an Internet of Things (IoT) competition, mainly working on the front-end side (i.e., implementing the web dashboard). I also established the branding of the web app, making use of location tags to create an RQ logotype.",
        cover: "assets/Tech/RescueQuick/cover.png",
        images: [
            "assets/Tech/RescueQuick/cover.png",
            "assets/Tech/RescueQuick/poster.png",
            "assets/Tech/RescueQuick/img-1.png",
            "assets/Tech/RescueQuick/img-2.png",
            "assets/Tech/RescueQuick/img-3.png",
        ],
        platforms: ["django", "python", "tailwind", "figma", "illustrator"],
        tags: [
            "Front-end Development",
            "UI/UX Design",
            "Branding",
            "Logo Design",
        ],
        links: [
            {
                message: "View Deployed Site",
                url: "https://pilipinuts-2024.vercel.app/",
            },
        ],
    },
    {
        title: "Making Every Peso Count",
        description:
            "Collaborated with a group of students for a data science class in analyzing the discrepancies in the regional budget allocation of the Philippines towards the 10th Sustainable Development Goal (Reduced Inequalities). I primarily worked on the front-end side—creating a logo to represent the project and developing a portfolio website that presents the background, findings, and takeaways of the said study.\n\nAwarded 'Best Design', 'Best Story', 'Outstanding Analysis', 'Outstanding Interactive Visuals' within the class",
        cover: "assets/Tech/MakingEveryPesoCount/cover.png",
        images: ["assets/Tech/MakingEveryPesoCount/cover.png"],
        platforms: [
            "html",
            "css",
            "bootstrap",
            "python",
            "pandas",
            "colab",
            "plotly",
        ],
        tags: [
            "Front-end Development",
            "Web Development",
            "UI/UX Design",
            "Data",
        ],
        links: [
            {
                message: "View Deployed Site",
                url: "https://pingu204.github.io/cs132-CalyphYakult/",
            },
            {
                message: "View on GitHub",
                platform: "github",
                url: "https://github.com/pingu204/cs132-CalyphYakult",
            },
        ],
    },
    {
        title: "Automated Planner for Efficient Scheduling",
        description:
            "Led a team of developers in creating a web application that aids the students of UP Diliman in curating their semestral schedules. The application takes in the list of classes a user needs and generates viable schedules for them. With just a few clicks, users can now have a glimpse of their possible schedules, easily mix and match classes, and even save these schedules for future reference!",
        cover: "assets/Tech/APES/cover.png",
        images: [
            "assets/Tech/APES/cover.png",
            "assets/Tech/APES/img-1.png",
            "assets/Tech/APES/img-2.png",
            "assets/Tech/APES/img-3.png",
            "assets/Tech/APES/img-4.png",
            "assets/Tech/APES/img-5.png",
        ],
        platforms: ["django", "python", "bootstrap", "figma"],
        tags: [
            "Full-Stack Development",
            "Software Engineering",
            "Web Development",
            "UI/UX Design",
            "Quality Education SDG",
        ],
        links: [
            {
                message: "View Deployed Site",
                url: "https://cs192-apes-2pui.vercel.app/",
            },
            {
                message: "View on GitHub",
                platform: "github",
                url: "https://github.com/pingu204/cs192-APES",
            },
            {
                message: "View Prototype",
                platform: "figma",
                url: "https://www.figma.com/proto/ZcXqO41rcm8Vz7tT0wC7tG/%5BAPES%5D-Prototype-2.0?node-id=35-23&t=7fW3QOHZHLq9gfdZ-1",
            },
        ],
    },
    {
        title: "Spotify Stats Generator",
        description:
            "For this project, I developed a program that generates a user's top artists and songs of all time from their provided Spotify streaming history data in JSON format. I made use of the Pillow Python library to create the output image while making calls to the Spotify API for the details of a particular track or artist (e.g., album cover, release date, etc.).",
        cover: "assets/Tech/Bopiefy/cover.png",
        images: [
            "assets/Tech/Bopiefy/cover.png",
            "assets/Tech/Bopiefy/img-1.png",
        ],
        platforms: ["python", "spotify"],
        tags: [
            "Python Programming",
            "API Fetching",
            "Image Generation",
            "JSON Parsing",
        ],
        links: [
            {
                message: "View on GitHub",
                platform: "github",
                url: "https://github.com/pingu204/bopiefy",
            },
        ],
    },
    {
        title: "SafetyPal: A Crime Watcher App",
        description:
            "For an introduction to computer science class, I spearheaded the project that entails the prototyping of an application that addresses a real-world problem. My team and I came up with SafetyPal, a crime watcher mobile app. I led the creation of the prototype in Figma, ensuring that the interfaces are user-centered and intuitive.\n\n",
        cover: "assets/Tech/SafetyPal/cover.png",
        images: ["assets/Tech/SafetyPal/cover.png"],
        platforms: ["figma"],
        tags: ["High-Fidelity Prototyping", "UI/UX Design", "Branding"],
        links: [
            {
                message: "View Prototype",
                platform: "figma",
                url: "https://www.figma.com/proto/V6zGE2DgeEI3cq80Itlcl7/SafetyPal?node-id=323-1218&starting-point-node-id=323%3A1218",
            },
        ],
    },
    {
        title: "Cybot: A School Management Discord Bot",
        description:
            "For my research capstone project in high school, I developed a Discord bot configuration that caters to the needs of academic servers. This was in the context of online classes when the pandemic was at its high; thus, some of the key features of the bot included announcements, attendance checking, forums, and consultations.",
        cover: "assets/Tech/Cybot/cover.png",
        images: ["assets/Tech/Cybot/cover.png"],
        platforms: ["python", "discord"],
        tags: ["Bot Development", "Discord.py"],
        links: [
            {
                message: "View on GitHub",
                platform: "github",
                url: "https://github.com/pingu204/cybot-bot",
            },
        ],
    },
];

export const techTags: string[] = [
    "Front-end Development",
    "Full-Stack Development",
    "Software Engineering",
    "Web Development",
    "Bot Development",
    "UI/UX Design",
    "Data",
    "AI",
];

export const education: Milestone[] = [
    {
        role:
            new Date().getTime() > new Date(2026, 6, 5).getTime()
                ? "Summa Cum Laude 🏅"
                : "Senior Student",
        extension: "B.S. Computer Science",
        institution: "University of the Philippines Diliman",
        start_date: "09-2022",
        end_date: "07-2026",
        img: "https://upd.edu.ph/wp-content/uploads/2019/06/upd-logo-2019.png",
    },
    {
        role: "With High Honors 🏅",
        start_date: "08-2016",
        end_date: "07-2022",
        institution: "Philippine Science High School Main Campus",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/PSHS_System_Logo.png",
    },
];

export const experience: Milestone[] = [
    {
        role: "Frontend Developer",
        extension: "Contract",
        institution: "Vashcorp Inc.",
        start_date: "06-2026",
        end_date: "09-2026",
        img: "https://www.vashcorp.com/favicon.ico",
    },
    {
        role: "Frontend Development Consultant",
        extension: "Part-Time",
        institution: "Vashcorp Inc.",
        start_date: "07-2025",
        end_date: "06-2026",
        img: "https://www.vashcorp.com/favicon.ico",
    },
    {
        role: "Web Development Intern",
        extension: "Admin Section",
        institution: "Natural Sciences Research Institute",
        start_date: "06-2025",
        end_date: "07-2025",
        img: "https://upd.edu.ph/wp-content/uploads/2020/03/NSRI-logo.png",
    },
];

export const techStack: TechStack[] = [
    {
        category: "Programming",
        lst: [

            { name: "ReactJS", code: "reactjs" },
            { name: "Tailwind", code: "tailwind" },
            { name: "TypeScript", code: "ts" },
            { name: "NextJS", code: "nextjs" },
            { name: "Python", code: "python" },
            { name: "Django", code: "django" },
            { name: "HTML", code: "html" },
            { name: "CSS", code: "css" },
            { name: "C", code: "c" },
            { name: "MySQL", code: "mysql" },
            { name: "Svelte", code: "svelte" },
            { name: "Bootstrap", code: "bootstrap" },
        ],
    },
    {
        category: "Graphic Design",
        lst: [
            { name: "Adobe Photoshop", code: "photoshop" },
            { name: "Adobe Illustrator", code: "illustrator" },
            { name: "Adobe InDesign", code: "indesign" },
            { name: "Figma", code: "figma" },
            { name: "Canva", code: "canva" },
        ],
    },
    {
        category: "Other Software",
        lst: [
            { name: "Git", code: "git" },
            { name: "Microsoft Office", code: "ms" },
            { name: "Google Suite", code: "google-suite" },
            { name: "LaTex", code: "latex" },
            { name: "Sphinx", code: "sphinx" },
            { name: "Nextra", code: "nextra" },
        ],
    },
];

// export const data = {
// 	"socials": {
// 		"linkedin": "https://www.linkedin.com/in/jopeth-bryan-seda/",
// 		"instagram": "https://www.instagram.com/jopeth.psd/",
// 		"up-mail": "mailto:jbseda@up.edu.ph",
// 		"personal-mail": "mailto:sedajopeth@gmail.com",
// 		"github": "https://github.com/pingu204",
// 		"repo": "https://github.com/pingu204/Jopeth",
// 		"cv": "https://drive.google.com/drive/folders/1Vpj_t7dQ7SGKeTkMfC-mzY63p1waywXt?usp=sharing"
// 	},
// 	"design": [
// 		{
// 			"title": "UPD Computer Science Bootcamp 10.0 Merchandise",
// 			"type": "commission",
// 			"description": "I created t-shirt and lanyard designs for Bootcamp 10.0, an annual event for freshmen of the University of the Philippines-Diliman Department of Computer Science. Working closely with the event organizers, I conceptualized a cohesive brand that captures the aesthetic of computer science students while ensuring that the visual elements used in the design aligned with the theme of the event.",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/DCSMerch/cover.png",
// 			"modalID": "dcsMerch",
// 			"images": [
// 				"assets/Designs/DCSMerch/mockup_white.png",
// 				"assets/Designs/DCSMerch/mockup_isko.png",
// 				"assets/Designs/DCSMerch/mockup_blurple.png",
// 				"assets/Designs/DCSMerch/mockup_dcs.png"
// 			],
// 			"platforms": ["illustrator"],
// 			"tags": [
// 				"Merchandise Design",
// 				"Illustration",
// 				"Typography",
// 				"Branding",
// 				"Vector Art",
// 				"HUD Elements",
// 				"Technology"
// 			],
// 			"links": [
// 				{
// 					"message": "View on Facebook",
// 					"platform": "facebook",
// 					"url": "https://www.facebook.com/dcsbootcamp11.0/posts/pfbid0QjX5G4A1MYBzKCdcpckEFJGNYt1eZd1k9HpjiY6tit4cumtGpA8McvahrRHp86kHl"
// 				}
// 			]
// 		},
// 		{
// 			"title": "PSHS-MC Senior Year Batch Shirt | A.Y. 20-21",
// 			"type": "commission",
// 			"description": "I once participated in a batch shirt design competition during my senior year in high school and was selected as the winner. The shirt's design draws inspiration from vintage and retro illustrations, aiming to evoke a sense of nostalgia.",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/G11BatchShirt/shirt.png",
// 			"modalID": "g11BatchShirt",
// 			"images": ["assets/Designs/G11BatchShirt/details.png"],
// 			"tags": [
// 				"Merchandise Design",
// 				"Vector Art",
// 				"Vintage-Style Illustration"
// 			],
// 			"platforms": ["illustrator", "photoshop"],
// 			"links": [
// 				{
// 					"platform": "behance",
// 					"message": "View Case Study",
// 					"url": "https://www.behance.net/gallery/223538375/Vibrant-Retro-Inspired-Batch-Shirt-Design"
// 				}
// 			]
// 		},
// 		{
// 			"title": "Typography Poster Collection",
// 			"type": "",
// 			"description": "As someone with an expansive bandwidth for thoughts and ideas, I decided to create posters out of anecdotes in my life. Here I utilize design to evoke a certain feeling, support my faves, and generally anything under the sun!",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/Typography Posters/espresso_q.png",
// 			"modalID": "typographyPoster",
// 			"images": [
// 				"assets/Designs/Typography Posters/espresso_q.png",
// 				"assets/Designs/Typography Posters/email rant.png",
// 				"assets/Designs/Typography Posters/glimpse.png"
// 			],
// 			"platforms": ["photoshop"],
// 			"links": [
// 				{
// 					"platform": "instagram",
// 					"message": "More on Instagram",
// 					"url": "https://www.instagram.com/jopeth.psd/"
// 				}
// 			],
// 			"tags": ["Poster Design", "Typography", "Digital Art"]
// 		},
// 		{
// 			"title": "Vector Illustrations Collection",
// 			"description": "Some vector illustrations that I made, including portraits and scenery.",
// 			"type": "",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/Vectors/rainy full.png",
// 			"modalID": "vector",
// 			"images": [
// 				"assets/Designs/Vectors/rainy full.png",
// 				"assets/Designs/Vectors/muon_color.png",
// 				"assets/Designs/Vectors/haknyeon.png",
// 				"assets/Designs/Vectors/yoohyeon.png",
// 				"assets/Designs/Vectors/jennie.png"
// 			],
// 			"platforms": ["illustrator"],
// 			"links": [
// 				{
// 					"platform": "instagram",
// 					"message": "More on Instagram",
// 					"url": "https://www.instagram.com/jopeth.psd/"
// 				}
// 			],
// 			"tags": ["Vector Art", "Digital Art"]
// 		},
// 		{
// 			"title": "PSHS-MC 'Ang Lagablab' School Paper Spreads | A.Y. 21-22",
// 			"type": "Orgwork",
// 			"description": "For this project, I worked with a team of designers in creating the Filipino publication of Philippine Science High School - Main Campus that school year. I mainly worked on two spreads—one of the news pages and one of the editorial pages.",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/Lagablab/cover.png",
// 			"modalID": "angLagablab",
// 			"images": [
// 				"assets/Designs/Lagablab/B-1.png",
// 				"assets/Designs/Lagablab/H-1.png"
// 			],
// 			"platforms": ["indesign", "photoshop"],
// 			"tags": ["Print Design", "Typography", "Digital Art"]
// 		},
// 		{
// 			"title": "Leni-Kiko Jeepney Signs",
// 			"type": "",
// 			"description": "In solidarity with the Leni-Kiko tandem during the 2022 Presidential Elections in the Philippines, I made Jeepney signs that reflect their mass-centered campaign.",
// 			"date": "JANUARY 2025",
// 			"cover": "assets/Designs/LeniKiko/cover.png",
// 			"modalID": "leniKiko",
// 			"images": ["assets/Designs/LeniKiko/cover.png"],
// 			"platforms": ["photoshop", "illustrator"],
// 			"tags": [
// 				"Digital Art",
// 				"Typography",
// 				"Poster Design",
// 				"Print Design"
// 			]
// 		}
// 	],
// 	"designTags": [
// 		"Merchandise Design",
// 		"UI/UX Design",
// 		"Poster Design",
// 		"Typography",
// 		"Branding",
// 		"Digital Art",
// 		"Vector Art",
// 		"Print Design"
// 	],
// 	"tech": [
// 		{
// 			"title": "PilipiNuts 2024",
// 			"description": "I spearheaded the design of this website, which collates promising data science projects that expose the truths, trends, and turning points in the Philippines' path to sustainable development, all aligning with the United Nations' Global Goals. Furthermore, I implemented the mockup of the website using SvelteKit and Tailwind, mainly tasked with working on the About Us page.",
// 			"cover": "assets/Tech/PilipiNuts/cover.png",
// 			"images": ["assets/Tech/PilipiNuts/cover.png"],
// 			"platforms": ["svelte", "tailwind", "figma"],
// 			"tags": [
// 				"Front-end Development",
// 				"Web Development",
// 				"UI/UX Design"
// 			],
// 			"links": [
// 				{
// 					"message": "View Deployed Site",
// 					"url": "https://pilipinuts-2024.vercel.app/"
// 				},
// 				{
// 					"message": "View on GitHub",
// 					"platform": "github",
// 					"url": "https://github.com/paulrossener/pilipinuts-2024"
// 				}
// 			]
// 		},
// 		{
// 			"title": "RescueQuick",
// 			"description": "Collaborated with a team of developers in developing an AI-powered flood monitoring system for an Internet of Things (IoT) competition, mainly working on the front-end side (i.e., implementing the web dashboard). I also established the branding of the web app, making use of location tags to create an RQ logotype.",
// 			"cover": "assets/Tech/RescueQuick/cover.png",
// 			"images": [
// 				"assets/Tech/RescueQuick/cover.png",
// 				"assets/Tech/RescueQuick/poster.png",
// 				"assets/Tech/RescueQuick/img-1.png",
// 				"assets/Tech/RescueQuick/img-2.png",
// 				"assets/Tech/RescueQuick/img-3.png"
// 			],
// 			"platforms": [
// 				"django",
// 				"python",
// 				"tailwind",
// 				"figma",
// 				"illustrator"
// 			],
// 			"tags": [
// 				"Front-end Development",
// 				"UI/UX Design",
// 				"Branding",
// 				"Logo Design"
// 			],
// 			"links": [
// 				{
// 					"message": "View Deployed Site",
// 					"url": "https://pilipinuts-2024.vercel.app/"
// 				}
// 			]
// 		},
// 		{
// 			"title": "Making Every Peso Count",
// 			"description": "Collaborated with a group of students for a data science class in analyzing the discrepancies in the regional budget allocation of the Philippines towards the 10th Sustainable Development Goal (Reduced Inequalities). I primarily worked on the front-end side—creating a logo to represent the project and developing a portfolio website that presents the background, findings, and takeaways of the said study.\n\nAwarded 'Best Design', 'Best Story', 'Outstanding Analysis', 'Outstanding Interactive Visuals' within the class",
// 			"cover": "assets/Tech/MakingEveryPesoCount/cover.png",
// 			"images": ["assets/Tech/MakingEveryPesoCount/cover.png"],
// 			"platforms": [
// 				"html",
// 				"css",
// 				"bootstrap",
// 				"python",
// 				"pandas",
// 				"colab",
// 				"plotly"
// 			],
// 			"tags": [
// 				"Front-end Development",
// 				"Web Development",
// 				"UI/UX Design",
// 				"Data"
// 			],
// 			"links": [
// 				{
// 					"message": "View Deployed Site",
// 					"url": "https://pingu204.github.io/cs132-CalyphYakult/"
// 				},
// 				{
// 					"message": "View on GitHub",
// 					"platform": "github",
// 					"url": "https://github.com/pingu204/cs132-CalyphYakult"
// 				}
// 			]
// 		},
// 		{
// 			"title": "Automated Planner for Efficient Scheduling",
// 			"type": "commission",
// 			"description": "Led a team of developers in creating a web application that aids the students of UP Diliman in curating their semestral schedules. The application takes in the list of classes a user needs and generates viable schedules for them. With just a few clicks, users can now have a glimpse of their possible schedules, easily mix and match classes, and even save these schedules for future reference!",
// 			"cover": "assets/Tech/APES/cover.png",
// 			"images": [
// 				"assets/Tech/APES/cover.png",
// 				"assets/Tech/APES/img-1.png",
// 				"assets/Tech/APES/img-2.png",
// 				"assets/Tech/APES/img-3.png",
// 				"assets/Tech/APES/img-4.png",
// 				"assets/Tech/APES/img-5.png"
// 			],
// 			"platforms": ["django", "python", "bootstrap", "figma"],
// 			"tags": [
// 				"Full-Stack Development",
// 				"Software Engineering",
// 				"Web Development",
// 				"UI/UX Design",
// 				"Quality Education SDG"
// 			],
// 			"links": [
// 				{
// 					"message": "View Deployed Site",
// 					"url": "https://cs192-apes-2pui.vercel.app/"
// 				},
// 				{
// 					"message": "View on GitHub",
// 					"platform": "github",
// 					"url": "https://github.com/pingu204/cs192-APES"
// 				},
// 				{
// 					"message": "View Prototype",
// 					"platform": "figma",
// 					"url": "https://www.figma.com/proto/ZcXqO41rcm8Vz7tT0wC7tG/%5BAPES%5D-Prototype-2.0?node-id=35-23&t=7fW3QOHZHLq9gfdZ-1"
// 				}
// 			]
// 		},
// 		{
// 			"title": "Spotify Stats Generator",
// 			"description": "For this project, I developed a program that generates a user's top artists and songs of all time from their provided Spotify streaming history data in JSON format. I made use of the Pillow Python library to create the output image while making calls to the Spotify API for the details of a particular track or artist (e.g., album cover, release date, etc.).",
// 			"cover": "assets/Tech/Bopiefy/cover.png",
// 			"images": [
// 				"assets/Tech/Bopiefy/cover.png",
// 				"assets/Tech/Bopiefy/img-1.png"
// 			],
// 			"platforms": ["python", "spotify"],
// 			"tags": [
// 				"Python Programming",
// 				"API Fetching",
// 				"Image Generation",
// 				"JSON Parsing"
// 			],
// 			"links": [
// 				{
// 					"message": "View on GitHub",
// 					"platform": "github",
// 					"url": "https://github.com/pingu204/bopiefy"
// 				}
// 			]
// 		},
// 		{
// 			"title": "SafetyPal: A Crime Watcher App",
// 			"description": "For an introduction to computer science class, I spearheaded the project that entails the prototyping of an application that addresses a real-world problem. My team and I came up with SafetyPal, a crime watcher mobile app. I led the creation of the prototype in Figma, ensuring that the interfaces are user-centered and intuitive.\n\n",
// 			"cover": "assets/Tech/SafetyPal/cover.png",
// 			"images": ["assets/Tech/SafetyPal/cover.png"],
// 			"platforms": ["figma"],
// 			"tags": ["High-Fidelity Prototyping", "UI/UX Design", "Branding"],
// 			"links": [
// 				{
// 					"message": "View Prototype",
// 					"platform": "figma",
// 					"url": "https://www.figma.com/proto/V6zGE2DgeEI3cq80Itlcl7/SafetyPal?node-id=323-1218&starting-point-node-id=323%3A1218"
// 				}
// 			]
// 		},
// 		{
// 			"title": "Cybot: A School Management Discord Bot",
// 			"description": "For my research capstone project in high school, I developed a Discord bot configuration that caters to the needs of academic servers. This was in the context of online classes when the pandemic was at its high; thus, some of the key features of the bot included announcements, attendance checking, forums, and consultations.",
// 			"cover": "assets/Tech/Cybot/cover.png",
// 			"images": ["assets/Tech/Cybot/cover.png"],
// 			"platforms": ["python", "discord"],
// 			"tags": ["Bot Development", "Discord.py"],
// 			"links": [
// 				{
// 					"message": "View on GitHub",
// 					"platform": "github",
// 					"url": "https://github.com/pingu204/cybot-bot"
// 				}
// 			]
// 		}
// 	],
// 	"techTags": [
// 		"Front-end Development",
// 		"Full-Stack Development",
// 		"Software Engineering",
// 		"Web Development",
// 		"Bot Development",
// 		"UI/UX Design",
// 		"Data",
// 		"AI"
// 	],
// 	"education": [
// 		{
// 			"role": "Web Development Intern",
// 			"extension": "Admin Section",
// 			"institution": "Natural Sciences Research Institute",
// 			start_date: "06-2025",
//             end_date: "07-2025",
// 			"ongoing": true,
// 			"img": "https://upd.edu.ph/wp-content/uploads/2020/03/NSRI-logo.png"
// 		},
// 		{
// 			"role": (new Date().getTime() > new Date(2026,6,5).getTime())
//                 ? "Degree Holder"
//                 : "Senior Student",
// 			"extension": "B.S. Computer Science",
// 			"institution": "University of the Philippines - Diliman",
//             start_date: "09-2022",
//             end_date: "07-2026",
// 			"year": "2022-2026",
// 			"ongoing": true,
// 			"img": "https://upd.edu.ph/wp-content/uploads/2019/06/upd-logo-2019.png"
// 		},
// 		{
// 			"role": "High School Graduate",
//             start_date: "08-2016",
//             end_date: "07-2022",
// 			"institution": "Philippine Science High School - Main Campus",
// 			"year": "2016-2022",
// 			"ongoing": false,
// 			"img": "https://upload.wikimedia.org/wikipedia/commons/c/c6/PSHS_System_Logo.png"
// 		}
// 	],
// 	"tech_stack": [
// 		{
// 			"category": "Programming",
// 			"lst": [
// 				{ "name": "Python", "code": "python" },
// 				{ "name": "HTML", "code": "html" },
// 				{ "name": "CSS", "code": "css" },
// 				{ "name": "JavaScript", "code": "js" },
// 				{ "name": "C", "code": "c" },
// 				{ "name": "MySQL", "code": "mysql" },
// 				{ "name": "Django", "code": "django" },
// 				{ "name": "Svelte", "code": "svelte" },
// 				{ "name": "ReactJS", "code": "reactjs" },
// 				{ "name": "Tailwind", "code": "tailwind" },
// 				{ "name": "Bootstrap", "code": "bootstrap" },
// 				{ "name": "Git", "code": "git" }
// 			]
// 		},
// 		{
// 			"category": "Graphic Design",
// 			"lst": [
// 				{ "name": "Adobe Photoshop", "code": "photoshop" },
// 				{ "name": "Adobe Illustrator", "code": "illustrator" },
// 				{ "name": "Adobe InDesign", "code": "indesign" },
// 				{ "name": "Figma", "code": "figma" },
// 				{ "name": "Canva", "code": "canva" }
// 			]
// 		},
// 		{
// 			"category": "Other Software",
// 			"lst": [
// 				{ "name": "Microsoft Office", "code": "ms" },
// 				{ "name": "Google Suite", "code": "google-suite" },
// 				{ "name": "LaTex", "code": "latex" }
// 			]
// 		}
// 	]
// }
