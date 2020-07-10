import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listProduct: [
                { id: 1, name: "IphoneX", price: 10000 },
                { id: 2, name: "Samsung", price: 20000 },
                { id: 3, name: "Nokia", price: 30000 },
                { id: 4, name: "HTC", price: 40000 }
            ]
        }
    }

    render() {
        return (
            <div>
                <h3 className="title">ListKeys</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }

    // Trong REACT khi duyệt mảng phải có key

    renderTable = () => {
        // bóc tách
        const { listProduct } = this.state;

        return listProduct.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        })
    }
}
