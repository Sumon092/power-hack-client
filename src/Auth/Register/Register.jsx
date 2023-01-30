import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const handleRegister = async (data) => {
        try {
            const response = await axios.post("/registration", JSON.stringify(data), {
                headers: {
                    "content-type": "application/json",
                },
            });

            const result = response.data;
            console.log(result);
            if (result.status === 401) {
                toast.error("Email Exist,try another one");
                reset();
            } else {
                toast.success("Successfully Registered!");
                localStorage.setItem("accessToken", result.token);
                navigate("/");
                reset();
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card shadow-xl bg-white bg-opacity-10 rounded-2xl shadow-5xl border border-opacity-30 border-r-0 border-b-0 flex flex-col justify-start items-center">
                <div className="card-body w-96">
                    <h2 className="text-center text-2xl font-bold text-white mb-10">Register</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>

                        <div className="form-control w-full max-w-xs ">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input input-primary input-bordered w-full max-w-xs bg-opacity-20"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-primary input-bordered w-full max-w-xs bg-opacity-20"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-primary input-bordered w-full max-w-xs bg-opacity-20"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        <input className='btn btn-info btn-outline hover:text-white w-full max-w-xs text-white' type="submit" value="Register" />
                    </form>
                    <p className='text-warning text-center'><small>Already have a account? <Link className='text-info font-bold ml-3 text-lg' to="/login">Login</Link></small></p>
                </div>
            </div>
        </div >
    );
};

export default Register;