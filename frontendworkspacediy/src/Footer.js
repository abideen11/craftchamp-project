import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="main-ftr">
                <div className="div-ftr"></div>
                <div className="div-ftr2">
                    <div className="ftr2-col">
                        <h4>Company</h4>
                        <ul className="ftr2-ul">
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</Link></li>
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Partner with Us</Link></li>
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Advertise</Link></li>
                        </ul>
                    </div>
                    <div className="ftr2-col2">
                        <h4>Support</h4>
                        <ul className="ftr2-ul">
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Customer Service</Link></li>
                            <li><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Newsletter</Link></li>
                        </ul>
                    </div>
                    <div className="ftr2-fa">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebookF} /></Link></p>
                    </div>
                    <div className="ftr2-fa2">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faTwitter} /></Link></p>
                    </div>
                    <div className="ftr2-fa3">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faInstagram} /></Link></p>
                    </div>
                    <div className="ftr2-fa4">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faYoutube} /></Link></p>
                    </div>
                    <div className="ftr2-fa5">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}><FontAwesomeIcon icon={faLinkedinIn} /></Link></p>
                    </div>
                    <div className="ftr2-hr">
                        <hr />
                    </div>
                    <div className="ftr2-rft">
                        <p><Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link> <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</Link> <Link to="/temporary" style={{ color: 'inherit', textDecoration: 'none' }}>Ad Choices</Link></p>
                    </div>
                    <div className="ftr2-lft">
                        <p><FontAwesomeIcon icon={faCopyright} /> 2020 CraftChamp. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="div-ftr3"></div>
            </div>
        )
    }
}