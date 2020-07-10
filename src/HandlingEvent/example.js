import React, { Component } from 'react'

export default class ExampleHandingEvent extends Component {
    isLogin = false;

    username = "PPPPP";


    renderHTML = () => {
        // if (this.isLogin) {
        //     return <p>Hello {this.username}</p>

        // } else {
        //     return <button className="btn btn-success">Login</button>
        // }

        //toán tử 3 ngôi:


        return this.isLogin ? (<p>Hello {this.username}</p>) : (<button className="btn btn-success" onClick={this.clickButton}>Login</button>);

    }
    clickButton = () => {
        this.isLogin = true;
        // console.log(this.isLogin);
    }

    render() {
        // console.log("render");
        return (
            <div>
                <h3 className="title">* ExampleHandingEvent</h3>
                <p>{this.renderHTML()}</p>
            </div>
        )
    }
}
