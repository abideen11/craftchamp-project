import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
    render() {
        return(
            <div className="div-hd">
                <span className="sp-hd1"></span>
                <img className="img-logo" src="https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg" alt="plc" />
                {/* <p className="hd-p">Right</p> */}
                {/* <h1>Right</h1> */}
                <span className="sp-hd3">Arts & Crafts</span>
                <span className="sp-hd4">Automotive</span>
                <span className="sp-hd5">Beauty</span>
                <span className="sp-hd6">Carpentry</span>
                <div className="sub3-hd">
                    <span className="ssp3-hd">More <FontAwesomeIcon icon={faCaretDown} /></span>
                    <div className="sb23-hd">
                        <ul className="ul3-hd">
                            <li>Cleaning Products</li>
                            <li>Electronics</li>
                            <li>Grooming</li>
                            <li>Hygenic Products</li>
                        </ul>
                    </div>
                </div>
                <div className="div-src">
                    <input className="inp-src" type="text" placeholder="Search" />
                    <span className="img-src"><FontAwesomeIcon icon={faSearch} /></span>
                </div>
                <div className="sub2-hd">
                    <span className="ssp2-hd"><FontAwesomeIcon icon={faUserCircle} /> Account</span>
                    <div className="sb22-hd">
                        <ul className="ul2-hd">
                            <li>Log In</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}