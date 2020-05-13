import React from 'react';
import { Link } from 'react-router-dom';

export default class CategoryComponentCard extends React.Component {
    render() {
        console.log(this.props.onAddGuide)
        console.log(this.props.c)
        return(
            <div className="sub-ctg">
                <br />
                <div className="sub2-ctg">
                    <img src={this.props.c.img_url} alt="plc" />
                    <h1>{this.props.c.title}</h1>
                    <span className="sub2-csp" onClick={() => this.props.onAddGuide(this.props.c)}><Link to="/guide">Select</Link></span>
                </div>
                <br />
            </div>
        )
    }
}