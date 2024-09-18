'use client';

import Image from 'next/image';

const Intro = () => {
    return (
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center">
            <div className="flex flex-col gap-4 md:w-8/12 sm:w-full">
                <h1 className="text-4xl font-bold">Hey! I'm Jay Prajapati</h1>
                {/* Update the description. */}
                <p className="text-base text-gray-700 dark:text-gray-300">
                    I’m a Robotics Engineer with expertise in Machine Learning, Computer Vision, and Autonomous Systems. With a Master’s in Robotics from the University of Maryland and hands-on experience in designing intelligent robotic solutions, I am driven by a passion for innovation and problem-solving. My skill set spans autonomous navigation, software development, and AI-driven automation. I’m always looking to push the boundaries of what robots can achieve, blending cutting-edge technology with real-world applications.
                </p>
            </div>

            <div className='md:w-4/12 sm:w-full'>
                <Image 
                    src="./images/jay_dp.png" 
                    alt="Jay Prajapati" 
                    width={200} 
                    height={200}
                    className = "rounded-full border border-gray-100 object-cover" 
                />
            </div>

        </div>
    );
};

export default Intro;