



"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";



// const techDetails = [
//   {
//     id: "node-js",
//     title: "Node.js",
//     parentDescription:
//       "Node.js is a runtime environment that allows developers to build scalable and high-performance applications.",
//     content: [
//       {
//         point: "Event-driven",
//         description:
//           "Node.js is event-driven, meaning it uses non-blocking, asynchronous events to handle multiple operations concurrently. This architecture allows for efficient performance, especially in I/O-heavy applications, improving scalability.",
//       },
//       {
//         point: "JavaScript",
//         description:
//           "Node.js uses JavaScript on the server side, enabling developers to write both client and server code in the same language. This unified language stack simplifies development and enhances productivity across the full stack.",
//       },
//       {
//         point: "npm",
//         description:
//           "Node.js uses npm (Node Package Manager) to manage dependencies, allowing easy installation, sharing, and management of libraries and packages. It provides access to a vast ecosystem of reusable modules and tools.",
//       },
//       {
//         point: "Cross-platform",
//         description: "Node.js is cross-platform, meaning it can run on various operating systems like Windows, macOS, and Linux. This makes it ideal for building applications that need to work seamlessly across different environments.",
//       },
//     ],
//     image: "/images/Backend/node js.png", // Updated
//   },
//   {
//     id: "express-js",
//     title: "Express.js",
//     parentDescription:
//       "Express.js is a minimalistic web application framework for building APIs and web services on Node.js.",
//     content: [
//       {
//         point: "Request and Response Objects",
//         description: "In Express.js, the request and response objects simplify handling HTTP requests and sending responses. The request object contains client data, while the response object helps send data back to the client with various methods.",
//       },
//       {
//         point: "Routing",
//         description: "Express.js routing allows developers to define URL paths and handle HTTP methods like GET, POST, PUT, and DELETE. This system enables efficient management of requests and responses, supporting dynamic web apps.",
//       },
//       {
//         point: "Middleware",
//         description: "Express.js middleware functions handle requests before reaching route handlers. They perform tasks like authentication, logging, and data parsing, enabling modular, reusable code for better request management.",
//       },
//       {
//         point: "Error Handling",
//         description: "Express.js error handling allows developers to define custom error-handling middleware. This ensures consistent responses for errors, improves debugging, and provides users with appropriate feedback during failures.",
//       },
//     ],
//     image: "/images/Backend/ex.png", // Updated
//   },
//   {
//     id: "django",
//     title: "Django",
//     parentDescription:
//       "Django is a high-level Python framework that encourages rapid development and clean, pragmatic design.",
//     content: [
//       {
//         point: "Modular Design",
//         description:
//           "Django follows a modular design, allowing developers to break down applications into reusable components. This promotes better code organization, scalability, and easier maintenance by creating independent apps within a project.",
//       },
//       {
//         point: "Object-Relational Mapping",
//         description: "Django’s ORM allows developers to interact with databases using Python objects instead of raw SQL. It simplifies database operations, ensures code readability, and enhances security with automatic query handling.",
//       },
//       {
//         point: "Templates",
//         description:
//           "Django templates allow developers to create dynamic HTML pages with reusable components. They support template inheritance, making it easier to maintain consistent layouts and render data from views efficiently.",
//       },
//       {
//         point: "Authentication and Authorization",
//         description:
//           "Django provides built-in authentication and authorization features, allowing easy user management, login, and access control. It ensures secure user registration, login, and permission handling across applications.",
//       },
//     ],
//     image: "/images/Backend/django.png", // Updated
//   },
//   {
//     id: "ruby-on-rails",
//     title: "Ruby on Rails",
//     parentDescription:
//       "Ruby on Rails is a full-stack web application framework built in Ruby, known for its simplicity and convention over configuration.",
//     content: [
//       {
//         point: "MVC Architecture",
//         description:
//           "Ruby on Rails follows the MVC (Model-View-Controller) architecture, separating logic into three components. This structure promotes clean code, easier maintenance, and better scalability in web applications.",
//       },
//       {
//         point: "Active Record",
//         description: "Active Record in Ruby on Rails is an ORM (Object-Relational Mapping) system that simplifies database interactions. It allows developers to work with database records as objects, improving readability and efficiency.",
//       },
//       {
//         point: "Scaffolding",
//         description:
//           "Scaffolding in Ruby on Rails automatically generates the basic code for models, views, and controllers, helping developers quickly build applications. It accelerates development by providing ready-to-use structures.",
//       },
//       {
//         point: "Routing",
//         description:
//           "Ruby on Rails routing maps incoming requests to specific controller actions. It allows easy handling of URLs, enabling developers to define custom routes and HTTP methods for cleaner, more organized code.",
//       },
//     ],
//     image: "/images/Backend/rails.png", // Updated
//   },
//   {
//     id: "spring-boot",
//     title: "Spring Boot",
//     parentDescription:
//       "Spring Boot is a Java-based framework that simplifies the setup and development of Spring applications.",
//     content: [
//       {
//         point: "Auto-Configuration",
//         description: "Spring Boot’s auto-configuration automatically configures application settings based on dependencies in the classpath. This reduces manual setup, speeds up development, and simplifies configuration management.",
//       },
//       {
//         point: "Embedded Servers",
//         description:
//           "Spring Boot includes embedded servers like Tomcat, Jetty, and Undertow, allowing applications to run independently without requiring an external server. This simplifies deployment and enhances portability.",
//       },
//       {
//         point: "Production-Ready Features",
//         description: "Spring Boot offers production-ready features like health checks, metrics, and monitoring. These built-in tools help developers ensure application stability, performance, and easy integration with monitoring systems.",
//       },
//       {
//         point: "Improved Productivity",
//         description:
//           "Spring Boot improves productivity by simplifying setup, reducing boilerplate code, and providing pre-configured templates. It enables rapid development and deployment, letting developers focus on business logic.",
//       },
//     ],
//     image: "/images/Backend/spring.png", // Updated
//   },
//   {
//     id: "flask",
//     title: "Flask",
//     parentDescription:
//       "Flask is a lightweight Python web framework used for building web applications quickly.",
//     content: [
//       {
//         point: "Microframework",
//         description: "Flask is a lightweight microframework for Python, offering simplicity and flexibility. It provides the essentials for web development while allowing developers to choose additional components as needed.",
//       },
//       {
//         point: "Modular Design",
//         description:
//           "Flask's modular design allows developers to create reusable, independent components. This flexibility enables easy extension and customization, making it ideal for small projects and large, complex applications alike.",
//       },
//       {
//         point: "Flexible",
//         description: "Flask is highly flexible, offering developers full control over the structure of applications. Its minimalistic nature allows for easy customization and integration with various tools and libraries as needed.",
//       },
//       {
//         point: "Unit Testing",
//         description: "Flask supports unit testing with built-in tools like Flask-Testing. Developers can write test cases for routes, models, and other components, ensuring application reliability and functionality throughout development.",
//       },
//     ],
//     image: "/images/Backend/flask.png", // Updated
//   },
//   {
//     id: "dotnet-core",
//     title: ".NET Core",
//     parentDescription:
//       ".NET Core is an open-source, cross-platform framework for building high-performance applications.",
//     content: [
//       {
//         point: "Cross-Platform",
//         description: ".NET Core's cross-platform capabilities allow applications to run seamlessly on Windows, Linux, and macOS. This flexibility ensures broader compatibility, streamlined development, and efficient deployments.",
//       },
//       {
//         point: "Modular",
//         description:
//           "NET Core offers a modular architecture, enabling the development of scalable, maintainable, and flexible applications. It allows easy integration, faster updates, and efficient management of software components.",
//       },
//       {
//         point: "High-Performance",
//         description:
//           "Utilizing .NET Core, we deliver high-performance, scalable applications that ensure seamless cross-platform functionality, enhanced security, and optimal performance to drive business growth and efficiency.",
//       },
//       {
//         point: "Security",
//         description:
//           ".NET Core provides robust security features, including built-in authentication, authorization, and encryption. It ensures secure data handling, protecting applications from vulnerabilities and unauthorized access.",
//       },
//     ],
//     image: "/images/Backend/Netcore.png", // Updated
//   },
//   {
//     id: "go",
//     title: "Go",
//     parentDescription:
//       "Go, also known as Golang, is a statically typed, compiled programming language designed for simplicity and concurrency.",
//     content: [
//       {
//         point: "Simplicity",
//         description:
//           "Go's simplicity lies in its clean syntax and minimalistic design, making it easy to learn and use. It promotes efficient coding practices, enabling developers to build reliable and maintainable solutions quickly.",
//       },
//       {
//         point: "Concurrency",
//         description:
//           "Go's concurrency model, powered by goroutines and channels, simplifies parallel programming. It efficiently manages multiple tasks, ensuring high performance and scalability for modern applications.",
//       },
//       {
//         point: "Garbage Collection",
//         description:
//           "Go's garbage collection automates memory management by efficiently reclaiming unused memory, reducing manual intervention. This ensures optimal performance and simplifies application development.",
//       },
//       {
//         point: "Statically Typed",
//         description:
//           "Go's statically typed nature ensures type safety at compile time, reducing runtime errors. It enforces clear and consistent code, making applications more reliable and easier to maintain.",
//       },
//     ],
//     image: "/images/Backend/go.png", // Updated
//   },
//   {
//     id: "java",
//     title: "Java",
//     parentDescription:
//       "Java is a high-level, class-based programming language that is widely used for building scalable enterprise applications.",
//     content: [
//       {
//         point: "Object-Oriented",
//         description: "Java is an object-oriented language, promoting modular, reusable, and maintainable code. It uses classes and objects to organize software, making it easier to develop, extend, and manage complex applications.",
//       },
//       {
//         point: "Platform Independent:",
//         description: "Java is platform-independent, thanks to the Java Virtual Machine (JVM). Write once, run anywhere—Java applications can run on any device or operating system that supports the JVM, ensuring flexibility.",
//       },
//       {
//         point: "Robust Security",
//         description: "Java offers robust security features, including strong encryption, authentication, and access control. Its security manager and bytecode verification help prevent unauthorized access and ensure safe execution.",
//       },
//       {
//         point: "Multithreading",
//         description: "Java supports multithreading, allowing concurrent execution of tasks. This improves performance and resource utilization, enabling efficient processing and responsiveness in applications, especially for large-scale systems.",
//       },
//     ],
//     image: "/images/Backend/java.png", // Updated
//   },
//   {
//     id: "python",
//     title: "Python",
//     parentDescription:
//       "Python is a high-level, interpreted programming language known for its simplicity and readability.",
//     content: [
//       {
//         point: "Easy to Use and Implement",
//         description: "Python is known for its simple, readable syntax, making it easy to learn and implement. Its user-friendly design accelerates development, allowing both beginners and experts to quickly build robust applications.",
//       },
//       {
//         point: "Fast Development and Prototyping",
//         description: "Python’s simplicity and rich libraries enable rapid development and prototyping. It allows quick iteration of ideas, reducing time-to-market for applications while maintaining flexibility and scalability.",
//       },
//       {
//         point: "Highly Scalable and Flexible",
//         description: "Python is highly scalable and flexible, supporting applications of all sizes. Its extensive libraries and frameworks allow easy adaptation, making it ideal for both small projects and enterprise-level systems.",
//       },
//       {
//         point: "Extensive Libraries and Frameworks",
//         description: "Python boasts a vast ecosystem of libraries and frameworks, enabling rapid development of diverse applications. From web development to data analysis, these resources simplify complex tasks and enhance productivity.",
//       },
//     ],
//     image: "/images/Backend/python.png", // Updated
//   },
// ];

const techDetails = [
  {
    id: "node-js",
    title: "Node.js",
    parentDescription:
      "At Maiprosoft, we utilize Node.js to build fast, scalable, and efficient server-side applications. Its event-driven, non-blocking architecture ensures high performance, making it ideal for real-time and data-intensive solutions.",
    content: [
      {
        point: "Event-driven",
        description:
          "Node.js is event-driven, meaning it uses non-blocking, asynchronous events to handle multiple operations concurrently. This architecture allows for efficient performance, especially in I/O-heavy applications, improving scalability.",
      },
      {
        point: "JavaScript",
        description:
          "Node.js uses JavaScript on the server side, enabling developers to write both client and server code in the same language. This unified language stack simplifies development and enhances productivity across the full stack.",
      },
      {
        point: "npm",
        description:
          "Node.js uses npm (Node Package Manager) to manage dependencies, allowing easy installation, sharing, and management of libraries and packages. It provides access to a vast ecosystem of reusable modules and tools.",
      },
      {
        point: "Cross-platform",
        description: "Node.js is cross-platform, meaning it can run on various operating systems like Windows, macOS, and Linux. This makes it ideal for building applications that need to work seamlessly across different environments.",
      },
    ],
    image: "/images/Backend/node js.png", // Updated
  },
  {
    id: "express-js",
    title: "Express.js",
    parentDescription:
      "At Maiprosoft, we harness the power of Express.js to build efficient web applications and APIs. Known for its minimalistic design, Express.js simplifies routing, integrates middleware seamlessly, and ensures high-performance, scalable solutions. With Express.js, we deliver fast, maintainable, and robust backend solutions tailored to your needs.",
    content: [
      {
        point: "Request and Response Objects",
        description: "In Express.js, the request and response objects simplify handling HTTP requests and sending responses. The request object contains client data, while the response object helps send data back to the client with various methods.",
      },
      {
        point: "Routing",
        description: "Express.js routing allows developers to define URL paths and handle HTTP methods like GET, POST, PUT, and DELETE. This system enables efficient management of requests and responses, supporting dynamic web apps.",
      },
      {
        point: "Middleware",
        description: "Express.js middleware functions handle requests before reaching route handlers. They perform tasks like authentication, logging, and data parsing, enabling modular, reusable code for better request management.",
      },
      {
        point: "Error Handling",
        description: "Express.js error handling allows developers to define custom error-handling middleware. This ensures consistent responses for errors, improves debugging, and provides users with appropriate feedback during failures.",
      },
    ],
    image: "/images/Backend/ex.png", // Updated
  },
  {
    id: "django",
    title: "Django",
    parentDescription:
      "At Maiprosoft, we specialize in Django development to build secure, scalable, and high-performing web applications. With its robust framework, Django simplifies complex backend tasks, supports rapid development, and ensures seamless integration. From APIs to enterprise solutions, we deliver tailored, efficient results.",
    content: [
      {
        point: "Modular Design",
        description:
          "Django follows a modular design, allowing developers to break down applications into reusable components. This promotes better code organization, scalability, and easier maintenance by creating independent apps within a project.",
      },
      {
        point: "Object-Relational Mapping",
        description: "Django’s ORM allows developers to interact with databases using Python objects instead of raw SQL. It simplifies database operations, ensures code readability, and enhances security with automatic query handling.",
      },
      {
        point: "Templates",
        description:
          "Django templates allow developers to create dynamic HTML pages with reusable components. They support template inheritance, making it easier to maintain consistent layouts and render data from views efficiently.",
      },
      {
        point: "Authentication and Authorization",
        description:
          "Django provides built-in authentication and authorization features, allowing easy user management, login, and access control. It ensures secure user registration, login, and permission handling across applications.",
      },
    ],
    image: "/images/Backend/django.png", // Updated
  },
  {
    id: "ruby-on-rails",
    title: "Ruby on Rails",
    parentDescription:
      "At Maiprosoft, we specialize in Ruby on Rails to build dynamic, scalable, and high-performing web applications. This powerful framework accelerates development with its convention-over-configuration approach and rich library of tools. From startups to enterprises, we deliver tailored, maintainable, and secure solutions.",
    content: [
      {
        point: "MVC Architecture",
        description:
          "Ruby on Rails follows the MVC (Model-View-Controller) architecture, separating logic into three components. This structure promotes clean code, easier maintenance, and better scalability in web applications.",
      },
      {
        point: "Active Record",
        description: "Active Record in Ruby on Rails is an ORM (Object-Relational Mapping) system that simplifies database interactions. It allows developers to work with database records as objects, improving readability and efficiency.",
      },
      {
        point: "Scaffolding",
        description:
          "Scaffolding in Ruby on Rails automatically generates the basic code for models, views, and controllers, helping developers quickly build applications. It accelerates development by providing ready-to-use structures.",
      },
      {
        point: "Routing",
        description:
          "Ruby on Rails routing maps incoming requests to specific controller actions. It allows easy handling of URLs, enabling developers to define custom routes and HTTP methods for cleaner, more organized code.",
      },
    ],
    image: "/images/Backend/rails.png", // Updated
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    parentDescription:
      "Maiprosoft utilizes Spring Boot to create fast, scalable, and production-ready Java applications. By simplifying configuration and offering integrated tools, it enables us to deliver high-performing, secure solutions for businesses, helping them scale efficiently while minimizing developme.",
    content: [
      {
        point: "Auto-Configuration",
        description: "Spring Boot’s auto-configuration automatically configures application settings based on dependencies in the classpath. This reduces manual setup, speeds up development, and simplifies configuration management.",
      },
      {
        point: "Embedded Servers",
        description:
          "Spring Boot includes embedded servers like Tomcat, Jetty, and Undertow, allowing applications to run independently without requiring an external server. This simplifies deployment and enhances portability.",
      },
      {
        point: "Production-Ready Features",
        description: "Spring Boot offers production-ready features like health checks, metrics, and monitoring. These built-in tools help developers ensure application stability, performance, and easy integration with monitoring systems.",
      },
      {
        point: "Improved Productivity",
        description:
          "Spring Boot improves productivity by simplifying setup, reducing boilerplate code, and providing pre-configured templates. It enables rapid development and deployment, letting developers focus on business logic.",
      },
    ],
    image: "/images/Backend/spring.png", // Updated
  },
  {
    id: "flask",
    title: "Flask",
    parentDescription:
      "At Maiprosoft, Flask empowers us to deliver fast, scalable, and secure web applications. Its simplicity and flexibility, combined with robust plugin support, allow us to quickly develop custom APIs and dynamic websites, ensuring optimal performance and seamless user experiences.",
    content: [
      {
        point: "Microframework",
        description: "Flask is a lightweight microframework for Python, offering simplicity and flexibility. It provides the essentials for web development while allowing developers to choose additional components as needed.",
      },
      {
        point: "Modular Design",
        description:
          "Flask's modular design allows developers to create reusable, independent components. This flexibility enables easy extension and customization, making it ideal for small projects and large, complex applications alike.",
      },
      {
        point: "Flexible",
        description: "Flask is highly flexible, offering developers full control over the structure of applications. Its minimalistic nature allows for easy customization and integration with various tools and libraries as needed.",
      },
      {
        point: "Unit Testing",
        description: "Flask supports unit testing with built-in tools like Flask-Testing. Developers can write test cases for routes, models, and other components, ensuring application reliability and functionality throughout development.",
      },
    ],
    image: "/images/Backend/flask.png", // Updated
  },
  {
    id: "dotnet-core",
    title: ".NET Core",
    parentDescription:
      "At Maiprosoft, we specialize in delivering robust .NET Core applications that are fast, secure, and scalable. Our experienced developers build efficient, cross-platform solutions that empower businesses to thrive. With .NET Core, we ensure seamless performance, innovation, and long-term growth for your enterprise.",
    content: [
      {
        point: "Cross-Platform",
        description: ".NET Core's cross-platform capabilities allow applications to run seamlessly on Windows, Linux, and macOS. This flexibility ensures broader compatibility, streamlined development, and efficient deployments.",
      },
      {
        point: "Modular",
        description:
          "NET Core offers a modular architecture, enabling the development of scalable, maintainable, and flexible applications. It allows easy integration, faster updates, and efficient management of software components.",
      },
      {
        point: "High-Performance",
        description:
          "Utilizing .NET Core, we deliver high-performance, scalable applications that ensure seamless cross-platform functionality, enhanced security, and optimal performance to drive business growth and efficiency.",
      },
      {
        point: "Security",
        description:
          ".NET Core provides robust security features, including built-in authentication, authorization, and encryption. It ensures secure data handling, protecting applications from vulnerabilities and unauthorized access.",
      },
    ],
    image: "/images/Backend/Netcore.png", // Updated
  },
  {
    id: "go",
    title: "Go",
    parentDescription:
      "At Maiprosoft, we leverage Go, a powerful and efficient programming language, to build high-performance, scalable, and reliable applications. Its simplicity, concurrency model, and robust standard library enable us to deliver solutions optimized for speed and scalability, ensuring seamless functionality and maintainability.",
    content: [
      {
        point: "Simplicity",
        description:
          "Go's simplicity lies in its clean syntax and minimalistic design, making it easy to learn and use. It promotes efficient coding practices, enabling developers to build reliable and maintainable solutions quickly.",
      },
      {
        point: "Concurrency",
        description:
          "Go's concurrency model, powered by goroutines and channels, simplifies parallel programming. It efficiently manages multiple tasks, ensuring high performance and scalability for modern applications.",
      },
      {
        point: "Garbage Collection",
        description:
          "Go's garbage collection automates memory management by efficiently reclaiming unused memory, reducing manual intervention. This ensures optimal performance and simplifies application development.",
      },
      {
        point: "Statically Typed",
        description:
          "Go's statically typed nature ensures type safety at compile time, reducing runtime errors. It enforces clear and consistent code, making applications more reliable and easier to maintain.",
      },
    ],
    image: "/images/Backend/go.png", // Updated
  },
  {
    id: "java",
    title: "Java",
    parentDescription:
      "Maiprosoft excels in Java development, offering scalable, reliable, and secure applications. We build customized Java-based solutions to meet your business needs, ensuring high performance, efficiency, and seamless integration across platforms. Trust us to drive your digital transformation.",
    content: [
      {
        point: "Object-Oriented",
        description: "Java is an object-oriented language, promoting modular, reusable, and maintainable code. It uses classes and objects to organize software, making it easier to develop, extend, and manage complex applications.",
      },
      {
        point: "Platform Independent:",
        description: "Java is platform-independent, thanks to the Java Virtual Machine (JVM). Write once, run anywhere—Java applications can run on any device or operating system that supports the JVM, ensuring flexibility.",
      },
      {
        point: "Robust Security",
        description: "Java offers robust security features, including strong encryption, authentication, and access control. Its security manager and bytecode verification help prevent unauthorized access and ensure safe execution.",
      },
      {
        point: "Multithreading",
        description: "Java supports multithreading, allowing concurrent execution of tasks. This improves performance and resource utilization, enabling efficient processing and responsiveness in applications, especially for large-scale systems.",
      },
    ],
    image: "/images/Backend/java.png", // Updated
  },
  {
    id: "python",
    title: "Python",
    parentDescription:
      "Maiprosoft excels in Python development, creating powerful, scalable, and secure applications. Our expert team leverages Python's versatility to build efficient, cross-platform solutions that meet your business needs, driving innovation and ensuring long-term success.",
    content: [
      {
        point: "Easy to Use and Implement",
        description: "Python is known for its simple, readable syntax, making it easy to learn and implement. Its user-friendly design accelerates development, allowing both beginners and experts to quickly build robust applications.",
      },
      {
        point: "Fast Development and Prototyping",
        description: "Python’s simplicity and rich libraries enable rapid development and prototyping. It allows quick iteration of ideas, reducing time-to-market for applications while maintaining flexibility and scalability.",
      },
      {
        point: "Highly Scalable and Flexible",
        description: "Python is highly scalable and flexible, supporting applications of all sizes. Its extensive libraries and frameworks allow easy adaptation, making it ideal for both small projects and enterprise-level systems.",
      },
      {
        point: "Extensive Libraries and Frameworks",
        description: "Python boasts a vast ecosystem of libraries and frameworks, enabling rapid development of diverse applications. From web development to data analysis, these resources simplify complex tasks and enhance productivity.",
      },
    ],
    image: "/images/Backend/python.png", // Updated
  },
];













const TechSection = ({ tech }) => {
  const [selectedPoint, setSelectedPoint] = useState(tech.content[0]);
  const [highlightTop, setHighlightTop] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    const selectedIndex = tech.content.findIndex(
      (item) => item.point === selectedPoint.point
    );
    const listItem = listRef.current?.children[selectedIndex];

    if (listItem) {
      setHighlightTop(listItem.offsetTop + listItem.offsetHeight / 2 - 20);
    }
  }, [selectedPoint, tech.content]);

  return (
    
    <div id={tech.id} className="bg-white p-8 mt-1"
    style={{ scrollMarginTop: '70px' }}

    >
      <div className="flex items-center justify-center mb-4">
        <Image
          src={tech.image}
          alt={`${tech.title} logo`}
          width={100}
          height={50}
        />
      </div>
      {/* <h2 className="text-3xl text-center font-poppins text-black font-medium mt-6 ">
        {tech.title}
      </h2> */}
      <p className="text-gray-700 text-left">{tech.parentDescription}</p>

      <div className="flex flex-col md:flex-row items-center mt-16 bg-[#34a853ff] text-white p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6 flex flex-col items-start border-r-2 border-white relative">
          <div
            className="absolute top-0 right-0 w-2 bg-maiy transition-all duration-300"
            style={{
              height: "50px",
              top: `${highlightTop}px`,
              transform: "translateX(60%)",
            }}
          ></div>
          <ul ref={listRef} className="space-y-3 list-none text-left pl-4 w-full">
            {tech.content.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer pl-2 py-1 transition-colors duration-300  ${
                  selectedPoint.point === item.point
                    ? "font-bold text-maiy text-2xl"
                    : "hover:text-yellow-200"
                }`}
                onClick={() => setSelectedPoint(item)}
              >
                {item.point}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-6">
          <p className="text-left text-lg leading-relaxed text-[#fffa11]">
            {selectedPoint.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Backend() {
  return (
    <div className="bg-gray-100 min-h-screen p-8 pb-[90px] pt-[61px]">
       <div className="bg-white text-gray-800 font-ubuntu">
              <div className="container mx-auto p-6">
                {/* Section 1 - Hero Section */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 w-full">
                    <Image
                      src="/images/Frontend/Frontend.png"
                      alt="Code on a computer screen"
                      width={400}  // Increase image size for better resolution
                      height={400}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div className="md:w-1/2 w-full p-6">
                    <h1 className="text-5xl font-poppins font-semibold leading-snug">
                      Backend Technology
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed">
                    At Maiprosoft, we specialize in robust backend development to power secure, scalable, and high-performing applications. Our solutions are designed to handle complex business logic, manage databases efficiently, and deliver seamless communication between servers and clients. With a focus on speed, security, and reliability, we ensure your applications perform flawlessly under any load. By implementing structured, optimized coding practices and modern development methodologies, we build backend systems that enable smooth data processing, integrate seamlessly with third-party tools, and support future scalability, driving business success.                    </p>
                  </div>
                </div>
              </div>
            </div>
      {techDetails.map((tech) => (
        <TechSection key={tech.id} tech={tech} />
      ))}
    </div>
  );
}
