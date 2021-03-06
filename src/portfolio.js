﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'David Bottiau',
  title: "Hi all, I'm David",
  subTitle: emoji(
    "I am a passionate Full 🌟 Software Developer who ❤ to make well-crafted applications, my favorite languages are TypeScript and the C# / F# duo and I am a big fan of Functional Reactive Programming: React, rxjs, Rx.NET and all the good stuff 🎁"
  ),
  // resumeLink:
  //   'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Odonno",
  linkedin: "https://www.linkedin.com/in/david-bottiau/",
  // gmail: 'saadpasta70@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  // facebook: 'https://www.facebook.com/saad.pasta7',
  medium: 'https://medium.com/@dbottiau',
  // stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  twitter: 'https://twitter.com/dbottiau',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

// TODO : C#/F#, Visual Studio, VSCode, Azure, rxjs

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop delightful User eXperiences'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of Cloud Provider services such as Firebase / Azure'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: 'sql database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Harvard University',
      logo: require('./assets/images/harvardLogo.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2017 - April 2019',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Stanford University',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Facebook',
      companylogo: require('./assets/images/facebookLogo.png'),
      date: 'June 2018 – Present',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Quora',
      companylogo: require('./assets/images/quoraLogo.png'),
      date: 'May 2017 – May 2018',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Airbnb',
      companylogo: require('./assets/images/airbnbLogo.png'),
      date: 'Jan 2015 – Sep 2015',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'Odonno', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'false', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/seconde-main.png'),
      link: 'https://secondemain.kiabi.com/',
    },
    {
      image: require('./assets/images/eurotunnel.jpg'),
      link: 'https://driver.eurotunnelfreight.com/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url: "https://medium.com/@dbottiau/net-core-templates-for-azure-web-app-e79d008d6440",
      title: ".NET Core templates for Azure Web App",
      description: "ASP.NET Core Azure Templates is a list of templates used to generate ASP.NET Core web apps using ready-to-use Azure features"
    },
    {
      url: "https://medium.com/@dbottiau/a-state-management-comparison-with-react-hooks-mobx-and-recoiljs-3b7e2f4cc6c3",
      title: "A State management comparison with React hooks, mobx and recoiljs",
      description: "Let’s see in details where we are going by focusing on the state management current trends: hooks, mobx and recoiljs."
    },
    {
      url: "https://medium.com/@dbottiau/advanced-realtime-streaming-with-signalr-in-net-core-2e38fce26fbb",
      title: "Advanced realtime streaming with SignalR in .NET Core",
      description: "Since ASP.NET Core 2.1, we can now use SignalR streaming which is a new feature that allows us to push data to or receive data from client/server in a much more efficient way."
    },
    {
      url: "https://medium.com/@dbottiau/simplify-your-realtime-applications-by-bringing-signalr-into-the-ngrx-ecosystem-bc984cf2800c",
      title: "Simplify your realtime applications by bringing SignalR into the @ngrx ecosystem",
      description: "By bringing SignalR to your @ngrx/store and your @ngrx/effect, you gain control over your application in different ways."
    },
    {
      url: "https://medium.com/@dbottiau/a-bright-future-for-functional-reactive-programming-and-net-developers-54780cd2f838",
      title: "A bright future for Functional Reactive Programming and .NET developers",
      description: "Functional Reactive Programming is bringing the best of those two worlds and I started bringing amazing stuff for FRP and .NET developers."
    },
    {
      url: "https://itnext.io/a-memo-on-how-to-implement-azure-ad-authentication-using-react-and-net-core-2-0-3fe9bfdf9f36",
      title: "A memo on how to implement Azure AD authentication using React and .NET Core",
      description: "I found many ways to implement Azure AD authentication using React and a .NET Core 2.x backend. In this article, I will demonstrate how to implement this type of authentication."
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Find Me'),
  // subtitle:
  //   'Discuss a project or just want to say hi? My Inbox is open for all.',
  // number: '+92-3243454077',
  // emailAddress: 'saadpasta70@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'dbottiau', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
