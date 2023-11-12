import React from 'react'
import Header from '@/components/modules/header/Header'
import Services from '@/components/templates/Index/Services'
import Footer from '@/components/modules/Footer/Footer'

function services({resService}) {
  return (
    <div>
        <Header/>
        <Services services={resService}/>
        <Footer/>
    </div>
  )
}
export async function getStaticProps() {
  const FetchDataService = await fetch('http://localhost:3000/services')
  const resService = await FetchDataService.json()


    return{
      props:{resService},
      revalidate: 12,
    }
}

export default services
