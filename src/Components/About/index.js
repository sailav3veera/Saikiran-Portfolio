import "./index.css";

function About() {
  return (
    <div className="mainaboutcontainer">
      <div className="topcontent">
        <h1 className="abouttitles">About Me</h1>
        <hr />
        <p>
          A passionate web developer and ICT Technical Support professional
          currently based in India. I have experience in technical support and a
          strong interest in modern web development, especially using React and
          JavaScript. I enjoy building responsive, user-friendly applications
          and continuously improving my technical skills. Currently, I’m looking
          for opportunities where I can grow as a developer and contribute to
          meaningful projects.
        </p>
      </div>
      <div className="mainn">
        <div className="education-container">
          <h1 className="heading">Education</h1>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h2>Master in Information Technoloy</h2>
                <h3>Central Queensland University - Melbourne,AUS</h3>
                <p>2018 - 2020</p>
                <p>Specialised in Networking</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h2>Bachelor of Technology</h2>
                <h3>Koneru Lakshmaiah education foundation</h3>
                <p>2014 - 2018</p>
                <p>
                  Completed graduation in Electronics and Communcation
                  Engineering.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h2>Intermediate (MPC)</h2>
                <h3>Narayana Junior College</h3>
                <p>2012 - 2014</p>
                <p>Focused on Mathematics and Science.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="certificatesbox">
          <h1 className="certificateheading">Certifications</h1>
          <ul>
            <li className="listcerti">
              Certified MERN Stack Developer - NxtWave
            </li>
            <li className="listcerti">React - The Complete Guide (Udemy)</li>
            <li className="listcerti">Node.js Developer Course (Udemy)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
