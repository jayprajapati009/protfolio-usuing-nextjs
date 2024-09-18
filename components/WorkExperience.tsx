import React from "react";

interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}


const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "August 2023",
    endDate: "May 2024",
    companyName: "University of Maryland",
    jobTitle: "Graduate Teaching Assistant",
    description: [
      "Mentored 95+ graduate students in Computer Vision concepts, including homography, calibration, stereo vision, optical flow, and perception concepts, including Kalman Filters, Particle Filter, sensor fusion, and SLAM.",
      "Instructed graduate students in advanced C++, OOP, ROS2, ROS1-ROS2 bridge, unit testing, CI/CD, version control, and software design patterns, using tools like Git and GitHub, which enhanced their programming proficiency and project management skills.",
    ],
  },
  
  {
    startDate: "January 2020",
    endDate: "January 2022",
    companyName: "Robotics Lab, BVM Engineering College",
    jobTitle: "Robotics Intern",
    description: [
      "3D scanned an 11ft statue, achieved a 98% accurate CAD model, and cut production costs by 50% for 3D printed miniatures using FDM technique.",
      "Worked in a Linux-based environment, optimizing data pipelines for performance and reliability in various robotic applications.",
      "Pioneered the design and development of a Quadruped Robot, mimicking walking, turning, trotting, and slope climbing abilities of canines.",
      "Fabricated the robot using 3D printing, reducing weight by 40% compared to acrylic or aluminum, while ensuring robust integrity and mobility.",
      "Conducted detailed motion analysis using SolidWorks, optimizing gait patterns to achieve 90% accuracy when compared to simulation models.",
      "Optimized multithreaded control for 12 servo motors using an ATmega 2560 microcontroller and PCA9685 servo control board via I2C.",
      "Engineered a wheeled robot using Raspberry Pi, LiDAR, and camera, mapping environments up to 20,000 sqft with autonomous GPS navigation.",
      "Evaluated HectorSLAM, Cartographer, and Gmapping algorithms, identifying Cartographer as the most accurate with 30% fewer artifacts.",
    ],
  },
  
];


const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            <div className="p-1">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    {workExperienceData.map((item, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.startDate} - {item.endDate}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle} at {item.companyName}</h3>
                            <ul className="text-base text-gray-700 dark:text-gray-300">
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default WorkExperience;