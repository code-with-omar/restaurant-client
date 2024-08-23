import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import login from './../../assets/others/login-1.png';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/authProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";


const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()
    const { googleSignIn } = useAuth()
    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => { navigate('/login') })
                    })
                    .catch(error => {
                        console.log(error)
                    })

            })
            .catch(error => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email is already use",
                });
            })
        reset()
    };
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email,
                photoURL: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <section className="bg-login-image mx-auto shadow-custom self-center h-full md:h-screen">
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row h-full md:items-stretch">
                <div className="self-center">
                    <img className="w-[400px] md:w-[550px] lg:w-[600px] xl:w-[648px] h-80 md:h-[350px] lg:[380px] xl:h-[455px]" src={login} alt="login photo" />
                </div>

                <div className="self-center">
                    <h2 className="text-black text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-2 mb-2 md:mb-4">Sign Up Please</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-y-4">
                            <label htmlFor="name" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Name</label>
                            <input {...register("name", { required: "Name field is required" })} type="text" name="name" id="name" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Name" />
                            {errors.name && <span className="text-red-900">{errors.name.message}</span>}
                        </div>
                        <div className="grid gap-y-4">
                            <label htmlFor="email" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Email</label>
                            <input {...register("email", { required: "Email field is required" })} type="email" name="email" id="email" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Email" />
                            {errors.email && <span className="text-red-900">{errors.email.message}</span>}
                        </div>
                        <div className="grid gap-y-4">
                            <label htmlFor="photoURL" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Photo URL</label>
                            <input {...register("photoURL", { required: true })} type="text" name="photoURL" id="photoURL" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Photo URL" />
                            {errors.photoURL && <span className="text-red-900">Photo required</span>}
                        </div>
                        <div className="grid gap-y-4 mt-4">
                            <label className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Password</label>
                            <input {...register("password", {
                                required: true,
                                minLength: { value: 6, },
                                maxLength: { value: 20, },
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} type="password" name="password" id="password" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Password" />
                            {errors.password && <span className="text-red-900">Password is required</span>}
                            {errors.password?.type === "minLength" && <span className="text-red-900">Password at least 6 characters</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-900">Password less than or equal 20 characters</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-900">Password at least 1 lower case 1 upper case 1 digits 1 special characters  </span>}
                        </div>
                        <div className="mt-4">
                            <input type="submit" value="Sign Up" className="btn btn-primary bg-orange-700 text-white text-base rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] h-8 md:h-10 xl:h-14 lg:h-12 cursor-pointer hover:text-orange-700 hover:bg-white transition-colors hover:text-lg" />
                        </div>
                    </form>

                    <div className="text-center text-base md:text-lg lg:text-lg mt-4 font-medium">
                        <p className="text-[#D1A054]">Have Account?
                            <Link to="/login" className="cursor-pointer hover:underline ml-2">
                                Sign In
                            </Link>
                        </p>
                        <div className="mb-5 mt-4">
                            <p className="text-[#444]">Or sign in with</p>
                            <div className="flex justify-center gap-5 mt-5">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer">
                                    <FaFacebookF className="text-[#1877F2]" />
                                </div>
                                <div onClick={handleGoogleSignIn} className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer">
                                    <FaGoogle className="text-[#34A853]" />
                                </div>
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer">
                                    <FaGithub className="text-[#171515]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
