import React from 'react';
import HomeFirst from './HomeFirst'
import HomeSecond from './HomeSecond';

export default class Home extends React.Component {
    render() {
        return(
            <div className="div-hme">
                <HomeFirst />
                <HomeSecond />
            </div>
        )
    }
}