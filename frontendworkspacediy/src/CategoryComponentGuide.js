import React from 'react';

export default class CategoryComponentGuide extends React.Component {
    render() {
        console.log(this.props.addGuide)
        return(
            <div className="main-cgd">
                <div className="div-cgd"></div>
                <div className="div-cgd2">
                    <h1 className="cgd-h1">{this.props.addGuide.title}</h1>
                    <img className="cgd-img" src={this.props.addGuide.imgUrl} alt="plc" />
                    <h2 className="cgd-h2">Materials</h2>
                    {this.props.addGuide.materials.map((i) => 
                        <ul className="i-mte">
                            <li>{i}</li>
                        </ul>
                    )}
                    <br />
                    <h2 className="cgd-h22">Instructions</h2>
                    {this.props.addGuide.instructions.map((i) => 
                        <div className="i-txt">{i.order}
                            <p className="i2-txt">{i.text}</p> 
                        </div>
                    )}
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}