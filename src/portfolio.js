/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abraham's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abraham Portfolio",
    type: "website",
    // url: "http://abrahamreta.com/",
  },
};

//Home Page
const greeting = {
  title: "Abraham Reta",
  logo_name: "Abraham",
  subTitle:
    "Hi, I'm a software developer with years of experience working on a variety of projects for companies of all sizes and domains. I have a deep understanding of front-end and back-end development and a proven track record of delivering projects on time and within budget. I'm a team player who enjoys collaborating with others to deliver high-quality work that helps businesses succeed. Let's create something great together!",
  resumeLink:
    "https://drive.google.com/file/d/1fT-LtHfPT92l6EID-RpdSQEqtsHAuEFT/view",
  portfolio_repository: "https://github.com/areta1921/",
  githubProfile: "https://github.com/areta1921",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/areta1921",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abrahamreta/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:agetahun567@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/abrahamgetahun2",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL Server",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "CodeCademy",
      iconifyClassname: "simple-icons:codecademy",
      style: {
        color: "#F79F1B",
      },
      profileLink:
        "https://drive.google.com/drive/u/0/folders/1Ilv-YvdGid785BqVP9piSSddgAr9yAQQ",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/certificates/875d06ccf11c",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Wollo University Kombolcha Institute of Technology",
      subtitle: "Textile Engineering",
      logo_path: "Wollo-University.png",
      alt_name: "KIOT",
      duration: "2011 - 2016",
      descriptions: [
        "⚡ I have a strong understanding of the chemistry, physics, and engineering principles behind textile production.",
        "⚡ I am familiar with the different types of textile fibers, yarns, and fabrics.",
        "⚡ I am able to think critically and creatively to come up with solutions to problems. I am able to identify the root cause of a problem and develop a solution that addresses the root cause.",
      ],
      website_link: "http://wu.edu.et",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "FullStack software developer program",
      subtitle: "- Multiverse",
      logo_path: "multiverse.png",
      certificate_link: "https://www.multiverse.io/en-US/programs",
      alt_name: "Multiverse",
      color_code: "#8C151599",
    },
    {
      title: "Full Stack Java Developer",
      subtitle: "- Generation USA",
      logo_path: "generation.webp",
      certificate_link:
        "https://drive.google.com/file/d/1PRfw2Y136hGuqENdlJJSKNtQVinAV2RS/view",
      alt_name: "deeplearning",
      color_code: "#00000034",
    },
    {
      title: "Jr. Full Stack JAVA Developer",
      subtitle: "- Atlanta Technical College",
      logo_path: "atlanta.png",
      certificate_link:
        "https://drive.google.com/file/d/1crt7vy4K8W2qSQaLmfE6bIAxKKfuwZH-/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Computer Information Systems - Database Administration",
      subtitle: "- Aims Community College",
      logo_path: "aims.png",
      certificate_link:
        "https://drive.google.com/file/d/1K69HpyW0oteTYHkDde3P4V0woSIekWby/view",
      alt_name: "AIMS",
      color_code: "#1F70C199",
    },
    {
      title: "Sewing and Apparel Quality Control and Assurance",
      subtitle: "- Ethiopian Textile Industry Development Institute",
      logo_path: "textile.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1CdasZbgCAid6Rt_jIyIUkwlOoWlscB5X/view",
      alt_name: "Textile",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Certified Azure Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "azure.png",
      certificate_link:
        "https://www.credly.com/badges/44b5f0c2-3ca1-401d-95bc-b1d52af650a8",
      alt_name: "Microsoft",
      color_code: "#1F70C199",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Service",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/0b344ba3-e3ab-4cc6-adc4-d88c8ffd77c7",
      alt_name: "AWS",
      color_code: "#0C9D5899",
    },
    {
      title: "Next Generation Tech Booster Scholarship",
      subtitle: "- Udemy",
      logo_path: "udacity.png",
      certificate_link:
        "https://drive.google.com/file/d/1k9mYNL5-EcOE_be_XYBlJ9rjd4ccdC-4/view",
      alt_name: "AWS",
      color_code: "#0B5D5899",
    },
    {
      title: "AWS Solutions Architect",
      subtitle: "- Amazon Web Service",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1oGPmZN2ibJYVqsVfEfOlad-qXkrfnWdc/view",
      alt_name: "AWS",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have experience developing, maintaining, and testing web applications using React, Typescript, and other technologies. I am also familiar with the scrum methodology and have experience working in a team environment.I am confident that my skills and experience would be an asset to your team. I am always looking for new challenges and I am always willing to go the extra mile to get the job done.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Junior Software Engineer",
          company: "Mckinsey & Company",
          company_url: "https://www.mckinsey.com/",
          logo_path: "mckinsey.webp",
          duration: "03/2022 - 06/2023",
          location: "Atlanta, Georgia",
          description:
            "As a junior software engineer, I am responsible for writing and debugging code, working with other developers, testing software, documenting code, and learning new technologies. I am also expected to be able to work independently and as part of a team, and to meet deadlines and work under pressure.",
          color: "#0879bf",
        },
        {
          title: "Quality Control Inspector",
          company: "JBS",
          company_url: "https://jbsfoodsgroup.com/",
          logo_path: "jbs.png",
          duration: "07/2018 - 04/2021",
          location: "Greeley, Colorado",
          description:
            "To ensure the quality of products and services, it is important to monitor equipment, maintain accurate records, and inspect raw materials, production processes, and finished products. This includes checking for defects, ensuring that processes are being followed correctly, and verifying that products meet quality standards.",
          color: "#9b1578",
        },
        {
          title: "Quality Assurance Manager",
          company: "Weinu Textile Curtain and Trade",
          company_url: "https://etgama.com/",
          logo_path: "ethiopin.webp",
          duration: "Nov 2017 - Dec 2017",
          location: "Modjo, Ethiopia",
          description:
            "To ensure quality deliveries, it is important to conduct daily factory visits. This includes identifying and troubleshooting any sewing and cutting construction issues with operators at the factory, working with the production team daily to call out any production issues, notifying the production manager if any production is falling behind, and specing garments to confirm they achieve the target measurement.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I use a wide range of cutting-edge technology tools to solve a variety of problems in my projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ab.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Javascript, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I'am adding blogs soon! Stay tuned for my new blog posts, I will share more information about my products and services, as well as insights into the industry.",
    link: "https://blogs.abrahamreta.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "5400 memorial drive,  - 30083",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/tepi9t1nG3zoHH8f9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
