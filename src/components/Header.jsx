import React, { useState } from 'react'
import it from '../it.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';


const Header = ({activeMenu,setActiveMenu}) => {



    return (
        <>



            <div className='sticky top-[0%] z-[99999]'>
                <nav class="bg-[#F8F9FA] dark:bg-gray-800  w-full shadow  ">
                    <div class=" mx-auto px-8">
                        <div class="flex items-center justify-between h-16">
                            <div class="w-full justify-between flex items-center"
                            >
                                <div className='flex '>
                                    <Link to="/">
                                        <a class=" " >
                                            <img class=" w-[150px]" src={it} alt="Workflow" />
                                        </a>
                                    </Link>


                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-[25px] mt-[3px] cursor-pointer " onClick={() => setActiveMenu(!activeMenu)}
                                    // style={{ color: currentColor }}
                                    >
                                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                                    </svg>


                                </div>


                                <div class=" md:block">
                                    <div class="ml-10 flex items-baseline space-x-4">


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#0D2F60]">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>



                                        {/* <Link to="/">
                                            <a class="text-gray-800  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Home
                                            </a>
                                        </Link>


                                        <Link to={`/list`}>
                                            <a class="text-gray-800 dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                                List Employees
                                            </a>
                                        </Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* sidebar */}

            {activeMenu ? (
                <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-[#F3F6FC] z-[999999]  ">
                    <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
                </div>
            ) : (
                <div className="w-0 absolute ">
                    <SideBar />
                </div>
            )
            }

        </>
    )
}

export default Header