import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Header(props) {
  const router = useRouter()


  // every time the page is loaded it search if title was equal to the location show the page title
  const [TitlePage,setTitlePage] = useState()

  useEffect(()=>{
    switch (router.pathname) {
      case "/about":
        setTitlePage('About Us')
        break;
      case "/services":
        setTitlePage('Services')
        break;
      case "/menu":
        setTitlePage('Menu')
        break;
      case "/reservation":
        setTitlePage('Reservation')
        break;
      case "/testimonial":
        setTitlePage('Testimonial')
        break;
      case "/contact":
        setTitlePage('Contact')
        break;
      case "/search":
        setTitlePage('search')
        break;



      default:
        break;
    }


     
    

  },[])

  return (
    <div>
       <div class="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: "400px"}}>
            <h1 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{TitlePage}</h1>
            <div class="d-inline-flex mb-lg-5">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">{TitlePage}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
