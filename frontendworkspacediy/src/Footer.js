import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
// import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default class Footer extends React.Component {
    render() {
        return(
            // <div>
            <div className="main-ftr">
                <div className="div-ftr"></div>
                {/* <br /> */}
                <div className="div-ftr2">
                    {/* <h1>Footer</h1> */}
                    <div className="ftr2-col">
                        <h4>Company</h4>
                        <ul className="ftr2-ul">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Partner with Us</li>
                            <li>Advertise</li>
                        </ul>
                    </div>
                    <div className="ftr2-col2">
                        <h4>Support</h4>
                        <ul className="ftr2-ul">
                            <li>Customer Service</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className="ftr2-fa">
                        <p><FontAwesomeIcon icon={faFacebookF} /></p>
                    </div>
                    <div className="ftr2-fa2">
                        <p><FontAwesomeIcon icon={faTwitter} /></p>
                    </div>
                    <div className="ftr2-fa3">
                        <p><FontAwesomeIcon icon={faInstagram} /></p>
                    </div>
                    <div className="ftr2-fa4">
                        <p><FontAwesomeIcon icon={faYoutube} /></p>
                    </div>
                    <div className="ftr2-fa5">
                        <p><FontAwesomeIcon icon={faLinkedinIn} /></p>
                    </div>
                    <div className="ftr2-hr">
                        <hr />
                    </div>
                    <div className="ftr2-rft">
                        <p>Privacy Policy Terms of Use Ad Choices</p>
                    </div>
                    <div className="ftr2-lft">
                        <p><FontAwesomeIcon icon={faCopyright} /> 2020 CraftChamp. All Rights Reserved.</p>
                    </div>
                </div>
                {/* <div className="ftr2-lft"> */}
                    {/* <p><FontAwesomeIcon icon={faCopyright} /> 2020 CraftChamp. All Rights Reserved.</p> */}
                    {/* <p><FontAwesomeIcon icon={faCopyright} /> 2020 CraftChamp. All Rights Reserved.</p> */}
                    {/* <h4><FontAwesomeIcon icon={faCopyright} /> 2020 CraftChamp. All Rights Reserved.</h4> */}
                {/* </div> */}
                {/* <br /> */}
                <div className="div-ftr3"></div>
                {/* <br /> */}
            </div>
            // <br />
            // </div>
        )
    }
}