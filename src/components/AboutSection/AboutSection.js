import Certifications from "./Certifications";
import Skills from "./Skills";

const AboutSection = () => {
  return (
    <div className="about_section" id="about">
      <h2 className="about_header">About</h2>
      <div className="about_content">
        <div className="about_card Education">
          <h3 className="about_inner_header">Education</h3>
          <p>
            Google Africa Developers Scholarship
            <br />
            <small>2020</small>
            <p>Mobile Web Development</p>
          </p>

          <p>
            Osun State Polytechnic, Iree, Osun State, Nigeria
            <br />
            <small>2018</small>
            <p>Mass Communication</p>
          </p>
        </div>

        <div >
          <Certifications />
        </div>

        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
