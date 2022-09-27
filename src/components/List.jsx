import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../app/store';
import { deleteEmployee } from '../features/employeeSlice';
import Modal from './Modal';
import SearchBar from 'search-bar-react'



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

            <div className='mt-[50px] m-[50px]'>

                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Employee Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        Company Name
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        Email
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <div className="flex items-center">
                                        State
                                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="py-3 px-6">

                                    <SearchBar
                                        onChange={(text) => setSearch(text)}
                                        onFocus={() => console.log('focused')}
                                        size='small'
                                        width='100%'
                                        autoFocus
                                        placeholder='Search...'
                                        onClear={() => setSearch('')}
                                        value={search}
                                    />
                                    <span className="sr-only">Edit</span>
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
        </>

    )
}

export default List