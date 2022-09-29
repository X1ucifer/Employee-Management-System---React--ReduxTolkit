import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addEmployees } from '../features/employeeSlice';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import SubdirectoryArrowLeftRoundedIcon from '@mui/icons-material/SubdirectoryArrowLeftRounded';


function EmpForm() {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [preview, setPreview] = useState("")
    const [values, setValues] = useState({
        emp_name: "",
        company_name: "",
        email: "",
        address: "",
        cv: "",
        number: "",
        state: "",
        country: "India"
    });

    console.log("cv", values.country)

    useEffect(() => {
        if (values.cv) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(values.cv);
        } else {
            setPreview(null);
        }
    }, [values.cv])


    function AddEmployee(e) {
        e.preventDefault();

        dispatch(addEmployees({
            id: uuidv4(),
            preview: preview,
            emp_name: values.emp_name,
            company_name: values.company_name,
            email: values.email,
            address: values.address,
            cv: values.cv,
            number: values.number,
            state: values.state,
            country: values.country
        }))
        console.log(values);
        navigate("/list");
    }

    const MakeCancel = () => {
        setValues({
            emp_name: "",
            company_name: "",
            email: "",
            address: "",
            cv: "",
            number: "",
            state: "",
            country: ""
        })
    }

    const location = useLocation();


    console.log('pathname', location.pathname);

    return (
        <>

            <div className=' h-[10vh] bg-white shadow-md flex justify-between overflow-hidden'>

                {location.pathname === "/" ? (
                    <div className="mt-[19px] ml-[21px]">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>

                            {/* <h1 className="text-[#0D58C1] font-semibold">Add Employee</h1> */}
                        </Breadcrumbs>
                    </div>
                ) : (
                    <div className="mt-[19px] ml-[21px]">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>

                            <h1 className="text-[#0D58C1] font-semibold">Add Employee</h1>
                        </Breadcrumbs>
                    </div>
                )

                }


                <div className="mt-[19px] mr-[15px] ">
                    <span className=' bg-[#577094] rounded-[26px] p-[3px] pl-[3px] pr-[3px] pb-[6px] text-white'>
                        <SubdirectoryArrowLeftRoundedIcon />

                    </span>
                </div>
            </div>

            <div className='mt-[10px]  flex justify-evenly bg-[#F3F7FC]'>


                <div className=' mt-[20px] mr-[170px]'>
                    <form className="w-full max-w-sm" onSubmit={AddEmployee}>
                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Employee Name <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-sm" id="inline-full-name" type="text" value={values.emp_name} placeholder='Enter Name' onChange={(e) => setValues({ ...values, emp_name: e.target.value })} required />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Company Name <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white shadow-sm appearance-none border-2 border-[white] rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter company name" value={values.company_name} onChange={(e) => setValues({ ...values, company_name: e.target.value })} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Email <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="Enter Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
                            </div>
                        </div>




                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Address <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <textarea className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Address" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                    Upload CV <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setValues({ ...values, cv: file })
                                    } else {
                                        setValues({ ...values, cv: null })
                                    }
                                }} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Contact Number <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter  number" value={values.number} onChange={(e) => setValues({ ...values, number: e.target.value })} />
                            </div>
                        </div>



                    </form>
                </div>

                <div >

                    <form className='mr-[15px] mt-[20px]'> 

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    State <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter State name" value={values.state} onChange={(e) => setValues({ ...values, state: e.target.value })} />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6 w-[500px]">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                    Country <span className='text-[red]'>*</span>
                                </label>
                            </div>
                            <div className="md:w-2/3">

                                <select className="bg-white shadow-sm appearance-none border-2 border-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Country name" value={values.country} onChange={(e) => setValues({ ...values, country: e.target.value })}>
                                    <option value="India">India</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="USA">USA</option>
                                </select>

                            </div>
                        </div>
                    </form>

                </div>


            </div>

            <div className="h-[10vh] bg-[#F3F6FC] mt-[1px]">
                <div className=" grid place-items-end">

                    <div className="mt-[14px] mr-[170px]">
                        <button className="shadow bg-[#0D58C1] hover:bg-[#0D2F60] focus:shadow-outline focus:outline-none text-white font-normal py-[3px] px-[35px] rounded " disabled={!values.emp_name || !values.company_name || !values.email} onClick={AddEmployee} >
                            Save
                        </button>

                        <button className="ml-[50px] shadow bg-[#0D2F60] hover:bg-[#0D58C1] focus:shadow-outline focus:outline-none text-white font-normal py-[3px] px-[35px] rounded " onClick={MakeCancel} >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>
        </>

    )
}

export default EmpForm