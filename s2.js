import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll("nav ul li a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div>
      <nav className="bg-gray-900 p-4 text-center">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#about" className="text-white hover:underline">About Me</a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:underline">My Skills</a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:underline">My Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:underline">Contact Me</a>
          </li>
          <li>
            <a href="/resume.pdf" download className="text-white hover:underline">Download My Resume</a>
          </li>
        </ul>
      </nav>

      <section id="about" className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">About Me</h1>
        <p className="text-lg text-gray-600 mt-4">
          I am pursuing B.Tech 2nd year at LPU. My goal is to become a web developer
          in my dream company. For that, I have started learning HTML, CSS, JavaScript,
          and other courses. I have completed several certifications in my last three semesters
          based on Salesforce Trailhead, communication skills from TCS ION, and joined an
          internship at Interveda for the January batch.
        </p>
      </section>

      <section id="skills" className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">My Skills</h1>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
          <li>HTML, CSS, JavaScript</li>
          <li>Communication</li>
          <li>Java, Python</li>
          <li>SQL</li>
        </ul>
      </section>
     <section id="my education" className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">My Education</h1>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
          <li>B.Tech in Computer Science and Engineering, Lovely Professional University (2022 - Present)</li>
          <li>Intermediate, Narayana Junior College (2020 - 2022)</li>      
          <li>High School, ZP High School (2019 - 2020)</li>
        </ul>
      </section>

      <section id="projects" className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">My Projects</h1>
        <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
          <li>Created a website on handloom crafts using HTML, CSS, JavaScript.</li>
          <li>Developed an online education platform using HTML, CSS, JavaScript.</li>
          <li>Built an accident detection device using a Nano board in my second semester.</li>
          <li>Conducted research on memory management in operating systems.</li>
        </ul>
      </section>

      <section id="contact" className="p-12 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-lg text-gray-600 mt-4">Email: venkatrajeshnaidu@gmail.com</p>
        <p className="text-lg text-gray-600 mt-4">
          LinkedIn: <a href="https://www.linkedin.com/in/somineni-venkat-rajesh/" target="_blank" className="text-blue-600 underline">Visit My LinkedIn</a>
        </p>
        <p className="text-lg text-gray-600 mt-4">
          GitHub: <a href="https://github.com/sominenivenkatarajesh" target="_blank" className="text-blue-600 underline">Visit My GitHub</a>
        </p>
      </section>
    </div>
  );
};

export default Portfolio;