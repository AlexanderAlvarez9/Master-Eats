import React from 'react';
import '../assets/styles/components/Footer.scss'

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Footer">
          <div className="Footer--social-networks">
            <i className="icon">Fb</i>
            <i className="icon">Ig</i>
            <i className="icon">Tw</i>
            <i className="icon">Wa</i>
            <i className="icon">Yt</i>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;