import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets//menu/dessert-bg.jpeg'
import SectionTitle from "../../components/SectionTitle";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <Cover img={img} title="CONTACT US" describe="Would you like to try a dish?"></Cover>
            <SectionTitle subHeading={"Visit Us"} heading={"OUR LOCATION"}></SectionTitle>
            <aside className="w-11/12 xl:w-4/5 lg:w-4/5 mx-auto">
                <div className="grid  md:grid-cols-3 gap-10 mb-5 md:mb-8 lg:mb-10">
                    <div className="text-center">
                        <div className="bg-[#D1A054] grid justify-items-center py-2 md:py-3 lg:py-5 text-white font-extrabold text-xl md:text-2xl lg:text-3xl">
                            <FiPhoneCall />
                        </div>
                        <div className="my-3 md:my-4 lg:my-7">
                            <h3 className="text-[#1eceae] text-lg md:text-xl lg:text-2xl font-semibold my-4">PHONE</h3>
                            <p className="text-base my-2 text-white">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#D1A054] grid justify-items-center py-2 md:py-3 lg:py-5 text-white font-extrabold text-xl md:text-2xl lg:text-3xl ">
                            <FaLocationDot />
                        </div>
                        <div className="my-3 md:my-4 lg:my-7">
                            <h3 className="text-[#1eceae] text-lg md:text-xl lg:text-2xl font-semibold my-4">ADDRESS</h3>
                            <p className="text-base my-2 text-white">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#D1A054] grid justify-items-center py-2 md:py-3 lg:py-5 text-white font-extrabold text-xl md:text-2xl lg:text-3xl ">
                            <MdWatchLater />
                        </div>
                        <div className="my-3 md:my-4 lg:my-7">
                            <h3 className="text-[#1eceae] text-lg md:text-xl lg:text-2xl font-semibold my-4">
                                WORKING HOURS
                            </h3>
                            <p className="text-base my-2 text-white">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-base my-2 text-white">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                
            </aside>
           
        </section>
    );
};

export default ContactUs;