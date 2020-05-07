import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faHammer, faCalculator, faCogs, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default class HomeSecond extends React.Component {
    render() {
        return(
            <div className="main-hsc">
                <div className="div-hsc"></div>
                <div className="div-hsc2">
                    <div className="sub-hsc2">
                        <div className="sub2-hsc2">
                            <div className="sub3-hsc2">
                                <p><FontAwesomeIcon icon={faTools} /></p>
                            </div>
                        </div>
                        <div className="sub2-hsc2">
                            <div className="sub3-hsc2">
                                <p><FontAwesomeIcon icon={faHammer} /></p>
                            </div>
                        </div>
                        <div className="sub2-hsc2">
                            <div className="sub3-hsc2">
                                <p><FontAwesomeIcon icon={faLaptop} /></p>
                            </div>
                        </div>
                        <div className="sub2-hsc2">
                            <div className="sub3-hsc2">
                                <p><FontAwesomeIcon icon={faCalculator} /></p>
                            </div>
                        </div>
                        <div className="sub2-hsc2">
                            <div className="sub3-hsc2">
                                <p><FontAwesomeIcon icon={faCogs} /></p>
                            </div>
                        </div>
                    </div>
                    <div className="sub-hsc22">
                        <h1>DIYers Wanted</h1>
                        <br />
                        <p>No matter what the project entails. Please let CraftChamp be
                            a guide or inspiration. Everybody was terrible when they first 
                            started using a skill. They got better due to repitition, persistence
                            and penchant to learn. Wanting to help people build or fix things no 
                            matter what their skill level is why CraftChamp exists.
                            Want to doll up for that special occasion without breaking the bank? 
                            If so, please look at the "How to Apply Makeup" tutorial under the "Beauty" 
                            section. Your partner's been nagging you about fixing that thing for over a 
                            month. Please check out the guides available to help you fix it or for any project. 
                        </p>
                    </div>
                </div>
                <div className="div-hsc3"></div>
            </div>
        )
    }
}