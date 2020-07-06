import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Footer">
          <div className="Footer--social-networks">
            <i className="icon"><FontAwesomeIcon icon={faFacebook} /></i>
            <i className="icon"><FontAwesomeIcon icon={faInstagram} /></i>
            <i className="icon"><FontAwesomeIcon icon={faTwitter} /></i>
            <i className="icon"><FontAwesomeIcon icon={faWhatsapp} /></i>
            <i className="icon"><FontAwesomeIcon icon={faYoutube} /></i>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;