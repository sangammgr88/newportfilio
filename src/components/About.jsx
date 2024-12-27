import React from "react";

const About = () => {
  return (
    <div className="p-20">
      <div className="border rounded-2xl bg-white p-6 h-auto">
        <div>
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="text-gray-700">
            I’m Sangam Magar, a 20-year-old front-end developer studying BIT.
            With 6 months of experience in React.js, I focus on building
            user-friendly web apps. My skills include HTML, CSS, JavaScript,
            Tailwind CSS, and WordPress. I’m passionate about projects relevant
            to Nepal and am currently developing an e-commerce website while
            aiming to grow into a full-stack developer.
          </p>
        </div>
        <div className="flex ">
          <div>
        <div className="ml-10">
          <div>
            <h1 className="text-2xl font-bold mt-8">Education</h1>
            <div className="flex gap-20 mt-8">
              <div className="border rounded-lg bg-slate-900 text-white w-64 text-center h-28">
                <li>High School</li>
                <p>Mahendra Rastrya School</p>
                <p>2020-2022</p>
                <p>GPA:3.36</p>
              </div>
              <div className="border rounded-lg bg-slate-900 text-white w-80 text-center h-28">
                <li>Bachelor</li>
                <p>Texas College of Management and it </p>
                <p>2023-Current</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-24 ml-36 mt-5">
          <div>
            <h1 className="text-xl font-bold">Work Skills</h1>
            <p className="border rounded-lg bg-slate-200 mt-2">React js</p>
            <p className="border rounded-lg bg-slate-200 mt-2">JavaScript</p>
            <p className="border rounded-lg bg-slate-200 mt-2">Figma</p>
            <p className="border rounded-lg bg-slate-200 mt-2">Tailwind Css</p>
            <p className="border rounded-lg bg-slate-200 mt-2">Flutter</p>
            <p className="border rounded-lg bg-slate-200 mt-2">WordPress</p>
          </div>
          <div>
            <h1 className="text-xl font-bold">Soft Skills</h1>
            <p className="border rounded-lg bg-slate-200 mt-2">
              Time management
            </p>
            <p className="border rounded-lg bg-slate-200 mt-2">Leadership</p>
            <p className="border rounded-lg bg-slate-200 mt-2">
              Emotional intelligence
            </p>
            <p className="border rounded-lg bg-slate-200 mt-2">
              Problem-solving
            </p>
            <p className="border rounded-lg bg-slate-200 mt-2">Teamwork</p>
            <p className="border rounded-lg bg-slate-200 mt-2">Communication</p>
          </div>
        </div>
        </div>
        <div>
          <h1>What I do!</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
