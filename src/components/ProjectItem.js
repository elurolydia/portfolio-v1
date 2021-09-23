import TitleText from "./TitleText";
import { useState } from "react";

const ProjectItem = ({ project }) => {
  const [toggleState, setToggleState] = useState('');
  const showTitle = (show) => {
      show ? setToggleState( <TitleText title={project.name} />): setToggleState('')
  };




  return (
    <div
      className="project_background"
      style={{ backgroundImage: `url(${project.image})` }}
      onMouseOver={() => showTitle(true)}
      onMouseOut={() => showTitle(false)}
    >
      {toggleState}
    </div>
  );
};

export default ProjectItem;
