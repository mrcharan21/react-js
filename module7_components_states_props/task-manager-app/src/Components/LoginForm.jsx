import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  // ✅ Validation
  const validate = () => {
    const newErrors = {};
    if (!data.fName) {
      newErrors.fName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(data.fName)) {
      newErrors.fName = "First name must contain only letters";
    }

    if (!data.lName) {
      newErrors.lName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(data.lName)) {
      newErrors.lName = "Last name must contain only letters";
    }

    if (!data.Email) {
      newErrors.Email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(data.Email)
    ) {
      newErrors.Email = "Email is invalid";
    }

    if (!data.PhoneNumber) {
      newErrors.PhoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone number must be 10 digits";
    }

    if (!data.Password) {
      newErrors.Password = "Password is required";
    } else if (data.Password.length < 6) {
      newErrors.Password = "Password must be at least 6 characters";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (data.confirmPassword !== data.Password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear errors while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    }

    console.log(data);

    // reset form
    setData({
      fName: "",
      lName: "",
      Email: "",
      PhoneNumber: "",
      Password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-4">
          Login
        </h2>

        {/* First Name */}
        <div>
          <input
            type="text"
            name="fName"
            value={data.fName}
            onChange={handleChange}
            placeholder="Enter your First Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.fName && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.fName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            name="lName"
            value={data.lName}
            onChange={handleChange}
            placeholder="Enter your Last Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.lName && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.lName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="Email"
            value={data.Email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.Email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            name="PhoneNumber"
            value={data.PhoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.PhoneNumber && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.PhoneNumber}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="Password"
            value={data.Password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <span
            className="absolute right-3 top-3 text-gray-600 cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.Password && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.Password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <span
            className="absolute right-3 top-3 text-gray-600 cursor-pointer"
            onClick={toggleConfirmPassword}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm font-semibold mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
