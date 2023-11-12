import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/header/Header'
import Menu from '@/components/templates/Index/Menu'
import React from 'react'

function menu({resMenu}) {
  return (
    <div>
      <Header/>
      <Menu menu = {resMenu}/>
      <Footer/>
    </div>
  )
}
export async function getStaticProps() {
  const FetchDataMenu = await fetch('http://localhost:3000/menu')
  const resMenu = await FetchDataMenu.json()


    return{
      props:{resMenu},
      revalidate: 12,
    }
}

export default menu
