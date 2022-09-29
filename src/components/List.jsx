import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../app/store';
import { deleteEmployee } from '../features/employeeSlice';
import Modal from './Modal';
import SearchBar from 'search-bar-react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';
// import Link from '@mui/material';
import SubdirectoryArrowLeftRoundedIcon from '@mui/icons-material/SubdirectoryArrowLeftRounded';



function List() {

    const [open, setOpen] = useState(false)
    const [viewId, setId] = useState()
    const [modaldata, setData] = useState()
    const [search, setSearch] = useState("")

    const dispatch = useDispatch();

    const data = useSelector(store => store.employees);
    console.log("redux from list", data)



    const handleRemoveUser = (id) => {
        dispatch(deleteEmployee({ id }));
    }

    const handleModal = (id) => {
        setId(id)

        setOpen(true)

    }

    React.useEffect(() => {
        const existingEmployee = data.filter(datas => datas.id == viewId)
        console.log("redux", existingEmployee)
        setData(existingEmployee)
    }, [viewId])





    return (

        <>

            <div className='h-[10vh] bg-[#F3F6FC] flex justify-between overflow-hidden '>
                <div className="mt-[23px] ml-[21px]">
                    <Breadcrumbs aria-label="breadcrumb">
                        <a color="inherit" href="/">
                            Home
                        </a>

                        <a
                            color="inherit"
                            href="/dashboard"
                        >
                            Dashboard
                        </a>

                        <h1 className="text-[#0D58C1] font-semibold">Employee List</h1>
                    </Breadcrumbs>
                </div>


                <div className="mt-[15px] mr-[15px] flex justify-evenly ">

                    <form class="flex items-center mr-[20px] ">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-[#0d58c141] dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" class="bg-white shadow-sm border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#0d58c141] 0" placeholder="Search" required onChange={(e) => setSearch(e.target.value)} />
                        </div>

                    </form>

                    <div className='flex mt-[13px]'>



                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-[#0D58C1] rounded-[25px] p-[3px] text-white mr-[8px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>



                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-[#1DD3B0] rounded-[25px] p-[3px] text-white mr-[8px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-[#F25C54] rounded-[25px] p-[3px] text-white mr-[8px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>


                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-[#028747] rounded-[25px] p-[3px] text-white mr-[8px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>



                    </div>
                </div>
            </div>

            <div className='h-[10vh] w-full bg-[#F3F6FC]'></div>


            <div className=' h-screen w-full bg-[#F3F6FC] '>

                <div className='z-0 ml-[35px] mr-[35px]'>

                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-[#F3F6FC] dark:bg-gray-800 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Employee Name
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[10px] w-4 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                            </svg>
                                        </div>

                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Company Name
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[10px] w-4 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                            </svg>

                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Email
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[10px] w-4 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            State
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[10px] w-4 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex items-center">
                                            Action
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-[10px] w-4 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                            </svg>
                                        </div>

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {data
                                    .filter((datas) => {
                                        if (search == "") {
                                            return datas;
                                        } else if (
                                            datas.emp_name.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return datas;
                                        }
                                    })
                                    .map((datas) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" key={datas.id}>
                                                    {datas.emp_name}
                                                </th>
                                                <td className="py-4 px-6">
                                                    {datas.company_name}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {datas.email}
                                                </td>
                                                <td className="py-4 px-6">
                                                    {datas.state}
                                                </td>
                                                <td className="py-4 px-6 text-right">



                                                    <a onClick={() => handleModal(datas.id)} href="#" className="font-medium mr-[20px] text-green-600 dark:text-blue-500 hover:underline">View</a>

                                                    {viewId && modaldata &&
                                                        <Modal open={open} setOpen={setOpen} Mdata={modaldata}></Modal>

                                                    }

                                                    <Link to={`/edit/${datas.id}`}>
                                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </Link>


                                                    <a onClick={() => handleRemoveUser(datas.id)} href="#" className=" ml-[20px] font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</a>


                                                </td>
                                            </tr>
                                        );
                                    })}




                            </tbody>
                        </table>
                    </div>



                </div>

            </div>


        </>

    )
}

export default List