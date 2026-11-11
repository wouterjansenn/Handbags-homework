import React from 'react'

function Product(props) {

    function productSpecialty() {
        if ((props.title === 'The stylish bag') || (props.title === 'The handy bag')) {
            return 'best seller'
        } else return 'new collection'
    }

    return (
        <article>
            <span>{productSpecialty()}</span>
            <img src={props.image} alt="bag"/>
            <p>{props.title}</p>
            <h4>{props.price}</h4>
        </article>
    )

}

export default Product