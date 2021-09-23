
import  ProjectItem  from "./ProjectItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const ProjectData = () => {
    const myProjects = [
        {
            name: "Form Project",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Form with validation",
            url: "https://lydia-login.netlify.app/"
        },
        {
            name: "Custom Cards",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Group of cards",
            url: "https://lydia-login.netlify.app/"
        },
        {
            name: "Task Tracker",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Task Tracker built with React",
            url: "https://lydia-login.netlify.app/"
        },
        {
            name: "Task Tracker",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Task Tracker built with React",
            url: "https://lydia-login.netlify.app/"
        },
        {
            name: "Task Tracker",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Task Tracker built with React",
            url: "https://lydia-login.netlify.app/"
        },
        {
            name: "Task Tracker",
            image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwcGxhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            desc: "A Task Tracker built with React",
            url: "https://lydia-login.netlify.app/"
        },
    ]

    const settings = {
        dots : true,
        infinite:true,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScrool: 3,
    }

    return (
        <div>
            <Slider {...settings}>
                {myProjects.map((item) => {
                    return (
                        <ProjectItem project = {item}/>
                    )
                    })
                    
                }
            </Slider>
        </div>
    )
}

export default ProjectData
