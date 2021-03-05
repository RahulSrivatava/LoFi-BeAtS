import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = ({

}) => {

    return (
        <nav className="footer">
            <div className="Social">
                <div>
                    <h4>
                        Follow me on
                     </h4>
                </div>
                <ul className="socialIcon">
                    <li>
                        <a href="https://github.com/RahulSrivatava"> <FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rahul-srivastava-100/"> <FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/RahulSrivatava">   <FontAwesomeIcon icon={faTwitterSquare} /></a>
                    </li>
                </ul>
            </div>
            <div className="Mid">
                <h3 className="Middle">Made With <img src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" alt="Italian Trulli"></img></h3>
            </div>
        </nav >
    )
}
export default Footer;