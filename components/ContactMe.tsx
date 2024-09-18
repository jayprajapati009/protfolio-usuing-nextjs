import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-med text-gray-500 dark:text-gray-300">
        Connect with me on {" "}
        <Link
          href="https://www.linkedin.com/in/jayprajapati009/"
          target="_blank"
          className="text-blue-500"
        >
          LinkedIn
        </Link>{" "}
        or email me directly at{" "}
        <Link
          href="mailto:jayprajapati9900@gmail.com"
          className="text-blue-500"
        >
          jayprajapati9900@gmail.com
        </Link>
      </p>
    </div>
  );
}

export default ContactMe;