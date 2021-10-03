import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiBootstrap } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Skills = () => {
  const eachSkill = [
    {
      name: "HTML5",
      img: <ImHtmlFive />,
    },
    {
      name: "CSS3",
      img: <FaCss3 />,
    },
    {
      name: "JavaScript",
      img: <SiJavascript />,
    },
    {
      name: "React",
      img: <GrReactjs />,
    },
    {
      name: "Bootstrap",
      img: <SiBootstrap />,
    },
    {
      name: "Git",
      img: <BiGitBranch />,
    },
    {
      name: "GitHub",
      img: <AiFillGithub />,
    },
  ];

  return (
    <div className="about_card Education">
      <h3>Skills</h3>
      <div id="skills">
        {eachSkill.map((skill) => {
          return (
            <div style ={{fontSize: '22px'}}>
              <h3 style={{ fontSize: '35px', color: "blue", display: 'inline' }}>{skill.img}</h3>
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
