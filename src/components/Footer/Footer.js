import { AiFillGithub } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h5>Email</h5>
                <small style={{ fontSize: '11px'}}>
                    <a href="mailto:elurolydia@gmailcom" style={{ fontSize: '11px', position:'relative', left: '8.5px' }}>elurolydia@gmail.com</a>
                </small>
            </div>
            <div>
                <h5>Follow</h5>
                <small style={{ fontSize: '26px', position: 'relative', right: '10' }}>
                    <a href="https://www.google.com" target='blank'><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/lydia-eluro-9514491b3" target='blank'><AiFillLinkedin/></a>
                    <a href="https://www.facebook.com/elogorchukwu/" target='blank'><AiFillFacebook/></a>
                </small>
                
            </div>
        </div>
    )
}

export default Footer
