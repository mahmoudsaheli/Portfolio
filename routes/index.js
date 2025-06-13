const express = require('express');
const axios = require('axios');
const router = express.Router();


const projects = [
  {
    title: "Agema Mobile",
    tech: ["Angular", ".NET Core", "MS SQL", "Ionic"],
    date: "May 2019–Present",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "Full-stack Developer"
  },
  {
    title: "Open Banking",
    tech: ["React", "Node.js", "PostgreSQL"],
    date: "Jan 2021–Dec 2021",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    desc: "Back-end Developer"
  },
  {
    title: "Personal Portfolio",
    tech: ["Express.js", "HBS", "Bootstrap"],
    date: "Mar 2024",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    desc: "Front-end Developer"
  },
  {
    title: "E-commerce Store",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    date: "Jul 2023–Sep 2023",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    desc: "Full-stack Developer"
  },
  {
    title: "Task Manager App",
    tech: ["React Native", "Redux", "MongoDB"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "Mobile App Developer"
  },
  {
    title: "Job Board Platform",
    tech: ["Laravel", "MySQL", "Blade"],
    date: "Oct 2022–Feb 2023",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    desc: "Back-end Developer"
  },
  {
    title: "Chat Application",
    tech: ["Node.js", "Socket.IO", "Express"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    desc: "Real-Time Communication Engineer"
  },
  {
    title: "Fitness Tracker",
    tech: ["Flutter", "Firebase", "Dart"],
    date: "Jan 2023–Mar 2023",
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=800&q=80",
    desc: "Mobile Developer"
  },
  {
    title: "Blog CMS",
    tech: ["Next.js", "MongoDB", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    desc: "Full-stack Developer"
  },
  {
    title: "Travel Booking Site",
    tech: ["PHP", "MySQL", "jQuery"],
    date: "2018–2019",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    desc: "Web Developer"
  }
];


const organizations = [
  {
    name: "Google",
    role: "Software Engineer",
    date: "Jan 2020 - Present",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Microsoft",
    role: "Intern",
    date: "Jun 2019 - Aug 2019",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Amazon",
    role: "Cloud Consultant",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Facebook",
    role: "Frontend Developer",
    date: "2018 - 2019",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
  },
  {
    name: "Netflix",
    role: "Software Developer",
    date: "2017 - 2018",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  },
  {
    name: "Google",
    role: "Software Engineer",
    date: "Jan 2020 - Present",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Microsoft",
    role: "Intern",
    date: "Jun 2019 - Aug 2019",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    name: "Amazon",
    role: "Cloud Consultant",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Facebook",
    role: "Frontend Developer",
    date: "2018 - 2019",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
  },
  {
    name: "Netflix",
    role: "Software Developer",
    date: "2017 - 2018",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  }
  
];

const posts = [
  {
    title: "Mastering JavaScript in 30 Days",
    date: "July 15, 2025",
    excerpt: "JavaScript is the backbone of modern web development. In this post, we explore a 30-day plan to master JavaScript fundamentals and advanced concepts.",
    content: `<p>JavaScript is a versatile and widely-used language for web development. This 30-day guide will help you systematically learn the language, from basics like variables and functions to advanced topics such as asynchronous programming and ES6+ features.</p>
              <h3>Week 1: Basics</h3>
              <p>Start with variables, data types, control flow, and functions. Understand how JavaScript works in the browser and how to manipulate the DOM.</p>
              <h3>Week 2: Intermediate Concepts</h3>
              <p>Dive into objects, arrays, event handling, and DOM manipulation to create interactive web pages.</p>
              <h3>Week 3: Advanced Topics</h3>
              <p>Understand closures, promises, async/await, modules, and how to handle asynchronous JavaScript.</p>
              <h3>Week 4: Project</h3>
              <p>Build a small web app that uses APIs, handles events, and demonstrates the concepts you’ve learned.</p>`
  },
  {
    title: "Introduction to Cloud Computing",
    date: "June 10, 2025",
    excerpt: "Cloud computing has revolutionized the way businesses operate. Learn about the core concepts, benefits, and popular cloud platforms in this beginner's guide.",
    content: `<p>Cloud computing allows businesses to rent computing power and storage over the internet, making it scalable and cost-effective.</p>
              <h3>What is Cloud Computing?</h3>
              <p>Definition and types: public, private, and hybrid clouds. Understand how they differ and when to use each.</p>
              <h3>Benefits</h3>
              <ul><li>Flexibility to scale resources on-demand</li><li>Cost savings from pay-as-you-go pricing</li><li>Easy access from anywhere with an internet connection</li></ul>
              <h3>Popular Platforms</h3>
              <p>AWS, Microsoft Azure, and Google Cloud Platform offer robust services like computing, storage, databases, and AI tools.</p>`
  },
  {
    title: "Building Responsive Websites with CSS Grid",
    date: "May 22, 2025",
    excerpt: "CSS Grid layout offers a powerful way to create responsive and flexible web designs. Discover how to implement grid-based layouts with practical examples.",
    content: `<p>CSS Grid allows developers to build complex, responsive layouts easily without relying on floats or positioning hacks.</p>
              <h3>Basics of CSS Grid</h3>
              <p>Learn about grid containers, grid items, rows, and columns.</p>
              <h3>Responsive Design</h3>
              <p>Use media queries to create layouts that adapt to different screen sizes.</p>
              <h3>Practical Examples</h3>
              <p>Create common web layouts like cards, galleries, and dashboards using CSS Grid.</p>`
  },
  {
    title: "Getting Started with Machine Learning",
    date: "April 5, 2025",
    excerpt: "Machine learning is shaping the future of technology. This post introduces the basics of machine learning and how to build your first model.",
    content: `<p>Machine learning enables computers to learn from data and make predictions or decisions without explicit programming.</p>
              <h3>Key Concepts</h3>
              <p>Understand supervised vs unsupervised learning, datasets, features, and labels.</p>
              <h3>Popular Algorithms</h3>
              <p>Learn about decision trees, regression, clustering, and neural networks.</p>
              <h3>Building a Simple Model</h3>
              <p>Step-by-step guide to create a model using Python and scikit-learn.</p>`
  },
  {
    title: "Top 5 Productivity Tools for Developers",
    date: "March 18, 2025",
    excerpt: "Boost your coding efficiency with these top 5 productivity tools every developer should know about, from code editors to project management apps.",
    content: `<p>Developers have a wealth of tools at their disposal to streamline coding and project management.</p>
              <h3>1. Visual Studio Code</h3>
              <p>A lightweight, powerful code editor with vast plugin support.</p>
              <h3>2. GitHub</h3>
              <p>Version control and collaborative code hosting platform.</p>
              <h3>3. Postman</h3>
              <p>Tool for testing APIs easily.</p>
              <h3>4. Slack</h3>
              <p>Team communication and collaboration tool.</p>
              <h3>5. Trello</h3>
              <p>Simple project management with boards, lists, and cards.</p>`
  },
  {
    title: "Understanding REST APIs",
    date: "February 28, 2025",
    excerpt: "REST APIs are the backbone of modern web services. Learn how REST works and how to build your own API.",
    content: `<p>REST (Representational State Transfer) is an architectural style for designing networked applications.</p>
              <h3>REST Principles</h3>
              <p>Statelessness, client-server separation, and resource-based URLs.</p>
              <h3>HTTP Methods</h3>
              <p>GET, POST, PUT, DELETE and their typical uses in APIs.</p>
              <h3>Building a REST API</h3>
              <p>Example of creating a REST API using Node.js and Express.</p>`
  },
  {
    title: "Getting Started with React",
    date: "January 15, 2025",
    excerpt: "React is a popular JavaScript library for building user interfaces. Learn the fundamentals and create your first React app.",
    content: `<p>React allows developers to build reusable UI components and manage application state efficiently.</p>
              <h3>JSX Syntax</h3>
              <p>Learn how to write HTML-like code in JavaScript files.</p>
              <h3>Components & Props</h3>
              <p>Build reusable components and pass data using props.</p>
              <h3>State & Lifecycle</h3>
              <p>Manage dynamic data and lifecycle events.</p>
              <h3>Creating Your First App</h3>
              <p>Step-by-step tutorial to build a simple React To-Do app.</p>`
  },
  {
    title: "An Introduction to Docker",
    date: "December 10, 2024",
    excerpt: "Docker simplifies software delivery by using containerization. Discover how to use Docker in your development workflow.",
    content: `<p>Docker packages applications into containers, ensuring they run the same everywhere.</p>
              <h3>What is Containerization?</h3>
              <p>Difference between virtual machines and containers.</p>
              <h3>Docker Basics</h3>
              <p>Images, containers, Dockerfiles, and registries.</p>
              <h3>Practical Use Cases</h3>
              <p>Setting up local development environments and deploying apps.</p>`
  },
  {
    title: "Introduction to TypeScript",
    date: "November 5, 2024",
    excerpt: "TypeScript is a superset of JavaScript that adds static types. Learn why it's useful and how to get started.",
    content: `<p>TypeScript improves JavaScript code quality and maintainability by enabling static typing and early error detection.</p>
              <h3>Why TypeScript?</h3>
              <p>Benefits of type safety and tooling support.</p>
              <h3>Basic Types</h3>
              <p>Number, string, boolean, arrays, tuples, and enums.</p>
              <h3>Interfaces & Classes</h3>
              <p>Defining contracts and object-oriented programming features.</p>`
  },
  {
    title: "CSS Flexbox: A Complete Guide",
    date: "October 20, 2024",
    excerpt: "Flexbox is a powerful layout mode in CSS. Learn how to build flexible and responsive layouts with Flexbox.",
    content: `<p>Flexbox helps arrange items in one dimension, either as a row or a column, distributing space efficiently.</p>
              <h3>Flex Container Properties</h3>
              <p>display, flex-direction, justify-content, align-items.</p>
              <h3>Flex Item Properties</h3>
              <p>flex-grow, flex-shrink, flex-basis, order.</p>
              <h3>Building Layouts</h3>
              <p>Common layout patterns like navbars, cards, and galleries.</p>`
  }
];


router.get('/', (req, res) => {
  res.render('home', {
    title: "Home",
    projects,
    organizations
  });
});


router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'All Projects',
    projects
  });
});

router.get('/projects/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  if (isNaN(index) || index < 0 || index >= projects.length) {
    return res.status(404).send('Project not found');
  }
  


  const project = projects[index];
  res.render('projectDetails', {
    title: project.title,
    date: project.date,
    tech: project.tech,
    desc: project.desc,
    img: project.img,
  });
});
router.get('/blog', (req, res) => {
  res.render('blog', {
    title: 'Blog',
    posts
  });
});

router.get('/blog/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0 || id >= posts.length) {
    return res.status(404).send('Post not found');
  }

  const post = posts[id];
  res.render('blogDetail', { title: post.title, post });
});


module.exports = router;

router.post('/contact-submit', async (req, res) => {
  const { firstName, lastName, message, 'g-recaptcha-response': token } = req.body;

  if (!token) {
    return res.status(400).send('reCAPTCHA validation failed.');
  }

  try {
    const secretKey = '6LeOOGArAAAAAMQd_XCmkLDUpXeAQYHnDm7EcUbA';
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await axios.post(verifyUrl);

    if (!response.data.success) {
      return res.status(400).send('reCAPTCHA verification failed.');
    }

  
    console.log({ firstName, lastName, message });
    res.send('Thank you for your message!');
  } catch (error) {
    console.error('reCAPTCHA error:', error);
    res.status(500).send('Internal server error.');
  }
});




