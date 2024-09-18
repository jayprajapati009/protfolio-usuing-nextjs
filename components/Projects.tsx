import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const projectsData = [
  {
    title: "Quadruped Robot Design (State-Level Championship Winner)",
    description:
      "In this project, I led the design and development of a quadruped robot, which involved complex mechanical, electrical, and software integration. The goal was to create a robust, four-legged autonomous robot capable of navigating dynamic environments. Using CAD tools like Solidworks and PTC Creo, I designed the robot’s structure, focusing on weight distribution and mechanical strength. The control system relied on ROS and a custom motion planning algorithm that allowed the robot to adjust its gait in real-time based on the environment. I implemented dynamic path planning to ensure obstacle avoidance and smooth navigation. This project won a state-level robotics championship and significantly advanced my understanding of autonomous navigation and robotic kinematics.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Human Tracking Software Module with Real-Time Object Detection",
    description:
      "This project focused on building a human tracking system using advanced object detection algorithms in C++. I integrated the YOLOv3 model for real-time detection, which achieved an 84% confidence level and 99 ms inference time on the MS-COCO dataset. I also incorporated a KCF tracker for precise tracking across 164,000 images, enabling reliable performance in dynamic environments. This project demonstrated significant improvement in accuracy and efficiency. To further enhance development, I integrated CI/CD pipelines with Travis CI and Coveralls, which boosted code quality and testing coverage. The module was used in a multi-robot system, where the detection and tracking data fed into autonomous path-planning algorithms for mobile robots.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "AI-Driven Real-Time Image Captioning for Enhanced Accessibility",
    description:
      "This project aimed to assist visually impaired individuals by developing an AI-driven image captioning system. I trained a deep learning model using the Inception V3 CNN encoder for feature extraction, reaching a 92% accuracy rate in generating descriptive captions from real-time video feeds. To optimize real-time performance, I implemented Block Static Expansion and multi-headed attention vectors, which improved both accuracy and response time. Additionally, I developed Python scripts for seamless integration with mobile devices, enabling visually impaired users to capture and process video in real-time, with automatic caption generation and voice narration. This project highlighted my ability to apply AI solutions for real-world accessibility challenges.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Autonomous Pick-and-Place Robot",
    description:
      "This project involved the design and development of an autonomous robot capable of picking and placing color-coded blocks in a designated area. I engineered a real-time color detection system using a Pi Camera, which was integrated with the A* path planning algorithm to ensure accurate retrieval and placement of the blocks. The robot was equipped with IMU sensors (MPU6050) and encoders for precise navigation, and I implemented PID control for stable maneuvering. Obstacle avoidance was achieved through the use of ultrasonic sensors, allowing the robot to navigate dynamically changing environments. The project achieved an 80% success rate in goal placement, demonstrating effective robot localization and task execution.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Perception Project with TurtleBot 3 WafflePi",
    description:
      "In this perception-focused project, I worked with the TurtleBot 3 WafflePi to autonomously navigate through a set of waypoints on a flat surface. My key contribution was calibrating the monocular camera using a checkerboard pattern to derive intrinsic and extrinsic parameters. From there, I calculated the homography of the floor, identified the vanishing point, and determined the horizon line, enabling the robot to detect and follow waypoints seamlessly. Additionally, I integrated YOLO-based stop sign detection, allowing the robot to recognize and respond to stop signs in varying orientations. This project sharpened my skills in perception, camera calibration, and robot path planning.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Autonomous Block Delivery Robot",
    description:
      "This project involved creating an autonomous robot designed to detect and deliver blocks to specified goal positions. The robot used a Pi Camera to detect blocks, with homography-based depth calculation to accurately pinpoint the block's position relative to the camera. To plan the route, I implemented the A* algorithm, ensuring the robot could navigate to the block and deliver it to the goal. I also utilized encoder and IMU data to implement PID control, achieving precise localization and stable motion. Obstacle avoidance was achieved with ultrasonic sensors, enhancing the robot's ability to operate autonomously in unpredictable environments. The project achieved an 80% success rate in completing deliveries to the exact goal positions.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Semantic Segmentation for Real-Time Food Item Recognition",
    description:
      "This project revolved around real-time food item segmentation using deep learning techniques. I employed RNN-based ResNet50 and PointRend architectures to achieve an 80% accuracy rate in food item segmentation from live video feeds. Using transfer learning, I was able to improve model performance, reaching 67% test accuracy on a limited dataset of 4,935 training images and 2,135 test images, outperforming a custom model’s 43% accuracy. Fine-tuning pre-trained architectures allowed me to develop a reliable and efficient segmentation system, which was aimed at applications in food identification and inventory management in commercial kitchens.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Dynamic Path Planning for Autonomous Robots",
    description:
      "This project involved the development of dynamic path-planning algorithms for an autonomous robot to navigate unpredictable environments. Using ROS and Gazebo for simulation, I implemented global path planning using Dijkstra and A* algorithms, while employing local planners for real-time obstacle avoidance. The robot successfully navigated a test environment while dynamically adjusting its path based on sensor input. This project not only refined my understanding of planning algorithms but also helped me master ROS and simulation tools like Rviz and Gazebo.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "AudioVision Assist System for the Visually Impaired",
    description:
      "In this project, I developed an assistive technology platform for visually impaired individuals by integrating audio and vision-based systems. The project combined live video processing with object recognition and a voice assistant. The platform was built using Python and OpenCV to detect and classify objects in the environment, while the audio assistant would announce the identified objects to the user. The system was designed to function in real-time and assist users in navigating their surroundings safely. This project provided practical insights into assistive technology development and applied computer vision techniques for accessibility.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Multi-Robot System Software Module",
    description:
      "In this project, I developed a software module for a multi-robot system, focusing on coordination and communication between robots. The system was designed to optimize task execution by distributing tasks among multiple robots, ensuring efficient task completion with minimal redundancy. I used ROS to manage inter-robot communication and integrated sensors for real-time data exchange, enabling the robots to adjust their paths based on the actions of other robots in the system. This project demonstrated my ability to build complex systems that require real-time collaboration between autonomous robots.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  },
  {
    title: "Patent for IoT-Based Wastewater Spillage Detection System",
    description:
      "I co-invented a patented IoT-based wastewater spillage detection system designed to monitor and alert authorities of any spillage in real-time. The system integrates multiple sensors to detect abnormal spillage patterns, and the data is transmitted via IoT devices to a centralized system for monitoring and action. This project combined sensor networks, data transmission protocols, and environmental monitoring technologies to create a solution that can have a significant impact on environmental safety.",
    link: "https://github.com/jayprajapati009",
    code: "https://github.com/jayprajapati009",
    previewVideo: "https://github.com/jayprajapati009",
  }
];



function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex gap-2 mt-auto">
                <Link target="_blank" href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link target="_blank" href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;