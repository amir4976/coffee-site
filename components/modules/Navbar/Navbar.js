import React from "react";
import { useRouter } from "next/router";
import style from "@/styles/Navbar.module.css";
import Link from "next/link";
function Navbar() {
  const [searchInput, setSearchInput] = React.useState("");
  const router = useRouter();
const searchHandler = (e) => {
    if(e.keyCode === 13) {
        searchInput.trim() ? router.push(`/search?q=${searchInput}`) : router.push("/");
     }
}

  return (
    <div className={`container-fluid sticky top-0 p-0 ${style.nav_bar}`}>
      <nav
        className={`${style.navbar} ${style.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${style.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>
        <input
          type="search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className={style.search_input}
          placeholder="search"
          onKeyDown={searchHandler}
        />
        <button
          type="button"
          className={style.navbar_toggler}
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className={style.navbar_toggler_icon}></span>
        </button>
        <div
          className={`collapse ${style.navbar_collapse} justify-content-between`}
          id="navbarCollapse"
        >
          <div className={`${style.navbar_nav} ml-auto p-4`}>
            <Link href="/" className={`${style.nav_link} nav-item active`}>
              Home
            </Link>
            <Link href="/about" className={`${style.nav_link} nav-item active`}>
              About
            </Link>
            <Link
              href="/services"
              className={`${style.nav_link} nav-item ${style.active_nav_link}`}
            >
              Service
            </Link>
            <Link href="/menu" className={`${style.nav_link} nav-item active`}>
              Menu
            </Link>
            <div className={`nav-item ${style.dropdown}`}>
              <a
                href="#"
                className={`${style.nav_link} ${style.dropdown_toggle}`}
                data-toggle="dropdown"
              >
                Pages
              </a>
              <div className={`${style.dropdown_menu} text-capitalize`}>
                <Link href="/reservation" className={style.dropdown_item}>
                  Reservation
                </Link>
                <Link href="/testimonial" className={style.dropdown_item}>
                  Testimonial
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className={`${style.nav_link} nav-item active`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
