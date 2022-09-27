import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addEmployees } from '../features/employeeSlice';

function EmpForm() {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ preview, setPreview ] = useState("")
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

    useEffect(()=>{
        if(values.cv){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(values.cv);
        }else{
            setPreview(null);
        }
    },[values.cv])


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

    return (
        <div className='grid place-items-center  mt-[40px] '>


            <div className=' mr-[170px]'>
                <form className="w-full max-w-sm" onSubmit={AddEmployee}>
                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Employee Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={values.emp_name} placeholder='Enter Name' onChange={(e) => setValues({ ...values, emp_name: e.target.value })} required />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Company Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter company name" value={values.company_name} onChange={(e) => setValues({ ...values, company_name: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="Enter Email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
                        </div>
                    </div>




                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Address
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Address" value={values.address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Upload CV
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " type="file" accept="image/*" onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setValues({ ...values, cv: file })
                                } else {
                                    setValues({ ...values, cv: null })
                                }
                            }}  />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Contact Number
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter  number" value={values.number} onChange={(e) => setValues({ ...values, number: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                State
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter State name" value={values.state} onChange={(e) => setValues({ ...values, state: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Country
                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Country name" value={values.country}  onChange={(e) => setValues({ ...values, country: e.target.value })}>
                                <option value="India">India</option>
                                <option value="Dubai">Dubai</option>
                                <option value="USA">USA</option>
                            </select>

                        </div>
                    </div>



                    <div className="md:flex md:items-center mt-[40px] mb-[50px]">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded " type="submit" >
                                Save
                            </button>
                        </div>
                    </div>

                </form>
            </div>


        </div>
    )
}

export default EmpForm