import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    //mongodb,
    git,
    //figma,
    docker,
    meta,
   // starbucks,
    tesla,
    shopify,
    //house,
    //carrent,
    //jobit,
    //tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const house = '/home/james/personal-projects/Portfolio/src/assets/house.png'
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Foundations",
      company_name: "Go Time",
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe1zemPhV4k_7jiMFxL_78L7SAjkOMBRed7g&usqp=CAU',
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Setting up our devices, Getting acquainted with using the lunix command line, using Git and GitHub.",
        "Introduction to HTML, CSS and JavaScript, with all the new information to take in we focused on creating a wellbeing plan to maintain healthy routine.",
        "Creating our first website, diving deeper into JavaScript with Kata code challenges to work on our problem solving.",
        "Working on mini projects and creating games! Completing challenges using logic and problem solving to put what we had learnt so far to the test",
      ],
    },
    {
      title: "Bootcamp Phase One",
      company_name: "Stepping it up a gear",
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLMy__Gv4EQPy6xLx4k0BAkJjNYXnEnllwg&usqp=CAU',
      iconBg: "#E6DEDD",
      date: "April 2023 - May 2023",
      points: [
        "Week one of bootcamp was awesome meeting everyone and getting acquainted to the workspace.",
        "Human skills deep dives and Yoga! Combined with in depth Lectures and coding exercises.",
        "Working in pairs writing algorithms using logic and problem solving and then testing our applications.",
        "Introduction to back end development using express Js and other frameworks, introduction to Databases and Friday group projects.",
      ],
    },
    {
      title: "Bootcamp Phase Two",
      company_name: "Turing up the volume",
      icon: 'https://i.pinimg.com/474x/f6/8d/97/f68d97da2a5d3e3a13741dfea2e72cf1.jpg',
      iconBg: "#383E56",
      date: "May 2023 - Jume 2023",
      points: [
        "In depth look at frontend development, introduction to React.",
        "Client-side routing and working in group projects to build applications.",
        "Researching new technologies and delivering lightning talk presentations in groups, giving and receiving feedback.",
        "Working with API’s, building applications, applying agile methodologies and connecting the front end to the back end.",
      ],
    },
    {
      title: "Bootcamp Phase Three",
      company_name: "Full Stack, No Sleep",
      icon: 'https://w7.pngwing.com/pngs/38/533/png-transparent-computer-icons-encapsulated-postscript-winner-miscellaneous-sport-hand.png',
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "Break out lectures on new and popular tech being used in the industry.",
        "Working on multiday projects in groups using full stack development skills.",
        "Presenting personal projects and final group projects.",
        "Pat yourself on the back! Well done.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Dam @James! Just saw your project on my Twitter feed, Mad Skills My Dude. Want a Job at Tesla?",
      name: "Elon Musk",
      designation: "CEO",
      company: "Tesla",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      testimonial:
        "Kick Ass website James! can you make one for me!",
      name: "Nicolas Cage",
      designation: "Academy Award winner",
      company: "Hollywood",
      image: "https://flxt.tmsimg.com/assets/258_v9_bb.jpg",
    },
    {
      testimonial:
        "Microsoft Needs People Like You james, Hit me up on Careers week.",
      name: "Bill Gates",
      designation: "CEO",
      company: "Microsoft",
      image: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mind Peeper",
      description:
        "Friday Group project working in a team using React Libery to make a mystery box App. Look no further Potential employers!",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://cdn.shopify.com/s/files/1/0507/8083/1907/products/mystery-box-1-removebg-preview_513x486.png?v=1630723729',
      source_code_link: "https://github.com/piwakawaka-2023/Mystery-Box-",
    },
    {
      name: "ListIT",
      description:
        "Mobile aplication where users can share a live shopping list with chosen members.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodeJs",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://newtodesign.com/wp-content/uploads/2018/10/Animated-Pure-CSS-Checkbox.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "AI Image genarator",
      description:
        "Using API's to created a AI image genarator from a user input prompt",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "javaScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://mpost.io/wp-content/uploads/image-34-27.jpg',
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };