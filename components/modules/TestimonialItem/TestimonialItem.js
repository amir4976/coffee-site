import React from 'react'
import Image from 'next/image'
function TestimonialItem({comment}) {

  return (
    <div>
      <div class="testimonial-item">
                    <div class="d-flex align-items-center mb-3 relative ">
                        <Image class="img-fluid" width={100} height={100} src={comment.img} alt=""/>
                        <div class="ml-3">
                            <h4>{comment.username}</h4>
                            <i>Profession: {comment.profession} </i>
                        </div>
                    </div>
                    <p class="m-0">{comment.body}</p>
                </div>
    </div>
  )
}

export default TestimonialItem
