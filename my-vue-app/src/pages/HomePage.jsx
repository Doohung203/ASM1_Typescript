import React from "react";
import { Link } from "react-router-dom"

const HomePage = ({ products }) => {
    return (
        <div>
            <h1>Home Page</h1>
            {products.map((item, index) => {
                return(
                    <div key={index + 1}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link to={`/detail/${item.id}`}><button>Details Product</button></Link>
                    </div>
                )
            })}
        </div>
    )
}
export default HomePage