import React from 'react';
import SearchResult from './SearchResult';

export default class Search extends React.Component {
    render() {
        return(
            this.props.searchArray.length > 0 
            ?
            <div className="main-ctg">
                <div className="div-ctg"></div>
                <div className="div-ctg2">
                    {this.props.searchArray.map(srch => <SearchResult srch={srch} onAddGuide={this.props.onAddGuide} />)}
                </div>
            </div>
            :
            <div className="main-ctg">
                <div className="div-ctg"></div>
                <div className="div-ctg2">
                    <p>We're sorry but we can't find out waht you were searching. Please select all the tabs to see if you can find what you are looking for. Thank you for using CraftChamp.</p>
                </div>
            </div>
        )
    }
}