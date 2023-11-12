import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/header/Header'
import Testimonial from '@/components/templates/Index/Testimonial'
import React from 'react'

function testimonial({resComments}) {
  return (
    <div>
      <Header/>
      <Testimonial comments={resComments}/>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {

  const FetchDataComments= await fetch('http://localhost:3000/comment')
  const resComments = await FetchDataComments.json()


    return{
      props:{resComments},
      revalidate: 12,
    }
}


export default testimonial
