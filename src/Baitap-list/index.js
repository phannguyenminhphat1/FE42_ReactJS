import React, { Component } from 'react';
import data from './data.json';

export default class BaitapList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listMovie: data
        }
    }
    renderHTML = () => {
        const { listMovie } = this.state;
        return listMovie.map((phim) => {
            return (
                <div className="col-sm-4" key={phim.maPhim}>
                    <div className="card">
                        <img src={phim.hinhAnh} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{phim.tenPhim}</h5>
                            <p className="card-text">
                                {phim.moTa}
                            </p>
                        </div>
                    </div>
                </div>

            );

        });

    };

    render() {
        return (
            <div>
                <h3 className="title">Bài tập LIST</h3>
                <div className="row">{this.renderHTML()}</div>
            </div>
        )
    }
}
