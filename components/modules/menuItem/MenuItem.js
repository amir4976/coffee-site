import Image from 'next/image'
import React from 'react'

function MenuItem(props) {
    
  return (
    <div class="row align-items-center mb-5">
    <div class="col-4 col-sm-3">
        
        <Image class="w-100 rounded-circle mb-3 mb-sm-0" width={100} height={100} src={props.img} alt=""/>
        
        <h5 class="menu-price">${props.price}</h5>
    </div>
    <div class="col-8 col-sm-9">
        <h4>{props.title}</h4>
        <p class="m-0">{props.desc}</p>
    </div>
</div>
  )
}

export default MenuItem
