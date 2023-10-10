import {
    mobile,
    backend,
    creator,
    web,
    docker,
    ansible,
    aws,
    azure,
    bash,
    grafana,
    kubernetes,
    jenkins,
    prometheus1,
    python,
    splunk,
    terraform,
    kibana,
    vizion,
    jchord,
    tpi,
    adweek,
    dominion,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
  
  const services = [
    {
      title: "Platform Reliability Engineer",
      icon: web,
    },
    {
      title: "Devops Engineer",
      icon: mobile,
    },
    {
      title: "Cloud Infrastructure Engineer",
      icon: backend,
    },
    {
      title: "Site Reliability Engineer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: creator,
    },
    {
      title: "DevSecOps",
      icon: backend,
    },
    {
      title: "Linux Admin",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "ansible",
      icon: ansible,
    },
    {
      name: "kubernetes",
      icon: kubernetes,
    },
    {
      name: "terraform",
      icon: terraform,
    },
    {
      name: "splunk",
      icon: splunk,
    },
    {
      name: "prometheus1",
      icon: prometheus1,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "grafana",
      icon: grafana,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "azure",
      icon: azure,
    },
    {
      name: "kibana",
      icon: kibana,
    },
    {
      name: "bash",
      icon: bash,
    },

  ]
  const experiences = [
    {
      title: "John Mensah",
      company_name: "Cybertrek",
      icon: jchord,
      iconBg: "#383E56",
      date: "June 2022 - April 2023",
      points: [
        "- Implementing and maintaining highly scalable and reliable cloud infrastructure using Terraform, Ansible, Kubernetes, AWS and Azure services.",
        "- Collaborating with cross-functional teams including designers, product managers, QA, and other developers to create high-quality products.",
        "- Architected and migrated applications to cloud infrastructure using AWS, Azure, and WordPress Engine resulting in a 50% reduction in infrastructure costs and improved scalability.",
        "- Designing optimizing and implementing cloud-based disaster recovery solutions.",
      ],
    },
    {
      title: "Sahr John",
      company_name: "Cybertrek",
      icon: vizion,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Feb 2022",
      points: [
        "- Engineered a suite of Cloud Formation templates, Terraform scripts, and Azure Resource Managers to automate the deployment of production environments; reduced deployment time by 85%.",
        "- Designed and built Kubernetes clusters with auto scaling, load balancing, and routing capabilities, increasing system reliability and resilience on a 24/7 basis.",
        "- Effectively secured secret management, utilizing HashiCorp Vault, Ansible Vault, AWS Secret Manager, and Azure Key Vault, increasing overall security and compliance.",
        "- Integrated and automated unit testing tools within SCM and CI/CD to maintain code quality, version control and provide constructive feedback to team.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };