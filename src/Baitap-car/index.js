import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }

    // changeColor = (url) => {
    //     this.setState({
    //         img: url
    //     })
    // }

    changeColor = (color) => {
        let img = "";
        switch (color) {
            case "red":
                img = "./img/imgRedCar.jpg";
                break;
            case "silver":
                img = "./img/imgSilverCar.jpg";
                break;
            default:
                img ="./img/imgBlackCar.jpg";
                break;
        }
        this.setState({
            img,
        })
    }



    render() {
        return (
            <div>
                <h1 className="title">Bài tập CAR</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid" src={this.state.img} />
                        </div>
                        <div className="col-sm-6">
                            {/* <button className="btn btn-danger m-2" onClick={() => { this.changeColor("./img/imgRedCar.jpg") }}>Red</button>
                            <button className="btn btn-light m-2" onClick={() => { this.changeColor("./img/imgSilverCar.jpg") }}>Silver</button>
                            <button className="btn btn-dark m-2" onClick={() => { this.changeColor("./img/imgBlackCar.jpg") }}>Black</button> */}

                            <button className="btn btn-danger m-2" onClick={() => { this.changeColor("red") }}>Red</button>
                            <button className="btn btn-light m-2" onClick={() => { this.changeColor("silver") }}>Silver</button>
                            <button className="btn btn-dark m-2" onClick={() => { this.changeColor("black") }}>Black</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
