import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployees } from '../features/employeeSlice';



function EditEmployee() {

    const params = useParams();

    const dispatch = useDispatch();
    const data = useSelector(store => store.employees);



    const existingEmployee = data.filter(datas => datas.id == params.id.toString())

    console.log("s", existingEmployee[0])
    console.log("id", params.id)

    const navigate = useNavigate();
    const [values, setValues] = useState({
        emp_name: "",
        company_name: "",
        email: "",
        address: "",
        cv: "",
        number: "",
        state: "",
        country: ""
    });


    function EditEmployee(e) {
        e.preventDefault();

        console.log("edit value", values)
        dispatch(editEmployees({
            id: params.id,
            emp_name: values.emp_name || existingEmployee[0].emp_name,
            company_name: values.company_name || existingEmployee[0].company_name,
            email: values.email || existingEmployee[0].email,
            address: values.address || existingEmployee[0].address,
            cv: values.cv || existingEmployee[0].cv,
            number: values.number || existingEmployee[0].number,
            state: values.state || existingEmployee[0].state,
            country: values.country || existingEmployee[0].country
        }))
        console.log(values);
        navigate("/list");
    }

    return (
        <div className='grid place-items-center  mt-[40px] '>

            <div className=' mr-[170px]'>
                <form className="w-full max-w-sm" onSubmit={EditEmployee}>
                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Employee Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Enter Name' onChange={(e) => setValues({ ...values, emp_name: e.target.value })} required defaultValue={existingEmployee[0].emp_name} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Company Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter company name" defaultValue={existingEmployee[0].company_name} onChange={(e) => setValues({ ...values, company_name: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="Enter Email" defaultValue={existingEmployee[0].email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
                        </div>
                    </div>




                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Address
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Address" defaultValue={existingEmployee[0].address} onChange={(e) => setValues({ ...values, address: e.target.value })} />
                        </div>
                    </div>


                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Contact Number
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter  number" defaultValue={existingEmployee[0].number} onChange={(e) => setValues({ ...values, number: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                State
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter State name" defaultValue={existingEmployee[0].state} onChange={(e) => setValues({ ...values, state: e.target.value })} />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6 w-[500px]">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Country
                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Enter Country name" defaultValue={existingEmployee[0].country} onChange={(e) => setValues({ ...values, country: e.target.value })}>
                                <option >India</option>
                                <option >Dubai</option>
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

export default EditEmployee