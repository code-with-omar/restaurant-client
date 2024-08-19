import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import login from './../../assets/others/login-1.png';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="bg-login-image mx-auto shadow-custom self-center h-full md:h-screen">
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
                        <div className="grid gap-y-4 mt-4">
                            <label htmlFor="password" className="text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold">Password</label>
                            <input {...register("password", { required: "Password field is required" })} type="password" name="password" id="password" className="rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] bg-white pl-5 h-8 md:h-10 xl:h-14 lg:h-12" placeholder="Enter Password" required />
                            {errors.password && <span className="text-red-900">{errors.password.message}</span>}
                        </div>

                        <div className="mt-4">
                            <input type="submit" value="Sign In" className="btn btn-primary bg-orange-700 text-white text-base rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] h-8 md:h-10 xl:h-14 lg:h-12 cursor-pointer hover:text-orange-700 hover:bg-white transition-colors hover:text-lg" />
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

export default SignUp;
