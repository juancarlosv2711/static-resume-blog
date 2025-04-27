<template>
  <div class="resume">
    <h1>Juan Carlos Velásquez López</h1>
    <h2>Software Developer</h2>
    <section class="profile">
      <h3>P R O F I L E</h3>
      <p>
        Experienced Software Developer skilled in designing, installing, testing, and
        maintaining software systems. Collaborating with large teams in design meetings,
        sprint planning, backlog grooming, and code reviews, I bring unique perspectives on
        software design patterns and principles.
      </p>
    </section>
    <section class="work-experience">
      <h3>W O R K   E X P E R I E N C E</h3>
      <div class="job">
        <h4>Software Engineer</h4>
        <p class="resumeDate">December 2022 - current</p>
        <p class="resumeDate">Huli</p>
        <ul>
          <li>Designing architecture ensures seamless interaction between different microservices...</li>
          <li>Architectural proposals from peers are reviewed and validated...</li>
          <li>Provide mentorship to junior developers...</li>
          <li>On the frontend, interactive and responsive user interfaces are developed using Vue.js...</li>
          <li>For backend development, both Go (Golang) and PHP are used...</li>
          <li>MySQL and PostgreSQL databases are utilized...</li>
          <li>In terms of infrastructure, Docker’s containerization capabilities are utilized...</li>
          <li>Within the Scrum framework, key agile ceremonies are actively contributed to...</li>
          <li>Finally, code reviews and local testing are performed using GitHub...</li>
        </ul>
      </div>
      <div class="job">
        <h4>Product Support</h4>
        <p class="resumeDate">February 2020 - 2022</p>
        <p class="resumeDate">Huli</p>
        <ul>
          <li>Proficiently identified and resolved bugs within the platform...</li>
          <li>Provided exceptional product support by utilizing MySQL database...</li>
          <li>Managed prioritized cases in Jira...</li>
          <li>Identified and resolved software bugs through coding solutions...</li>
          <li>Established and maintained comprehensive documentation...</li>
          <li>Actively participated in continuous improvement initiatives...</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ResumeView'
}
</script>

<style scoped>
.resume {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1, h2 {
  text-align: center;
  margin-bottom: 10px;
}

h3 {
  margin-top: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
}

.profile, .work-experience {
  margin-top: 20px;
}

.job {
  margin-top: 15px;
}

.job h4 {
  margin: 5px 0;
  text-align: left;
}

ul {
  margin: 10px 0;
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
  text-align: left;
}

.resumeDate {
  text-align: left;
}
</style>