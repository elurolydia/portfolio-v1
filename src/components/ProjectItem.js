import PropTypes from 'prop-types'

const ProjectItem = ({project}) => {
    return (
        <div className="card">
            <img alt= "project_image" className="project_image" src={project.image}/>
            <br/>
            <text className="project_title">{project.name}</text>
            <br/>
            <text className="project_title">{project.desc}</text>           
        </div>
    )
}

export default ProjectItem


ProjectItem.propTypes = {
    project : PropTypes.object.isRequired,
}