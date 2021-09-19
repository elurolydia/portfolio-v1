import  ProjectItem  from "../components/ProjectItem";
import PropTypes from 'prop-types'

const ProjectData = () => {
    const projects = [                 
    {
        name: "Form Project",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A Form with validation"
    },
    {
        name: "Custom Cards",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A Group of cards"
    },
    {
        name: "Task Tracker",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A Task Tracker built with React"
    },
    {
        name: "Task Tracker",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A Task Tracker built with React"
    },
    {
        name: "Task Tracker",
        image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A Task Tracker built with React"
    }
]
    return (
        <div>
            {projects.map((item, index) => {
            return (
            <ProjectItem project={item}></ProjectItem>
            )
        })
        }
        </div>
    );
};



export default ProjectData


ProjectData.propTypes = {
    project : PropTypes.array.isRequired,
}



