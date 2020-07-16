import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

const Facebook = 'https://www.Facebook.com/';
const Instagram = 'https://www.Instagram.com/';
const Twitter = 'https://www.Twitter.com/';
const Whatsapp = 'https://www.Whatsapp.com/';
const Youtube = 'https://www.Youtube.com/';
const Github = 'https://github.com/MasterEatsPlatzi/Master-Eats';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Footer">
          <div className="Footer--social-networks">
            <a href={Facebook} title="Facebook" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={Instagram} title="Instagram" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={Twitter} title="Twitter" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={Whatsapp} title="Whatsapp" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href={Youtube} title="Youtube" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href={Github} title="Github" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;