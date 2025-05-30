"use client";

import { useState, useEffect, useRef } from "react";

const portfolioItems = [
  {
    title: "Portfolio of HTML5 Projects",
    content:
      "Modern Tech involves cutting-edge technologies and tools that shape the future of the web development world. From AI-powered tools to next-gen frameworks, it all falls under Modern Tech.",
  },
  {
    title: "Modern Tech",
    content:
      "Modern Tech involves cutting-edge technologies and tools that shape the future of the web development world. From AI-powered tools to next-gen frameworks, it all falls under Modern Tech.",
  },
  {
    title: "Agile Approach",
    content:
      "The Agile Approach focuses on flexibility and continuous improvement. By using Agile methodologies, we ensure that we meet client expectations, even in an ever-changing project environment.",
  },
  {
    title: "Dedicated Development",
    content:
      "Dedicated Development means working with a specialized team that focuses solely on a project. With this approach, you get a team that understands your goals and works diligently to make them happen.",
  },
];


export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]); // Default to the first item
  const [highlightTop, setHighlightTop] = useState(0);
  const listRef = useRef(null);

  // Adjust the position of the highlight indicator based on the selected item
  useEffect(() => {
    const selectedIndex = portfolioItems.findIndex(
      (item) => item.title === selectedItem.title
    );
    const listItem = listRef.current?.children[selectedIndex];

    if (listItem) {
      setHighlightTop(listItem.offsetTop + listItem.offsetHeight / 2 - 20);
    }
  }, [selectedItem]);

  return (
    <div className="flex flex-col md:flex-row items-center mt-16 bg-[#1d8bf2] text-white p-8 rounded-lg shadow-lg">
      {/* Sidebar: Portfolio Titles */}
      <div className="md:w-1/2 p-6 flex flex-col items-start border-r-2 border-white relative">
        {/* Highlight Indicator */}
        <div
          className="absolute top-0 right-0 w-2 bg-yellow transition-all duration-300"
          style={{
            height: "50px",
            top: `${highlightTop}px`,
            transform: "translateX(60%)",
          }}
        ></div>
        {/* Portfolio Titles */}
        <ul
          ref={listRef}
          
          className="space-y-3 list-none text-left pl-4 w-full"
        >
          {portfolioItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer pl-2 py-1 transition-colors duration-300 ${
                selectedItem.title === item.title
                  ? "font-bold text-yellow-400"
                  : "hover:text-yellow-200"
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="md:w-1/2 p-6">
        <p className="text-left text-lg leading-relaxed">
          {selectedItem.content}
        </p>
      </div>
    </div>
  );
}

