import ServisesItem from '@/components/modules/ServicesItem/ServisesItem'
import React from 'react'

function Services() {
  return (
<div class="container-fluid pt-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Our Services</h4>
                <h1 class="display-4">Fresh & Organic Beans</h1>
            </div>
            <div class="row">

                <ServisesItem img={'service-1.jpg'} title={'Best Quality Coffee'} dis={'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'}/>
                <ServisesItem img={'service-2.jpg'} title={'Fresh Coffee Beans'} dis={'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'}/>
                <ServisesItem img={'service-3.jpg'} title={'Online Table Booking'} dis={'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'}/>
                <ServisesItem img={'service-4.jpg'} title={'Best Quality Coffee'} dis={'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'}/>
               
            </div>
        </div>
    </div>
  )
}

export default Services
