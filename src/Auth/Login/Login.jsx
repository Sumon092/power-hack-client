import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import useAuth from '../../Hooks/useAuth';



const Login = () => {
    const navigate = useNavigate()
    // const { refetch } = useAuth()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleLogin = async (data) => {
        axios
            .post("/login", JSON.stringify(data), {
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(res => {
                if (res.data.status === 200) {
                    console.log(res.data);
                    toast.success("Successfully logged in!");
                    localStorage.setItem("accessToken", res.data.token);
                    navigate("/");
                    reset();
                } else {
                    toast.error("Wrong Credential");
                    reset();
                }
            });
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card shadow-xl bg-white bg-opacity-10 rounded-2xl shadow-5xl border border-opacity-30 border-r-0 border-b-0 flex flex-col justify-start items-center">
                <div className="card-body w-96">
                    <h2 className="text-center text-2xl font-bold text-white mb-10">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-primary input-bordered w-full max-w-xs bg-opacity-20 mb-3"
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


                        <input className='btn btn-info btn-outline hover:text-white w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p className='text-warning text-center'><small>Don't have any account? <Link className='text-info font-bold ml-3 text-lg' to="/register">Register Now</Link></small></p>
                </div>
            </div>
        </div >
    );
};

export default Login;