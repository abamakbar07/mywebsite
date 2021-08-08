import React from 'react'

const NavbarMenu = () => {
    let body = document.querySelector('body');

    const toggleMenu = () => {
      toggleClass(body, 'nav-active')
    }
  
    const toggleClass = (element, stringClass) => {
        if(element.classList.contains(stringClass))
            element.classList.remove(stringClass);
        else
            element.classList.add(stringClass);
    }

    return (
        <div>
            <div className="menu-icon" onClick={toggleMenu}>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
            </div>

            <div className="nav">
                <div className="nav__content">
                <ul className="nav__list">
                    <li className="nav__list-item">Home</li>
                    <li className="nav__list-item">About</li>
                    <li className="nav__list-item">Projects</li>
                    <li className="nav__list-item">Contact</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarMenu
