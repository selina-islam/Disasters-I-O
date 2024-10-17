import { Navlist } from '../lib/dv'
import {NavLink} from 'react-router-dom'
import { cn } from '../lib/utils/cn'

export const MobileMenu = ({ toggle, handle }) => {
        return (
                <div>
                        <div className={cn("absolute md:hidden top-14 left-0 w-full bg-white h-screen flex flex-col  pt-4  font-semibold text-2xl z-[999999] transform transition-all duration-300", toggle ? "opacity-100" : "opacity-0")} style={{ transition: 'transform 0.3 ease, opacity 0.3 ease' }}>
                                <ul className='ms-5'>
                                        {Navlist.map(({ label, to }, i) => (
                                          

                                                <li key={i}>
                                                        <NavLink to={to} onClick={handle}
                                                                className='font-oneset text-[14px] text-graybold'>
                                                                {label}</NavLink>
                                                </li>
                                        )
                                      
                                          
                                        )}
                                </ul>
                        </div>
                </div>
        );
};
