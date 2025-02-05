import React, { useState } from "react";
import "./quiz.css";
import { Link, Outlet } from "react-router-dom";

function Quiz() {
  const [searchTerm, setSearchTerm] = useState(""); 

  const quizOptions = [
    { name: "C", path: "c" },
    { name: "C#", path: "Chash" },
    { name: "C++", path: "c++" },
    { name: "CSS", path: "css" },
    { name: "Express Js", path: "express" },
    { name: "HTML", path: "html" },
    { name: "Java", path: "java" },
    { name: "JavaScript", path: "js" },
    { name: "Kotlin", path: "kotlin" },
    { name: "MongoDB", path: "mongodb" },
    { name: "MySQL", path: "mysql" },
    { name: "Node Js", path: "node" },
    { name: "PHP", path: "php" },
    { name: "Python", path: "python" },
    { name: "React Js", path: "react" },
    { name: "Swift", path: "swift" },
  ];

  const handleNavigation = (event) => {
    event.preventDefault();
    const targetUrl = event.currentTarget.getAttribute("href");
    window.location.href = targetUrl; 
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const filteredOptions = quizOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Quizs">
      <div className="search-bars">
        <input type="text" placeholder="Search" className="searchs" value={searchTerm} onChange={handleSearchChange}/>
      </div>
      <div className="quizs">
        {filteredOptions.map((option) => (
          <Link to={option.path} key={option.path} onClick={handleNavigation}>
            <input type="button" value={option.name} className="submits" />
          </Link>
        ))}
      </div>
      <Outlet/>
    </div>
  );
}

export default Quiz;
