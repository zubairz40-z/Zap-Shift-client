import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const Register = () => {
  const { registerUser, googleSignIn } = useContext(AuthContext); // ✅ include Google sign-in
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");

  // Email/Password registration
  const handleRegister = (data) => {
    setLoading(true);

    registerUser(data.email, data.password)
      .then(() => {
        toast.success("Registration Successful!");
        navigate("/"); // Redirect after register
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  // Google registration/login
  const handleGoogleRegister = () => {
    setLoading(true);
    googleSignIn()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/"); // Redirect after Google login
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="w-full max-w-md bg-base-200 p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">

          {/* Full Name */}
          <div>
            <label className="label">Full Name</label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              className="input input-bordered w-full"
              placeholder="Your Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Profile Image URL */}
          <div>
            <label className="label">Profile Image URL</label>
            <input
              type="url"
              {...register("photoURL", {
                required: "Profile image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
                  message: "Enter a valid image URL"
                }
              })}
              className="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">{errors.photoURL.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
                maxLength: { value: 20, message: "Password cannot exceed 20 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  message: "Password must include uppercase, lowercase, number & special character"
                }
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) => value === password || "Passwords do not match"
              })}
              className="input input-bordered w-full"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button 
            className={`btn bg-primary text-white w-full mt-4 ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Google Register/Login */}
          <button 
            type="button"
            onClick={handleGoogleRegister}
            className="btn btn-outline w-full"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register with Google"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
