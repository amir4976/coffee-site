import React from 'react'
import style from '@/styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={`container-fluid p-0 ${style.nav_bar}`}>
        <nav className={`${style.navbar} ${style.navbar_expand_lg} bg-none navbar-dark py-3`}>
            <a href="index.html" className={`${style.navbar_brand} px-lg-4 m-0`}>
                <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
            </a>
            <button type="button" className={style.navbar_toggler} data-toggle="collapse" data-target="#navbarCollapse">
                <span className={style.navbar_toggler_icon}></span>
            </button>
            <div className={`collapse ${style.navbar_collapse} justify-content-between`} id="navbarCollapse">
                <div className={`${style.navbar_nav} ml-auto p-4`}>
                    <a href="index.html" className={`${style.nav_link} nav-item active`}>Home</a>
                    <a href="about.html" className={`${style.nav_link} nav-item active`}>About</a>
                    <a href="service.html" className={`${style.nav_link} nav-item ${style.active_nav_link}`}>Service</a>
                    <a href="menu.html" className={`${style.nav_link} nav-item active`}>Menu</a>
                    <div className={`nav-item ${style.dropdown}`}>
                        <a href="#" className={`${style.nav_link} ${style.dropdown_toggle}`} data-toggle="dropdown">Pages</a>
                        <div className={`${style.dropdown_menu} text-capitalize`}>
                            <a href="reservation.html" className={style.dropdown_item}>Reservation</a>
                            <a href="testimonial.html" className={style.dropdown_item}>Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" className={`${style.nav_link} nav-item active`}>Contact</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
