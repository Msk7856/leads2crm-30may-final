"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ConsultationForm from "@/components/Consultationform";



const techDetails = [
  {
    id: "sql-server",
    title: "SQL Server",
    parentDescription:
      "Maiprosoft is a technology company that offers specialized services in SQL Server solutions. With a focus on data management, performance optimization, and security, Maiprosoft helps businesses harness the full potential of SQL Server for their database needs, ensuring reliable and efficient operations.",
    content: [
      {
        point: "Scalability and Performance",
        description:
          "SQL Server offers exceptional scalability and performance, handling large datasets and high transaction volumes efficiently. It supports both vertical and horizontal scaling to meet growing business needs.",
      },
      {
        point: "Support for Structured Query Language (SQL)",
        description:
          "SQL Server provides robust support for Structured Query Language (SQL), enabling efficient data management. It allows complex queries, transactions, and analytics, making it ideal for relational databases.",
      },
      {
        point: "High Availability and Disaster Recovery",
        description:
          "SQL Server ensures high availability and disaster recovery with features like Always On Availability Groups, database mirroring, and automated backups, safeguarding data and minimizing downtime.",
      },
      {
        point: "Performance",
        description:
          "SQL Server delivers outstanding scalability and performance, efficiently handling large datasets and high workloads. It supports dynamic scaling, ensuring optimal performance as your business grows.",
      },
    ],
    image: "/images/Database/mysql-official.svg",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    parentDescription:
      "Maiprosoft provides comprehensive PostgreSQL solutions, specializing in database design, performance tuning, and data management. Leveraging PostgreSQL’s advanced features like ACID compliance, extensibility, and high concurrency, Maiprosoft helps businesses build scalable, secure, and efficient applications to meet their data needs.",
    content: [
      {
        point: "Relational Database Management System (RDBMS)",
        description:
          "PostgreSQL is a powerful, open-source relational database management system (RDBMS) that supports complex queries, transactions, and data integrity, making it ideal for scalable and secure applications.",
      },
      {
        point: "ACID Compliance",
        description:
          "PostgreSQL is ACID-compliant, ensuring data reliability through Atomicity, Consistency, Isolation, and Durability. It guarantees transaction integrity, making it ideal for applications requiring strong data consistency.",
      },
      {
        point: "Support for Advanced Data Types",
        description:
          "PostgreSQL supports a wide range of advanced data types, including JSON, arrays, hstore, and geometric types. This flexibility allows developers to model complex data structures efficiently and effectively.",
      },
      {
        point: "High Scalability and Performance",
        description:
          "PostgreSQL offers high scalability and performance with features like indexing, partitioning, and parallel queries. It efficiently handles large datasets, ensuring optimal speed and responsiveness for growing applications.",
      },
    ],
    image: "/images/Database/postgresql-svgrepo-com.svg",
  },
  {
    id: "firebase",
    title: "Firebase",
    parentDescription:
      "Maiprosoft provides innovative solutions using Firebase, a powerful platform for building web and mobile applications. Offering real-time databases, authentication, cloud storage, and more, Maiprosoft leverages Firebase's features to help businesses create scalable, secure, and efficient applications with ease.",
    content: [
      {
        point: "Real-Time Database",
        description:
          "Firebase's real-time database allows seamless data syncing across all devices. It enables real-time updates, making it ideal for applications requiring live data collaboration and instant user interactions.",
      },
      {
        point: "Authentication and Authorization",
        description:
          "Firebase offers secure authentication and authorization services, supporting email/password, social logins, and custom authentication methods. It simplifies user management while ensuring data protection.",
      },
      {
        point: "Cloud Functions and Hosting",
        description:
          "Firebase provides serverless Cloud Functions for backend logic and scalable hosting. It enables seamless app deployment, automatic scaling, and real-time updates, ensuring fast and reliable web services.",
      },
      {
        point: "Analytics and Crash Reporting",
        description:
          "Firebase offers powerful analytics and crash reporting tools, providing real-time insights into app performance and user behavior. It helps identify issues quickly, improve user experience, and optimize apps.",
      },
    ],
    image: "/images/Database/firebase-svgrepo-com.svg",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    parentDescription:
      "Maiprosoft offers MongoDB solutions, utilizing its powerful NoSQL capabilities for scalable and flexible data management. Specializing in high-performance applications, Maiprosoft helps businesses store and process large volumes of unstructured data, ensuring fast retrieval, reliability, and easy scalability in dynamic environments.",
    content: [
      {
        point: "Document-Oriented Data Model",
        description:
          "MongoDB uses a document-oriented data model, storing data in flexible, JSON-like BSON format. This allows for dynamic schemas, making it ideal for handling complex, unstructured, and evolving data.",
      },
      {
        point: "Scalability and High Performance",
        description:
          "MongoDB offers horizontal scalability and high performance through sharding and indexing. It efficiently handles large datasets and high-throughput workloads, ensuring fast data retrieval and scalability.",
      },
      {
        point: "Flexible Querying and Indexing",
        description:
          "MongoDB supports flexible querying and powerful indexing, allowing complex searches on large datasets. Its rich query language and customizable indexes ensure fast and efficient data retrieval in any application.",
      },
      {
        point: "High Availability and Fault Tolerance",
        description:
          "MongoDB ensures high availability and fault tolerance through replica sets. Data is replicated across multiple nodes, allowing automatic failover, minimizing downtime, and ensuring continuous data access.",
      },
    ],
    image: "/images/Database/mongodb-svgrepo-com.svg",
  },
  {
    id: "mysql",
    title: "MySQL",
    parentDescription:
      "Maiprosoft offers expert MySQL database solutions, ensuring efficient data management, scalability, and security. With deep knowledge of MySQL’s capabilities, Maiprosoft helps businesses optimize performance, streamline database operations, and implement reliable, high-performance solutions for their data needs.",
    content: [
      {
        point: "Relational Database Management System (RDBMS): ",
        description:
          "MySQL is a robust relational database management system (RDBMS) that organizes data into tables, ensuring efficient querying, data integrity, and secure storage for applications of all sizes.",
      },
      {
        point: "SQL Support",
        description:
          "MySQL offers full support for SQL, enabling efficient data querying, manipulation, and management. It allows complex queries, joins, and transactions, ensuring robust and flexible database operations.",
      },
      {
        point: "Scalability and Performance",
        description:
          "MySQL offers excellent scalability and performance, handling large datasets and high-traffic applications with ease. Its indexing, caching, and replication features ensure fast, efficient data processing.",
      },
      {
        point: "Security and Access Control",
        description:
          "MySQL provides robust security features, including data encryption, user authentication, and fine-grained access control. It ensures secure data management by limiting access and preventing unauthorized use.",
      },
    ],
    image: "/images/Database/mysql-official.svg",
  },
  {
    id: "elasticsearch",
    title: "Elasticsearch",
    parentDescription:
      "Maiprosoft specializes in Elasticsearch, a powerful search and analytics engine. By leveraging its full-text search, real-time indexing, and scalability, Maiprosoft helps businesses implement fast, efficient search solutions. Whether for log analysis, data exploration, or enterprise search, Maiprosoft ensures optimal performance.",
    content: [
      {
        point: "Distributed Search Engine",
        description:
          "Elasticsearch is a distributed search engine that enables fast, scalable full-text search and real-time data analysis. It distributes data across nodes, ensuring high performance and reliability in large-scale systems.",
      },
      {
        point: "Schema-Free Data Model",
        description:
          "Elasticsearch uses a schema-free data model, allowing flexible storage of unstructured and semi-structured data. This dynamic approach enables easy indexing, fast searches, and adaptability to changing data.",
      },
      {
        point: "Full-Text Search Capabilities",
        description:
          "Elasticsearch offers powerful full-text search capabilities, enabling fast, accurate searches across large datasets. Its advanced text analysis features support complex queries, boosting search efficiency.",
      },
      {
        point: "Real-Time Analytics and Visualization",
        description:
          "Elasticsearch enables real-time analytics and visualization, processing large volumes of data instantly. It allows users to explore, analyze, and visualize data through integrated tools like Kibana.",
      },
    ],
    image: "/images/Database/Elasticsearch_logo.svg",
  },
  {
    id: "redis",
    title: "Redis",
    parentDescription:
      "Maiprosoft specializes in Redis, an advanced in-memory data structure store, providing fast and scalable solutions for caching, session storage, real-time analytics, and messaging. Leveraging Redis, Maiprosoft helps businesses enhance application performance, reduce latency, and improve overall system efficiency.",
    content: [
      {
        point: "In-Memory Data Storage:",
        description:
          "Redis is a high-performance, in-memory data store that offers fast data access. It supports various data structures like strings, lists, and hashes, making it ideal for caching and real-time applications.",
      },
      {
        point: "Key-Value Data Model",
        description:
          "Redis uses a key-value data model, storing data as pairs of keys and values. This simple structure allows for fast, efficient data retrieval, making it ideal for caching, session management, and more.",
      },
      {
        point: "High Performance and Scalability",
        description:
          "Redis offers high performance with low-latency data access and can scale horizontally. Its in-memory architecture ensures fast processing, while clustering and replication support large-scale, distributed systems.",
      },
      {
        point: "Persistence and Replication",
        description:
          "Redis offers persistence options like snapshots and append-only files, ensuring data durability. Its replication feature enables data redundancy and high availability, supporting fault tolerance in distributed systems.",
      },
    ],
    image: "/images/Database/redis-svgrepo-com.svg",
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
      <h2 className="text-3xl text-center font-poppins text-black font-medium mt-6">
        {tech.title}
      </h2>
      <p className="text-gray-700 text-left">{tech.parentDescription}</p>

      <div className="flex flex-col md:flex-row items-center mt-16 bg-maiy text-white p-8 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6 flex flex-col items-start border-r-2 border-white relative">
          <div
            className="absolute top-0 right-0 w-2 bg-[#333333] transition-all duration-300"
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
                    ? "font-bold text-2xl text-[#333333]"
                    : "hover:text-yello-200"
                }`}
                onClick={() => setSelectedPoint(item)}
              >
                {item.point}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-6">
          <p className="text-left text-lg leading-relaxed text-[#333333]">
            {selectedPoint.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Backend() {
  return (
    <>
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
Database                   </h1>
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
