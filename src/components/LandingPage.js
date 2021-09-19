import Navbar from './Navbar';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const LandingPage = () => {
    return (
        <div className= 'landing_page'>
            <Navbar/>
            <div className='content'>
                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {1000}> 
                <p>I am</p>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {2000}>
                <h1>LYDIA ELURO</h1>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {3000}>
                <p>and I am a</p>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {4000}>
                <h2>FRONTEND WEB DEVELOPER</h2>
                </ReactCSSTransitionGroup>
            </div>
            
        </div>
    )
}

export default LandingPage
