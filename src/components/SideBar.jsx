import React,{ useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/list';


function SideBar({ setActiveMenu, activeMenu }) {

    const [screenSize, setScreenSize] = useState(undefined);

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
          setActiveMenu(false);
        }
      };
    
      const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-[#0D2F60]';
      const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                   
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                
                                {item.links.map((link) => (
                                    <NavLink
                                        to={`/${link.route}`}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        // style={({ isActive }) => ({
                                        //     backgroundColor: isActive ? currentColor : '',
                                        // })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default SideBar