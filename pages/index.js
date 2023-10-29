import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from '@/components/templates/Index/Slider'
import About from '@/components/templates/Index/About'

export default function Home() {
  return (
   <>
  <Slider/>
  <About/>
   </>
  )
}
