import React, { Component } from 'react'
import styled from "./Product.module.css"
// import icon from "../icon/icons8-basket-48.png"
export default class Product extends Component {

  clickHandler(id){
    this.props.func(id)
  }
  render() {
    const {title,price,image,id}=this.props
    return (
      <>
        <div className={styled.container}>
            <div className={styled.img}> 
                 <img src={image} alt="" /> 
            </div>
            <span className={styled.name}>{title.slice(0,15)}</span>
            {/* <span className={styled.price}>{price} $</span> */}
            <button id={id} className={styled.btn} onClick={this.clickHandler.bind(this,id)}>
                {/* <img src={icon} alt="" /> */}
                <span>Add to card</span>
            </button>
        </div>
      </>
    )
  }
}