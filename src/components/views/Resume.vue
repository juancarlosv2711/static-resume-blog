<template>
  <div class="resume">
    <header class="header">
      <h1>Juan Carlos Velásquez López</h1>
      <h2>Software Developer</h2>
    </header>

    <div class="resume-grid">
      <aside class="sidebar">
        <section class="profile">
          <h3>PROFILE</h3>
          <p>
            Experienced Software Developer skilled in designing, installing,
            testing, and maintaining software systems. Collaborating with large
            teams in design meetings, sprint planning, backlog grooming, and
            code reviews, I bring unique perspectives on software design
            patterns and principles.
          </p>
        </section>

        <section class="contact">
          <h3>CONTACT</h3>
          <ul>
            <li><i class="fas fa-phone"></i> +506 8842-9615</li>
            <li><i class="fas fa-envelope"></i> juancarlosv2711@gmail.com</li>
            <li><i class="fas fa-map-marker-alt"></i> Heredia, Costa Rica</li>
          </ul>
        </section>

        <section class="skills">
          <h3>SKILLS</h3>
          <div class="skills-grid">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Golang</span>
            <span class="skill-tag">PHP</span>
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">Docker</span>
            <span class="skill-tag">Solr</span>
            <span class="skill-tag">GitHub</span>
          </div>
        </section>

        <section class="languages">
          <h3>LANGUAGES</h3>
          <div class="language-item">
            <span>English</span>
            <div class="language-level">
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot"></div>
            </div>
          </div>
          <div class="language-item">
            <span>Spanish</span>
            <div class="language-level">
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
              <div class="level-dot filled"></div>
            </div>
          </div>
        </section>
      </aside>

      <main class="main-content">
        <section class="work-experience">
          <h3>WORK EXPERIENCE</h3>
          <div class="job">
            <div class="job-header">
              <h4>Software Engineer</h4>
              <div class="job-meta">
                <span class="company">Huli</span>
                <span class="date">December 2022 - current</span>
              </div>
            </div>
            <ul class="job-description">
              <li>
                Designing architecture ensures seamless interaction between
                different microservices, with careful anticipation of potential
                issues to prevent problems down the line. This process involves
                outlining the necessary tasks to implement functionality and
                providing accurate estimates of the required effort.
                Architectural proposals from peers are reviewed and validated to
                maintain consistency and quality across the board.
              </li>
              <li>
                Provide mentorship to junior developers, guiding them in best
                practices, code quality, and problem-solving strategies to
                accelerate their growth and contribution to the team.
              </li>
              <li>
                On the frontend, interactive and responsive user interfaces are
                developed using Vue.js, a progressive JavaScript framework. By
                leveraging Vue’s component- based architecture, reusable and
                modular UI elements are created, enhancing development
                efficiency and improving code maintainability.
              </li>
              <li>
                For backend development, both Go (Golang) and PHP are used to
                build scalable, high-performance systems, utilizing their
                respective strengths in simplicity and performance. Both gRPC
                and RESTful APIs are employed to facilitate efficient
                communication between microservices.
              </li>
              <li>
                MySQL and PostgreSQL databases are utilized to store and
                retrieve information used across various applications.
                Additionally, Solr is used to optimize information retrieval,
                ensuring fast and accurate search results.
              </li>
              <li>
                In terms of infrastructure, Docker’s containerization
                capabilities are utilized to run various services, enabling
                seamless development, testing, and deployment across different
                environments.
              </li>
              <li>
                Within the Scrum framework, key agile ceremonies, including
                Sprint Planning, Sprint Reviews, Sprint Retrospectives, and
                Backlog Grooming, are actively contributed to and led, ensuring
                the team stays aligned and productive.
              </li>
              <li>
                Finally, code reviews and local testing are performed using
                GitHub, with collaboration among peers to maintain high-quality
                code and successful project outcomes.
              </li>
            </ul>
          </div>

          <div class="job">
            <div class="job-header">
              <h4>Product Support</h4>
              <div class="job-meta">
                <span class="company">Huli</span>
                <span class="date">February 2020 - 2022</span>
              </div>
            </div>
            <ul class="job-description">
              <li>
                Proficiently identified and resolved bugs within the platform,
                employing programming skills to develop tailored solutions,
                enhancing overall platform functionality and user experience.
              </li>
              <li>
                Provided exceptional product support by utilizing MySQL database
                to extract and update crucial information to address
                data-related issues efficiently. Managed prioritized cases in
                Jira, demonstrating strong organizational and multitasking
                skills to address customer issues.
              </li>
              <li>
                Identified and resolved software bugs through coding solutions,
                showcasing a strong technical aptitude and problem-solving
                ability.
              </li>
              <li>
                Established and maintained comprehensive documentation for issue
                resolution processes, facilitating knowledge transfer within the
                team and organization.
              </li>
              <li>
                Actively participated in continuous improvement initiatives,
                contributing insights to enhance product stability and user
                experience.
              </li>
            </ul>
          </div>
        </section>

        <section class="education">
          <h3>EDUCATION</h3>
          <div class="degree">
            <h4>Software Engineer</h4>
            <div class="degree-meta">
              <span class="institution">Universidad Latina</span>
              <span class="date">2019 - 2022</span>
            </div>
          </div>
          <div class="degree">
            <h4>Science in Information Technology</h4>
            <div class="degree-meta">
              <span class="institution">CCT College Dublin</span>
              <span class="date">2017 - 2019</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeView",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* Base Styles */
.resume {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid black;
}

h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

h2 {
  font-size: 1.4rem;
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 0;
}

h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ecf0f1;
}

/* Grid Layout */
.resume-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.sidebar {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

/* Profile Section */
.profile p {
  font-size: 0.95rem;
  color: #555;
}

/* Contact Section */
.contact ul {
  list-style: none;
  padding-left: 0;
}

.contact li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.contact i {
  margin-right: 10px;
  color: #42b983;
  width: 20px;
  text-align: center;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.skill-tag {
  background-color: #e0f7fa;
  color: #00796b;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  text-align: center;
  display: inline-block;
  margin: 2px;
}

/* Languages Section */
.language-item {
  margin-bottom: 15px;
}

.language-level {
  display: flex;
  margin-top: 5px;
}

.level-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #42b983;
  margin-right: 5px;
}

.level-dot.filled {
  background-color: #42b983;
}

/* Work Experience */
.job {
  margin-bottom: 25px;
}

.job-header {
  margin-bottom: 10px;
}

.job h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.job-meta {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.job ul {
  list-style-type: none;
  padding-left: 0;
}

.job-description li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  text-align: left;
}

.job-description li:before {
  content: "•";
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -2px;
}

/* Education Section */
.degree {
  margin-bottom: 20px;
}

.degree h4 {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 5px;
}

.degree-meta {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 768px) {
  .resume {
    padding: 15px;
  }

  .header {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
    margin: 20px 0 10px;
  }

  .resume-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .sidebar {
    order: 2;
    padding: 15px;
  }

  .main-content {
    order: 1;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .job-meta,
  .degree-meta {
    flex-direction: column;
    gap: 5px;
  }

  .job-meta span,
  .degree-meta span {
    width: 100%;
  }

  .job-description li {
    padding-left: 15px;
    margin-bottom: 6px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-tag {
    font-size: 0.75rem;
    padding: 3px 8px;
  }

  .contact li {
    font-size: 0.9rem;
  }

  .job h4,
  .degree h4 {
    font-size: 1rem;
  }

  .job-description li {
    font-size: 0.9rem;
  }
}
</style>
