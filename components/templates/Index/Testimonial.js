import TestimonialItem from '@/components/modules/TestimonialItem/TestimonialItem'
import React from 'react'

function Testimonial({comments}) {
  console.log(comments)
  return (
<div class="container-fluid py-5">
        <div class="container">
            <div class="section-title">
                <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Testimonial</h4>
                <h1 class="display-4">Our Clients Say</h1>
            </div>
            <div class="owl-carousel testimonial-carousel">
              {comments.map((comment)=>(
                <>
                    <TestimonialItem comment={comment} />
                </>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonial
