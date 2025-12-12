import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors } 
  } = useForm();

  const handleRegistration = (data) => {
    console.log("User Registration:", data);
  };

  // Watch password for confirm password validation
  const password = watch("password");

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-sm bg-base-200 p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>

        <form onSubmit={handleSubmit(handleRegistration)}>

          {/* Full Name */}
          <label className="label">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            className="input input-bordered w-full"
            placeholder="Your Full Name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">Full name is required</p>
          )}

          {/* Email */}
          <label className="label mt-3">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}

          {/* Password */}
          <label className="label mt-3">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            className="input input-bordered w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password must be at least 6 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password cannot exceed 20 characters
            </p>
          )}

          {/* Confirm Password */}
          <label className="label mt-3">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password || "Passwords do not match",
            })}
            className="input input-bordered w-full"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message || "Confirm password is required"}
            </p>
          )}

          {/* Profile Image */}
          <label className="label mt-3">Profile Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">Image is required</p>
          )}

          {/* Button */}
          <button className="btn bg-primary text-white w-full mt-6">
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
