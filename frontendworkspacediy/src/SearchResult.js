import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResult extends React.Component {
    render() {
        return(
            <div className="sub-ctg">
                <br />
                <div className="sub2-ctg">
                    <img src={this.props.srch.img_url} alt="plc" />
                    <h1>{this.props.srch.title}</h1>
                    {   localStorage.token ?
                        <span className="sub2-csp" onClick={() => this.props.onAddGuide(this.props.srch)}><Link to="/guide" style={{ color: 'inherit', textDecoration: 'none' }}>Select</Link></span>
                        :
                        <span className="sub2-csp"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Log In</Link></span>
                    }
                </div>
                <br />
            </div>
        )
    }
}