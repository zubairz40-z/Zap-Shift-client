import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const Login = () => {
  const { loginUser, resetPassword, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Email/Password login
  const handleLogin = (data) => {
    setLoading(true);

    loginUser(data.email, data.password)
      .then(() => {
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Invalid Email or Password");
      })
      .finally(() => setLoading(false));
  };

  // Google login
  const handleGoogleLogin = () => {
    setLoading(true);
    googleSignIn()
      .then(() => {
        toast.success("Logged in with Google!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  // Password reset
  const handleReset = () => {
    const email = prompt("Enter your email to reset password:");
    if (email) {
      resetPassword(email)
        .then(() => toast.success("Reset link sent!"))
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="w-full max-w-md bg-base-200 p-6 rounded-xl shadow space-y-6">
        <h1 className="text-2xl font-bold text-center mb-2">Login</h1>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                className="input input-bordered w-full"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
          </div>

          {/* Forgot Password */}
          <p
            className="text-sm text-blue-600 cursor-pointer hover:underline"
            onClick={handleReset}
          >
            Forgot Password?
          </p>

          {/* Login Button */}
          <button 
            className={`btn bg-primary text-white w-full mt-4 ${loading ? "loading" : ""}`} 
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Sign-In */}
        <button 
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login with Google"}
        </button>
      </div>
    </div>
  );
};

export default Login;
