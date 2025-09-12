"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ConsultationForm from "@/components/Consultationform";



const techDetails = [
  {
    id: "react-js",
    title: "React.js",
    parentDescription:
      "React.js is a powerful library for building dynamic and interactive user interfaces. With features like virtual DOM and fast rendering, React.js delivers high-performance, responsive, and scalable web applications tailored for modern needs.  Maiprosoft specializes in React JS solutions, empowering businesses to build scalable, high-performance web applications with efficient and reusable UI components. Our expert team provides comprehensive services, from setup to integration, management, and optimization.",
    content: [
      {
        point: "Components",
        description:
          "ReactJS components are the building blocks of a React application. They enable reusable, self-contained UI elements, improving code organization and efficiency, and promoting better maintainability and scalability.",
      },
      {
        point: "JavaScript XML",
        description:
          "JavaScript XML in ReactJS allows developers to write HTML-like syntax within JavaScript. It simplifies the process of creating UI components by combining markup and logic, enhancing code readability and maintainability.",
      },
      {
        point: "Virtual DOM",
        description:
          "ReactJS uses the Virtual DOM to improve performance by creating a lightweight copy of the actual DOM. It efficiently updates only the changed elements, minimizing direct DOM manipulation and boosting speed.",
      },
      {
        point: "Hooks",
        description:
          "ReactJS Hooks allow developers to manage state and lifecycle features in functional components. They simplify code, enhance reusability, and enable a cleaner, more modular approach to building React applications.",
      },
    ],
    image: "/images/Frontend/reactjs-icon.png",
  },
  {
    id: "next-js",
    title: "Next.js",
    parentDescription:
      "At Maiprosoft, we specialize in Next.js to deliver high-speed, SEO-optimized web solutions. With features like automatic server-side rendering and static site generation, we build dynamic, responsive applications that load quickly and provide seamless user experiences, ensuring superior performance across devices.",
    content: [
      {
        point: "Server-Side Rendering",
        description:
          "Next.js offers Server-Side Rendering (SSR), allowing pages to be rendered on the server before being sent to the client. This improves performance, SEO, and ensures faster load times for dynamic content.",
      },
      {
        point: "Static Site Generation ",
        description:
          ".Next.js supports Static Site Generation (SSG), pre-rendering pages at build time. This ensures faster load times and better SEO by delivering fully generated HTML, ideal for static websites and blogs.",
      },
      {
        point: "Client-Side Rendering ",
        description:
          "Next.js also supports Client-Side Rendering (CSR), where JavaScript renders content directly in the browser. This enables highly interactive, dynamic applications, providing a smooth and responsive user experience.",
      },
      {
        point: "Routing",
        description:
          "Next.js simplifies routing by using a file-based system. Pages are automatically routed based on their file names, eliminating the need for additional configurations and making navigation easy and intuitive.",
      },
    ],
    image: "/images/Frontend/image1-18.png",
  },
  {
    id: "vue-js",
    title: "Vue.js",
    parentDescription:
      "At Maiprosoft, we harness the power of Vue.js to develop lightweight, high-performing, and scalable web applications. With its flexible, component-based architecture, we create intuitive interfaces that deliver seamless user experiences. Our solutions prioritize maintainability, efficiency, and long-term success, ensuring your digital platforms remain future-ready.",
    content: [
      {
        point: "Components",
        description:
          "Vue.js components are reusable building blocks that help structure the UI. Each component encapsulates its logic, template, and styling, making the code more organized, modular, and easier to maintain.",
      },
      {
        point: "Templates",
        description:
          "Vue.js templates allow developers to define the HTML structure in a declarative way. They bind data to the DOM, making it easier to manage dynamic content and build responsive, data-driven interfaces.",
      },
      {
        point: "Reactivity",
        description:
          "Vue.js reactivity system automatically updates the DOM when data changes. This ensures a seamless and efficient user experience by synchronizing the UI with the underlying data model without manual intervention.",
      },
      {
        point: "State Management",
        description:
          "Vue.js state management, often handled with Vuex, centralizes application data, making it easier to manage and share state across components. This ensures consistency and simplifies debugging in large applications.",
      },
    ],
    image: "/images/Frontend/image1.png",
  },
  {
    id: "angular",
    title: "Angular",
    parentDescription:
      "At Maiprosoft, we specialize in Angular to build robust, scalable web applications. Its powerful framework features two-way data binding, dependency injection, and modularity, enabling us to create dynamic, high-performance apps. We use Angular’s tools and flexibility to deliver responsive, maintainable solutions tailored to your business.",
    content: [
      {
        point: "Components",
        description:
          "Angular components are the building blocks of an application. They encapsulate logic, templates, and styles, enabling developers to create reusable, modular, and maintainable UI elements for dynamic web apps.",
      },
      {
        point: "Services",
        description:
          "Angular services are used to encapsulate business logic and data management. They provide a way to share functionality across components, promoting reusability, scalability, and better separation of concerns in applications.",
      },
      {
        point: "Routing",
        description:
          "Angular’s routing module enables navigation between views and components within a single-page application. It allows developers to define routes, manage URL paths, and control navigation for seamless user experiences.",
      },
      {
        point: "Security",
        description:
          "Angular provides robust security features, including built-in tools for preventing XSS and CSRF attacks. It automatically sanitizes data, ensuring secure rendering of dynamic content and protecting against vulnerabilities.",
      },
    ],
    image: "/images/Frontend/image1-9.png",
  },
  {
    id: "html-css",
    title: "HTML5 & CSS3",
    parentDescription:
      "At Maiprosoft, we leverage HTML5 and CSS3 to deliver cutting-edge, responsive web solutions. HTML5 ensures rich multimedia support and semantic structure, while CSS3 enhances design with smooth animations, transitions, and mobile-friendly layouts for an exceptional user experience.",
    content: [
      {
        point: "Improved Semantics",
        description:
          "HTML5 introduces improved semantics with new elements, enhancing the structure and accessibility of web content while improving SEO and user experience.",
      },
      {
        point: "Enhanced Multimedia Support",
        description:
          "HTML5 enhances multimedia support with native elements, allowing seamless integration of media content without relying on third-party plugins, improving user experience and accessibility.",
      },
      {
        point: "Improved Layout Control",
        description:
          "CSS3 offers improved layout control with features like Flexbox and Grid, enabling developers to create responsive, complex layouts with ease, ensuring a more dynamic and flexible web design experience.",
      },
      {
        point: "Enhanced Visual Effects",
        description:
          "CSS3 enhances visual effects with features like transitions, animations, and transformations. These tools allow developers to create smooth, interactive, and dynamic designs that improve user engagement and experience.",
      },
    ],
    image: "/images/Frontend/g7.png",
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS",
    parentDescription:
      "At Maiprosoft, we harness the power of Tailwind CSS to craft clean, responsive, and customizable designs. Its utility-first approach accelerates development, allowing us to create scalable, maintainable websites with a focus on performance and flexibility, ensuring an optimal user experience across all platforms.",
    content: [
      {
        point: "Utility-First Approach",
        description:
          "Tailwind CSS follows a utility-first approach, offering predefined classes for styling elements directly in HTML. This promotes faster development, cleaner code, and greater flexibility compared to traditional CSS.",
      },
      {
        point: "Pre-Defined Classes",
        description:
          "Tailwind CSS provides a wide range of pre-defined classes for common styling tasks, such as layout, typography, and spacing. These classes enable quick design implementation without writing custom CSS.",
      },
      {
        point: "Configurable",
        description:
          "Tailwind CSS is highly configurable, allowing developers to customize themes, colors, fonts, and breakpoints. Its configuration file lets you tailor the framework to meet specific design requirements easily.",
      },
      {
        point: "Responsive Design",
        description:
          "Tailwind CSS offers responsive design capabilities with built-in breakpoints. It enables developers to easily adjust layouts and styles for different screen sizes using simple, mobile-first utility classes.",
      },
    ],
    image: "/images/Frontend/path3.png",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    parentDescription:
      "At Maiprosoft, we harness the power of Bootstrap to craft sleek, responsive web designs. Its flexible grid system and pre-styled components allow us to develop fast, consistent, and mobile-friendly interfaces. This ensures visually appealing, user-centric solutions that adapt seamlessly to all devices.",
    content: [
      {
        point: "Fast Development",
        description:
          "Bootstrap accelerates development with its pre-built components, grid system, and responsive design features. It helps developers create mobile-first, user-friendly websites quickly, saving time and effort in development.",
      },
      {
        point: "Consistent Look and Feel",
        description:
          "Bootstrap ensures a consistent look and feel across web applications by providing a uniform set of styles and components. This guarantees that designs remain visually cohesive and user-friendly across different devices.",
      },
      {
        point: "Responsive Design",
        description:
          "Bootstrap's responsive design capabilities allow websites to adapt seamlessly to different screen sizes and devices. Its grid system and media queries ensure a smooth, consistent user experience on all platforms.",
      },
      {
        point: "Prototyping",
        description:
          "Bootstrap simplifies prototyping by offering pre-designed components and a flexible grid system. This allows developers to quickly create mockups and test ideas, streamlining the design process and enhancing productivity.",
      },
    ],
    image: "/images/Frontend/path2-9.png",
  },
  {
    id: "sass",
    title: "Sass",
    parentDescription:
      "At Maiprosoft, we use Sass to enhance CSS with powerful features like variables, nested rules, and mixins. This preprocessor streamlines stylesheets, improves code maintainability, and allows for greater flexibility in design. With Sass, we deliver scalable, efficient, and clean CSS for high-performance web applications.",
    content: [
      {
        point: "Variables",
        description:
          "Sass variables store reusable values like colors, fonts, or sizes. By using variables, developers can maintain consistency throughout their stylesheets and easily modify values without searching for them manually",
      },
      {
        point: "Nesting",
        description:
          "Sass nesting allows developers to write CSS in a hierarchical structure, reflecting the HTML structure. It improves readability and organization by nesting rules inside parent selectors, reducing code duplication.",
      },
      {
        point: "Mixins",
        description:
          "Sass mixins allow you to define reusable chunks of CSS code that can be included in multiple places. This promotes consistency and reduces redundancy by enabling parameterized style rules across stylesheets.",
      },
      {
        point: "Functions",
        description:
          "Sass functions allow you to create custom reusable logic for stylesheets. You can return values like colors, numbers, or strings, enabling dynamic and flexible styles that can be applied across your project.",
      },
    ],
    image: "/images/Frontend/path2-5.png",
  },
  {
    id: "jquery",
    title: "jQuery",
    parentDescription:
      "At Maiprosoft, we integrate jQuery to create dynamic, interactive websites with ease. Its simple syntax allows for smooth DOM manipulation, event handling, and animations, enabling us to build fast, responsive, and engaging web applications across all browsers.",
    content: [
      {
        point: "DOM Manipulation",
        description:
          "jQuery simplifies DOM manipulation by providing easy-to-use methods for selecting, modifying, and interacting with HTML elements. This makes it faster and more efficient to create dynamic, interactive web pages.",
      },
      {
        point: "Event Handling",
        description:
          "jQuery streamlines event handling by offering simple methods for managing user interactions like clicks, hover, and keypresses. It ensures cross-browser compatibility and efficient event delegation for dynamic web pages.",
      },
      {
        point: "Ajax Support",
        description:
          "jQuery simplifies Ajax requests by providing intuitive methods like $.ajax() and $.get(), allowing seamless communication with servers. This enables dynamic content updates without page reloads, improving user experience.",
      },
      {
        point: "Animations and Effects",
        description:
          "jQuery enhances web pages with built-in animation and effect methods, such as fadeIn(), slideUp(), and animate(). These allow developers to create smooth transitions and interactive elements for better UX.",
      },
    ],
    image: "/images/Frontend/g1.png",
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
    <div id={tech.id} className="bg-white p-8 mt-1">
      <div className="flex items-center justify-center mb-4">
        <Image
          src={tech.image}
          alt={`${tech.title} logo`}
          width={100}
          height={50}
        />
      </div>
      {/* <h2 className="text-3xl text-center font-poppins text-black font-medium mt-6">
        {tech.title}
      </h2> */}
      <p className="text-gray-700 text-left">{tech.parentDescription}</p>

      <div className="flex flex-col md:flex-row items-center mt-16 bg-[#1d8bf2] text-white p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6 flex flex-col items-start border-r-2 border-white relative">
          <div

            className="absolute top-0 right-0 w-2 bg-white transition-all duration-300"
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
                className={`cursor-pointer pl-2 py-1 transition-colors duration-300 ${
                  selectedPoint.point === item.point
                    ? "font-bold text-2xl"
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
          <p className="text-left text-lg leading-relaxed">
            {selectedPoint.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Forntend() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen p-8 pb-[90px] pt-[61px]">
       <div className="bg-white text-gray-800 font-ubuntu">
              <div className="container mx-auto p-6">
                

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
      Frontend Technology
    </h1>
    <p className="mt-6 text-lg leading-relaxed">
      At Maiprosoft, we bring ideas to life through exceptional frontend design and development. Our focus is on creating visually appealing, responsive, and user-friendly interfaces that connect with your audience. By combining creative design with flawless functionality, we ensure every interaction is seamless and engaging. Whether it&#39;s optimizing performance or enhancing usability, we strive to deliver frontend solutions that align with your goals and leave a lasting impact. With Maiprosoft, your digital presence becomes a true reflection of innovation and quality.
    </p>
  </div>
</div>

              </div>
            </div>
      {techDetails.map((tech) => (
        <TechSection key={tech.id} tech={tech} />
      ))}
         

    </div>
     <ConsultationForm/>
     </>

  );
}
