import React from "react";

// Programming Languages and Concepts
const programmingSkills = [
  "Python",
  "C/C++",
  "MATLAB/Simulink",
  "SQL",
  "Multi-Threading",
  "Data Structures",
  "Algorithms",
  "Unit Testing",
  "PLC Ladder Logic"
];

// Software Tools
const softwareTools = [
  "ROS",
  "ROS2",
  "Rviz",
  "Gazebo",
  "MoveIt",
  "NAV2",
  "Solidworks",
  "PTC Creo",
  "Fusion 360",
  "MS Office",
  "Docker",
  "Git (Version Control)"
];

// Libraries and Tools
const librariesAndTools = [
  "Git",
  "PyTorch",
  "TensorFlow",
  "Keras",
  "Cuda",
  "SKLearn",
  "OpenCV",
  "Eigen",
  "NumPy",
  "Pandas",
  "Doxygen",
  "LaTeX",
  "Linux",
  "Lucid"
];

// Soft Skills
const softSkills = [
  "Problem-Solving",
  "Collaboration",
  "Critical Thinking",
  "Communication"
];



const Skills = () => {
    return (
        <div className="flex flex-col gap-8 w-full">

            {/* Programming Skills */}
            <div>
                <h1 className="text-2xl font-bold">Programming Skills</h1>
                <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Software Tools */}
            <div>
                <h1 className="text-2xl font-bold">Software Tools</h1>
                <div className="flex flex-wrap gap-2">
                    {softwareTools.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Libraries and Tools */}
            <div>
                <h1 className="text-2xl font-bold">Libraries and Tools</h1>
                <div className="flex flex-wrap gap-2">
                    {librariesAndTools.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-100"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Soft Skills */}
            <div>
                <h1 className="text-2xl font-bold">Soft Skills</h1>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-500 dark:text-gray-100"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </div>


    );
};

export default Skills;