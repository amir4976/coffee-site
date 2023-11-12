import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/components/templates/Index/Slider'
import About from '@/components/templates/Index/About'
import Services from '@/components/templates/Index/Services'
import Offer from '@/components/templates/Index/Offer'
import Menu from '@/components/templates/Index/Menu'
import Reservation from '@/components/templates/index/Reservation'
import Testimonial from '@/components/templates/index/Testimonial'
export default function Home(props) {
  console.log(props.res)
  return (
   <>
  <Slider/>
  <About/>
  <Services services={props.resService}/> 
  <Offer/>
  <Menu menu={props.resMenu}/>
  <Reservation/>
  <Testimonial comments={props.resComments}/>
   </>
  )
}

export async function getStaticProps() {
  const FetchDataService = await fetch('http://localhost:3000/services')
  const resService = await FetchDataService.json()

  const FetchDataMenu= await fetch('http://localhost:3000/menu')
  const resMenu = await FetchDataMenu.json()

  const FetchDataComments= await fetch('http://localhost:3000/comment')
  const resComments = await FetchDataComments.json()


    return{
      props:{resService,resMenu,resComments},
      revalidate: 12,
    }
}
