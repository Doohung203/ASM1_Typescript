import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
        <div>
            <Link to={`admin/product/add`}><button>Add New Product</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    products.map((item, index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                         <Link to={`/update/${item.id}`}><button>Edit</button></Link>
                                         <button>Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default ProductPage