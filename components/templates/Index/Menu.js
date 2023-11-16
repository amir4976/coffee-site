import React from 'react'
import MenuItem from '@/components/modules/menuItem/MenuItem'
function Menu({menu}) {
    console.log(menu)
  return (
    <div>
      <div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Menu & Pricing</h4>
                <h1 class="display-4">Competitive Pricing</h1>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5">Hot Coffee</h1>
                {menu.filter(item=>item.type =='HOT').map(item=>(
                    <MenuItem key={item.id} img={item.img} desc={item.desc} title={item.title}  price={item.price} />
                ))}


                </div>

                <div class="col-lg-6">
                <h1 class="mb-5">cold Coffee</h1>

                {menu.filter(item=>item.type == "COLD").map(item=>(
                    <MenuItem key={item.id} img={item.img} desc={item.desc} title={item.title}  price={item.price} />
                ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Menu
