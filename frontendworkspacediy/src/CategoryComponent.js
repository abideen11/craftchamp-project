import React from 'react';
import CategoryComponentCard from './CategoryComponentCard';

export default class CategoryComponent extends React.Component {
    render() {
        return(
            this.props.guideCategory.length > 0 ?
            <div className="main-ctg">
                <div className="div-ctg"></div>
                <div className="div-ctg2" style={{display: 'flex'}}>
                    {this.props.guideCategory.map(c => <CategoryComponentCard c={c} onAddGuide={this.props.onAddGuide} />)}
                </div>
                <div className="div-ctg3"></div>
            </div>
            :
            <div className="main-ctg">
                <div className="div-ctg"></div>
                <div className="div-actg">
                    <h1>Please Check Back Later After This Page Has Been Updated</h1>
                </div>
                <div className="div-ctg3"></div>
            </div>
        )
    }
}
