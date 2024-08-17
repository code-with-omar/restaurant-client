import { Link } from 'react-router-dom';
import login from './../../assets/others/login-1.png';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="mx-auto">
            <section className="bg-login-image mx-auto shadow-custom self-center">
                <div className="flex flex-col lg:flex-row h-full md:items-stretch">
                    <div className='self-center'>
                        <img className='w-[400px] md:w-[550px] lg:w-[600px] xl:w-[648px] h-80 md:h-[350px] lg:[380px] xl:h-[455px]' src={login} alt="login photo" />
                    </div>

                    <div className='self-center'>
                        <h2 className='text-black text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-2 mb-2 md:mb-4'>Login</h2>
                        <form>
                            <div className='grid gap-y-4'>
                                <label htmlFor="email" className='text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold'>Email</label>
                                <input type="email" id="email" className='rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] xl:h-[72px] bg-white pl-5 h-10 md:h-12 lg:h-14' placeholder='Enter Email' />
                            </div>
                            <div className='grid gap-y-4 mt-4'>
                                <label htmlFor="password" className='text-[#444] text-base mt-2 md:text-lg lg:text-xl font-semibold'>Password</label>
                                <input type="password" id="password" className='rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] xl:h-[72px] bg-white pl-5 h-10 md:h-12 lg:h-14' placeholder='Enter Password' />
                            </div>
                            <div className='mt-4'>
                                <input type="text" id="extra" className='rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] xl:h-[72px] bg-white pl-5 h-10 md:h-12 lg:h-14' placeholder='Type here' />
                            </div>
                            <div className='mt-4'>
                                <input type="submit" value="Sign In" className='bg-orange-700 text-white text-base rounded-lg w-full md:w-[400px] lg:w-[450px] xl:w-[600px] xl:h-[72px] pl-5 h-10 md:h-12 lg:h-14 cursor-pointer hover:text-orange-700 hover:bg-white transition-colors hover:text-lg' />
                            </div>
                        </form>

                        <div className='text-center text-base md:text-lg lg:text-lg mt-4 font-medium'>
                            <p className='text-[#D1A054]'>New here?
                                <Link to="/register" className='cursor-pointer hover:underline ml-2'>
                                    Create a New Account
                                </Link>
                            </p>
                            <div className='mb-5 mt-4'>
                                <p className='text-[#444]'>Or sign in with</p>
                                <div className='flex justify-center gap-5 mt-5'>
                                    <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer'>
                                        <FaFacebookF className='text-[#1877F2]' />
                                    </div>
                                    <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer'>
                                        <FaGoogle className='text-[#34A853]' />
                                    </div>
                                    <div className='w-7 h-7 rounded-full bg-white flex justify-center items-center lg:w-[52px] lg:h-[52px] border border-slate-950 cursor-pointer'>
                                        <FaGithub className='text-[#171515]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
