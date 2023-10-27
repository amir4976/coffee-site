import React from 'react'
import style from '@/styles/Navbar.module.css'
function Navbar() {
  return (
    <div class={`container-fluid p-0 ${style.nav_bar}`}>
        <nav class={`${style.navbar} ${style.navbar_expand_lg} bg-none navbar-dark py-3`}>
            <a href="index.html" class={`${style.navbar_brand} px-lg-4 m-0`}>
                <h1 class="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
            </a>
            <button type="button" class={style.navbar_toggler} data-toggle="collapse" data-target="#navbarCollapse">
                <span class={style.navbar_toggler_icon}></span>
            </button>
            <div class={`collapse ${style.navbar_collapse} justify-content-between`} id="navbarCollapse">
                <div class={`${style.navbar_nav} ml-auto p-4`}>
                    <a href="index.html" class={`${style.nav_link} nav-item active`}>Home</a>
                    <a href="about.html" class={`${style.nav_link} nav-item active`}>About</a>
                    <a href="service.html" class={`${style.nav_link} nav-item ${style.active_nav_link}`}>Service</a>
                    <a href="menu.html" class={`${style.nav_link} nav-item active`}>Menu</a>
                    <div class={`nav-item ${style.dropdown}`}>
                        <a href="#" class={`${style.nav_link} ${style.dropdown_toggle}`} data-toggle="dropdown">Pages</a>
                        <div class={`${style.dropdown_menu} text-capitalize`}>
                            <a href="reservation.html" class={style.dropdown_item}>Reservation</a>
                            <a href="testimonial.html" class={style.dropdown_item}>Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" class={`${style.nav_link} nav-item active`}>Contact</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
