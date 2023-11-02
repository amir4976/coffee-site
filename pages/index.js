import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/components/templates/Index/Slider'
import About from '@/components/templates/Index/About'
import Services from '@/components/templates/Index/Services'
import Offer from '@/components/templates/Index/Offer'
import Menu from '@/components/templates/Index/Menu'
export default function Home() {
  return (
   <>
  <Slider/>
  <About/>
  <Services/> 
  <Offer/>
  <Menu/>
   </>
  )
}
