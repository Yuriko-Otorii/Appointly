import React, { useState, useRef } from "react";
import SignupImg from "../../assets/LoginImg.jpg";
import { Link } from "react-router-dom";
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validators";
import ToastSuccess from "../../components/Elements/Toast/ToastSuccess";
import ToastError from "../../components/Elements/Toast/ToastError";

import { useMutation } from "react-query";

const handleSignup = async ({ username, email, password }) => {
  const res = await authApi.signup({ username, email, password });
  return res.data;
};

import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const userInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const [usernameErr, setUsernameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { mutate, isLoading } = useSignup(setSuccess, setError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameErr("");
    setEmailErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");

    let error = false;

    const username = userInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const confirmPassword = confirmPasswordInput.current.value;

    const userNameHintValidate = validateUsername(username);
    setUsernameErr(userNameHintValidate ? userNameHintValidate : "");
    if (userNameHintValidate) {
      error = true;
    }

    const emailHintValidate = validateEmail(email);
    setEmailErr(emailHintValidate ? emailHintValidate : "");
    if (emailHintValidate) {
      error = true;
    }

    const passwordHintValidate = validatePassword(password);
    setPasswordErr(passwordHintValidate ? passwordHintValidate : "");
    if (passwordHintValidate) {
      error = true;
    }

    const confirmPasswordHintValidate = validateConfirmPassword(
      confirmPassword,
      password
    );

    setConfirmPasswordErr(
      confirmPasswordHintValidate ? confirmPasswordHintValidate : ""
    );
    if (confirmPasswordHintValidate) {
      error = true;
    }

    if (error) return;

    // Call signup api
    mutate({ username, email, password });
  };

  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue hidden md:block w-full md:w-2/3 h-screen ">
          <img src={SignupImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full mt-4 md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <div className="text-2xl font-extrabold text-center text-blue font-second text-primary">
              Appointly
            </div>
            <div className="text-md font-extrabold text-center text-blue font-second text-primary">
              Meeting Scheduling App
            </div>
            <div className="text-xl font-bold leading-tight mt-6 text-center font-second text-accent">
              Sign up
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
              <label className="block text-gray-700">Username</label>
              <input
                ref={userInput}
                type="username"
                name="password"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />

              {usernameErr !== "" && (
                <p className="text-xs text-red-600">{usernameErr}</p>
              )}

              <label className="block text-gray-700 mt-2">Email</label>
              <input
                ref={emailInput}
                type="username"
                name="email"
                placeholder="Enter Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />

              {emailErr !== "" && (
                <p className="text-xs text-red-600">{emailErr}</p>
              )}

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  ref={passwordInput}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {passwordErr !== "" && (
                <p className="text-xs text-red-600">{passwordErr}</p>
              )}
              <div className="mt-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  ref={confirmPasswordInput}
                  type="password"
                  name="confirm password"
                  placeholder="Enter Confirm password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              {confirmPasswordErr !== "" && (
                <p className="text-xs text-red-600">{confirmPasswordErr}</p>
              )}

              <button
                type="submit"
                className={`btn btn-primary normal-case font-bold w-full py-2 my-7 ${
                  isLoading && "loading"
                }`}
              >
                Signup
              </button>
            </form>

            <p className="mt-8"> Already have an account?</p>
            <Link
              to="/login"
              className="text-primary hover:opacity-70 border-b border-primary"
            >
              Login
            </Link>
          </div>
        </div>

        {success && (
          <ToastSuccess
            props={"Registration successful!"}
            setFunction={setSuccess}
          />
        )}
        {error && (
          <ToastError props={"Eamil already exists."} setFunction={setError} />
        )}
      </section>
    </>
  );
};

export default Signup;
