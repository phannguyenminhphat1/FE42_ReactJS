import React, { Component } from 'react'

export default class RenderingElement extends Component {
    username = "CYBERSOFT";
    lop = "FE42";

    // cách 2
    renderInfo = () => {
        return <p>Username: {this.username} - Lop:{this.lop}</p>

    }


    // cách 1:
    render() {
        return (
            <div>
                <h1 className="title">RenderingElement</h1>
                {/* <p>Username: {this.username}</p>
                <p>Class: {this.lop}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}
