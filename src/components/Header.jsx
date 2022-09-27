import React from 'react'
import it from '../it.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>



            <div className='sticky top-[0%]'> 
                <nav class="bg-white dark:bg-gray-800  w-full shadow  ">
                    <div class="max-w-7xl mx-auto px-8">
                        <div class="flex items-center justify-between h-16">
                            <div class="w-full justify-between flex items-center"
                            >
                                <Link to="/">
                                    <a class="flex-shrink-0" >
                                        <img class="h-8 w-[110px]" src={it} alt="Workflow" />
                                    </a>
                                </Link>

                                <div class=" md:block">
                                    <div class="ml-10 flex items-baseline space-x-4">

                                        <Link to="/">
                                            <a class="text-gray-800  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                                Home
                                            </a>
                                        </Link>


                                        <Link to={`/list`}>
                                            <a class="text-gray-800 dark:text-white  hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                                List Employees
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


        </>
    )
}

export default Header