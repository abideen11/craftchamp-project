import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    onLogOut = () => {
        localStorage.clear()
    }
    render() {
        return(
            <div className="div-hd">
                <span className="sp-hd1"></span>
                <Link to="/"><img className="img-logo" src="https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg" alt="plc" /></Link>
                <span className="sp-hd3" onClick={() => this.props.onGuideCategory("Arts & Crafts")}><Link to="/artscrafts" style={{ color: 'inherit', textDecoration: 'none' }}>Arts & Crafts</Link></span>
                <span className="sp-hd4" onClick={() => this.props.onGuideCategory("Automotive")}><Link to="/automotive" style={{ color: 'inherit', textDecoration: 'none' }}>Automotive</Link></span>
                <span className="sp-hd5" onClick={() => this.props.onGuideCategory("Beauty")}><Link to="/beauty" style={{ color: 'inherit', textDecoration: 'none' }}>Beauty</Link></span>
                <span className="sp-hd6" onClick={() => this.props.onGuideCategory("Carpentry")}><Link to="/carpentry" style={{ color: 'inherit', textDecoration: 'none' }}>Carpentry</Link></span>
                <div className="sub3-hd">
                    <span className="ssp3-hd">More <FontAwesomeIcon icon={faCaretDown} /></span>
                    <div className="sb23-hd">
                        <ul className="ul3-hd">
                            <li onClick={() => this.props.onGuideCategory("Cleaning Products")}><Link to="/cleaningproducts" style={{ color: 'inherit', textDecoration: 'none' }}>Cleaning Products</Link></li>
                            <li onClick={() => this.props.onGuideCategory("Electronics")}><Link to="/electronics" style={{ color: 'inherit', textDecoration: 'none' }}>Electronics</Link></li>
                            <li onClick={() => this.props.onGuideCategory("Grooming")}><Link to="/grooming" style={{ color: 'inherit', textDecoration: 'none' }}>Grooming</Link></li>
                            <li onClick={() => this.props.onGuideCategory("Hygiene Products")}><Link to="/hygieneproducts" style={{ color: 'inherit', textDecoration: 'none' }}>Hygiene Products</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="div-src">
                    <input className="inp-src" type="text" value={this.props.value} onChange={(e) => this.props.onSearch(e.target.value)} placeholder="Search" />
                    <span className="img-src"><Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link></span>
                </div>
                <div className="sub2-hd">
                    <span className="ssp2-hd"><FontAwesomeIcon icon={faUserCircle} /> Account</span>
                    <div className="sb22-hd">
                        <ul className="ul2-hd">
                            {   localStorage.token ?
                                <li onClick={this.onLogOut}><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Log Out</Link></li>
                                :
                                <li><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></li>
                            }
                            <li><Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

