import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handleOnclick = () => {
        console.log(123);
    }
    handleParamsOnclick = (name,tuoi) => {
        console.log("Hello " + name, "Tuổi: "+ tuoi);
    }


    render() {
        return (
            <div>
                <h1 className="title"> ** HandlingEvent</h1>
                <button className="btn btn-success" onClick={this.handleOnclick()}>HandlingEvent</button>
                <br />
                <button className="btn btn-info" onClick={()=>{this.handleParamsOnclick(" ASDASDASD","18")}}>HandlingEvent Params</button>
            </div>
        )
    }
}
