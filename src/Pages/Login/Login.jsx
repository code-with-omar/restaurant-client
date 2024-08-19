import { Link } from 'react-router-dom';
import login from './../../assets/others/login-1.png';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/authProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const capchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [validationDisabled, setalidationDisabled] = useState(false);
    const { signIn } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleCapchaValidation = () => {
        const user_captcha_value = capchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
            setalidationDisabled(true)
        } else {
            setDisabled(true);
            setalidationDisabled(false)
        }
    };
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        form.reset()
    };



    return (
        <section className="bg-login-image mx-auto shadow-custom self-center h-full md:h-screen">
             <Helmet>
                <title>Bistro | Sign In</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row h-full md:items-stretch">
                <div className="self-center">
                    <img className="w-[400px] md:w-[550px] lg:w-[600px] xl:w-[648px] h-80 md:h-[350px] lg:[380px] xl:h-[455px]" src={login} alt="login photo" />
                </div>

                <div className="self-center">
                    <h2 className="text-black text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-2 mb-2 md:mb-4">Login</h2>
                    <form onSubmit={handleSignIn}>
                        <div className="grid gap-y-4">
                            <label htmlFor="email" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Email</label>
                            <input type="email" name="email" id="email" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Email" required />
                        </div>
                        <div className="grid gap-y-4 mt-4">
                            <label htmlFor="password" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Password</label>
                            <input type="password" name="password" id="password" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Password" required />
                        </div>
                        <div className="grid gap-y-4 mt-4">
                            <LoadCanvasTemplate />
                            <input disabled={validationDisabled} ref={capchaRef} type="text" id="extra" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Captcha" />
                            <button disabled={validationDisabled} type="button" onClick={handleCapchaValidation} className="btn btn-primary bg-orange-700 text-white text-base rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] h-8 md:h-10 xl:h-14 lg:h-12 cursor-pointer hover:text-orange-700 hover:bg-white transition-colors hover:text-lg">
                                Validate Captcha
                            </button>
                        </div>
                        <div className="mt-4">
                            <input disabled={disabled} type="submit" value="Sign In" className="btn btn-primary bg-orange-700 text-white text-base rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] h-8 md:h-10 xl:h-14 lg:h-12 cursor-pointer hover:text-orange-700 hover:bg-white transition-colors hover:text-lg" />
                        </div>
                    </form>

                    <div className="text-center text-base md:text-lg lg:text-lg mt-4 font-medium">
                        <p className="text-[#D1A054]">New here?
                            <Link to="/signup" className="cursor-pointer hover:underline ml-2">
                                Create a New Account
                            </Link>
                        </p>
                        <div className="mb-5 mt-4">
                            <p className="text-[#444]">Or sign in with</p>
                            <div className="flex justify-center gap-5 mt-5">
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer">
                                    <FaFacebookF className="text-[#1877F2]" />
                                </div>
                                <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer">
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

export default Login;
