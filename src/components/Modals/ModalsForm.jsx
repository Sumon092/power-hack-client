import React from 'react';
import { useForm } from 'react-hook-form';

const ModalsForm = () => {
    const {
        register, handleSubmit, formState: { errors }, reset, } = useForm();

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xs mx-auto">
                <input
                    type="text"
                    placeholder="Full name"
                    {...register("fullName", {
                        required: {
                            value: true,
                            message: "FullName is required",
                        },
                    })}
                    className="input input-bordered w-full max-w-xs input-primary"
                />
                <label className="label">
                    {errors?.fullName?.type === "required" && (
                        <span className="label-text-alt text-error">
                            {errors?.fullName?.message}
                        </span>
                    )}
                </label>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
                <input
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email Required",
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Email is not valid",
                        },
                    })}
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered input-primary w-full max-w-xs"
                />
                <label className="label">
                    {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                    {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </label>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
                <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    {...register("phone", {
                        required: {
                            value: true,
                            message: "Phone number  required",
                        },
                        minLength: {
                            value: 11,
                            message: "Phone Number should be 11 digits",
                        },
                        maxLength: {
                            value: 11,
                            message: "Phone Number should be 11 digits",
                        },
                    })}
                    className="input input-bordered w-full max-w-xs input-primary"
                />
                <label className="label">
                    {errors?.phone?.type === "required" && (
                        <span className="label-text-alt text-error">
                            {errors?.phone?.message}
                        </span>
                    )}
                    {errors?.phone?.type === "minLength" && (
                        <span className="label-text-alt text-error">
                            {errors?.phone?.message}
                        </span>
                    )}
                    {errors?.phone?.type === "maxLength" && (
                        <span className="label-text-alt text-error">
                            {errors?.phone?.message}
                        </span>
                    )}
                </label>
            </div>

            <div className="form-control w-full max-w-xs mx-auto">
                <input
                    type="number"
                    placeholder="Amount"
                    {...register("amount", {
                        required: {
                            value: true,
                            message: "Please Enter Amount!",
                        },
                    })}
                    className="input input-bordered w-full max-w-xs input-primary"
                />
                <label className="label">
                    {errors?.amount?.type === "required" && (
                        <span className="label-text-alt text-error">
                            {errors?.amount?.message}
                        </span>
                    )}
                </label>
            </div>
            <div className="w-full max-w-xs mx-auto">
                <input
                    type="submit"
                    value="submit"
                    className="btn btn-info btn-outline hover:text-white w-full max-w-xs text-white"
                />
            </div>
        </form>
    );
};

export default ModalsForm;