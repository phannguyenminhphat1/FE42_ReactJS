import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,

            username: "PPPPP"
        }
    }

    clickButton = () => {
        // không cho phép làm trực tiếp như v
        // this.state.isLogin = true;
        this.setState({
            isLogin: true
        })
        
    }





    renderHTML = () => {
        return this.state.isLogin ? (<p>Hello {this.state.username}</p>) : (<button className="btn btn-success" onClick={this.clickButton}>Login</button>);

    }


    render() {
        // console.log("render");
        return (
            <div>
                <h2 className="title">State</h2>
                {this.renderHTML()}
            </div>
        )
    }

    // Khi nào render chạy lại: KHI state thay đổi
}
