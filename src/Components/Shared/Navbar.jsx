import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navlist } from "../lib/dv";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MobileMenu } from './MobileMenu';


 const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const handle = () => {
    setToggle(!toggle)
  };

  useEffect(() => {
    const bodyClass = document.body.classList;
    toggle ? bodyClass.add("no-scroll") : bodyClass.remove('no-scroll')
  }, [toggle]);


  return (
    <div>
      <nav>
        <div className="flex justify-around items-center bg-whiteLight text-lightText py-2 border border-b-black ">
          {/* left side */}
          <div>
            <Link>
              <img src="/img/searchbaricon.png" alt="Image-icon" />
            </Link>
          </div>

          {/* nav-list */}
          <div>
            <ul className="md:flex hidden  justify-center items-center lightText gap-3 ">
              {Navlist.map(({ label, to }, i) => (
                <li key={i}>
                  <NavLink
                    to={to}
                    onClick={handle}
                    className="font-oneset text-[14px] text-graybold"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*right side */}
          <div className="flex justify-center items-center gap-1">
            <div>
              <button className="md:hidden inline-block text-black p-2 text-[28px]" onClick={handle}>
                {toggle ? <IoCloseOutline /> : <AiOutlineMenuUnfold />}
              </button>
            </div>
            <div>
              <img src="/img/notificationicon.png" alt="" />
            </div>
            <div>
              <img src="/img/usmanzafar.png" alt="" />
            </div>
            <div className="md:flex flex-col hidden">
              <h4>Usman Zafar</h4>
              <p>usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu toggle={toggle} handle={handle} />
    </div>
  );
};

export default Navbar