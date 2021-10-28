import Navbar from './Navbar';
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import TypeWriterEffect from 'react-typewriter-effect';
// import Animate from 'animate.css-react'
import 'animate.css/animate.css'
import {useState} from 'react'

const LandingPage = () => {
    // return (
    //     <div className= 'landing_page'>
    //         <Navbar/>
    //         <div className='content'>
    //             <ReactCSSTransitionGroup transitionName = "example"
    //                 transitionAppear = {true} transitionAppearTimeout = {1000}> 
    //             <p>I am</p>
    //             </ReactCSSTransitionGroup>

    //             <ReactCSSTransitionGroup transitionName = "example"
    //                 transitionAppear = {true} transitionAppearTimeout = {2000}>
    //             <h1>LYDIA ELURO</h1>
    //             </ReactCSSTransitionGroup>

    //             <ReactCSSTransitionGroup transitionName = "example"
    //                 transitionAppear = {true} transitionAppearTimeout = {3000}>
    //             <p>and I am a</p>
    //             </ReactCSSTransitionGroup>

    //             <ReactCSSTransitionGroup transitionName = "example"
    //                 transitionAppear = {true} transitionAppearTimeout = {4000}>
    //             <h2>FRONTEND WEB DEVELOPER</h2>
    //             </ReactCSSTransitionGroup>
    //         </div>
            
    //     </div>
    // )


    const [state, setstate] = useState(
        <div className='landing_page initial'>
            <div>
                <span className='animate__animated animate__fadeIn animate__fadeOut'>I am</span> <br/>
                <span className='animate__animated animate__fadeIn'>Lydia Eluro</span>
            </div>
        </div>
    )

        

    return (
        <div className= 'landing_page'>
            {state}

            {/* {setstate(
                <Navbar/>,
                // <div className="content animate__animated animate__bounce">
                //     <TypeWriterEffect
                //         textStyle={{
                //             color: 'rgba(0, 255, 255, 0.349)',
                //             fontSize: '35px',
                //             fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                //         }}
                //         startDelay = {2000}
                //         cursorColor= 'white'
                //         multiText={[
                //             'I am',
                //             'LYDIA ELURO',
                //         ]}
                //         multiTextDelay={1000}
                //         typeSpeed={70}
                //         hideCursorAfterText={true}
                //     />
                // </div>
                
                
                <div className='content' id='noSpace'>
                    <TypeWriterEffect
                        textStyle={{
                            color: 'rgba(0, 255, 255, 0.349)',
                            fontSize: '36px',
                        }}
                        startDelay = {5000}
                        cursorColor= 'white'
                        multiText={[
                            'and I am a',
                            'FRONTEND WEB DEVELOPER',
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={70}
                    />
            
                </div>
            )} */}

        </div>
    )
}

export default LandingPage
