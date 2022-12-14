import React from 'react'
import html from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import reactImage from "../Images/react.png";
import github from "../Images/github.png";
import tailwind from "../Images/tailwind.png";
import node from "../Images/node.jpg"
import express from "../Images/express.png"
import mongo from "../Images/mongo.png"
import python from "../Images/python.png"
import java from "../Images/java.png"
import php from "../Images/php.jpg"
import mysql from "../Images/mysql.png"
import docker from "../Images/docker.png"
import linux from "../Images/linux.jpg"

const Skills = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: express,
      title: "Express",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: python,
      title: "python",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: java,
      title: "java",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: php,
      title: "PHP",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: mysql,
      title: "mysql",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: linux,
      title: "linux",
      style: "shadow-gray-400",
    },
    {
      id: 13,
      src: docker,
      title: "Docker",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    
  ];
  return (
    <div
      name="experience"
      className="bg-black from-gray-800 to-black w-full h-auto"
      id='skills'
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills