import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";


const SignIn = () => {
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} >
                        <div className="grid gap-y-4">
                            <label htmlFor="email" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Email</label>
                            <input type="email" name="email" id="email" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Email" required />
                        </div>
                        <div className="grid gap-y-4 mt-4">
                            <label htmlFor="password" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Password</label>
                            <input type="password" name="password" id="password" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Password" required />
                        </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;