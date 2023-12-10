const experience = [
    {
      id: 1,
      date: "Jan 2022 - Present",
      position: "Backend Developer",
      company: "KMS Lighthouse",
      url: "https://kmslh.com/",
      description: [
        {
          id: 1,
          description:
            "Investigated and fixed bugs in the search system of KMS Lighthouse including search algorithms, RESTful API and Solr configuration",
        },
        {
          id: 2,
          description:
            "Worked on improving search performance and multilanguage Solr configuration",
        },
        {
          id: 3,
          description:
            "Conducted research to increase language detection performance",
        },
      ],
    },
    {
      id: 2,
      date: "Feb 2020 - Apr 2020",
      position: "Backend Developer Intern",
      company: "ISPsystem",
      url: "https://www.ispsystem.com/",
      description: [
        {
          id: 1,
          description:
            "Received coaching and support from senior developers and gained practical experience in GoLang for backend development",
        },
        {
          id: 2,
          description:
            "Participated in VMmanager import service development under the supervision of a senior software engineer",
        },
      ],
    },
  ];
  
  export default experience;
  

  const skills = [
    {
      id: 1,
      title: "Back End",
      image: "backend_blue.png",
      languages: [
        {
          id: 1,
          title: "Java",
          css: "java",
        },
        {
          id: 2,
          title: "Groovy",
          css: "groovy",
        },
        {
          id: 3,
          title: "Apache Solr",
          css: "solr",
        },
        {
          id: 4,
          title: "Spring Data",
          css: "spring",
        },
        {
          id: 5,
          title: "Docker",
          css: "docker",
        },
      ],
      description:
        "I develop web apps using JVM languages and work closely with NoSQL search engines like Apache Solr",
    },
    {
      id: 2,
      title: "Front End",
      image: "frontend_blue.png",
      languages: [
        {
          id: 1,
          title: "JavaScript",
          css: "js",
        },
        {
          id: 2,
          title: "Vue.js",
          css: "vuejs",
        },
        {
          id: 3,
          title: "Bootstrap",
          css: "bootstrap",
        },
        {
          id: 4,
          title: "Bulma",
          css: "bulma",
        },
      ],
      description:
        "Even though Im a backend developer, I have passion for designing web apps and websites and Im into such things as JavaScript and Vue.js",
    },
    {
      id: 3,
      title: "Machine Learning",
      image: "ai_blue.png",
      languages: [
        {
          id: 1,
          title: "Tensorflow",
          css: "tensorflow",
        },
        {
          id: 2,
          title: "PyTorch",
          css: "pytorch",
        },
        {
          id: 3,
          title: "OpenCV",
          css: "opencv",
        },
      ],
      description:
        "I use deep learning to solve problems in the real world. I use Tensorflow and PyTorch to build neural networks and use OpenCV to process images",
    },
  ];
  
  export default skills;

  

  const awards = [
    {
      id: 1,
      title: "JunctionX Seoul 2021 SI Analytics 3rd Winner",
      date: "21 - 23 of May, 2021",
      image: "junction2021.jpg",
      description:
        "3rd place in Satellite Image Analysis track with AI-powered web application able to track changes in the urban landscape",
    },
    {
      id: 2,
      title: "IEEE Seoul Section Student Paper Contest Bronze Award",
      date: "12th of December, 2020",
      image: "IEEE_diploma.png",
      description:
        "For paper «The Optimal Operation of Energy Storage System with Distributed Generators by Using Data-based Prediction Method»",
    },
    {
      id: 3,
      title: "JunctionX Seoul 2020 SI Analytics 3rd Winner",
      date: "9 - 11th of October, 2020",
      image: "junction2020.jpg",
      description:
        "3rd place in Satellite Image Analysis track with project natural disaster tracker SmartMonitor",
    },
    {
      id: 4,
      title:
        "52nd KIEE Summer Conference 2021 Graduate Students Outstanding Paper Award",
      date: "14 - 17th of July, 2021",
      image: "2021_KIEE_Award.png",
      description: "Excellence Prize",
    },
  ];
  
  export default awards;
  