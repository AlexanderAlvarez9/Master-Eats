import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Instagram = 'https://www.Instagram.com/';
const Twitter = 'https://www.Twitter.com/';
const Whatsapp = 'https://www.Whatsapp.com/';
const Github = 'https://github.com/MasterEatsPlatzi/Master-Eats';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="Footer">
          <div className="Footer--social-networks">
            <a href={Instagram} title="Instagram" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={Twitter} title="Twitter" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href={Whatsapp} title="Whatsapp" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href={Github} title="Github" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;