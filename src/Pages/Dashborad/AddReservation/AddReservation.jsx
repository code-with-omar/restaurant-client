import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import DashboardTitle from "../../../components/DashboardTitle";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";

const AddReservation = () => {
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();
    const { user } = useAuth()
    console.log(user.email)
    const axiosSecure = useAxios()
    const onSubmit = async (e) => {

        const reservationTable = {
            name: e.name,
            email: e.email,
            time: e.time,
            date: e.date,
            guest: e.guest,
            phoneNumber: e.phoneNumber

        }
        const reservation = await axiosSecure.post('/reservation', reservationTable)
        console.log(reservation)
        if (reservation.data.acknowledged) {
            Swal.fire({
                position: "",
                icon: "success",
                title: "Your Reservation is success",
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset()
    }
    return (
        <div>
            <DashboardTitle subHeading="Reservation" heading="BOOK A TABLE"></DashboardTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-5 grid-cols-3 mb-5">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Date *</h4>
                        </div>
                        <input  {...register("date")} type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-700 outline-none py-7 pl-5 text-base text-white" required />

                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Time*</h4>
                        </div>
                        <input  {...register("time")} type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-700 outline-none py-7 pl-5 text-base text-white" required />

                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Guest*</h4>
                        </div>
                        <select {...register("guest")}
                            className="mt-1 bg-slate-700 p-4 block w-full border  rounded-md text-white"
                            required
                        >
                            <option value="" disabled className="text-white">
                                Select person
                            </option>

                            {/* Add your categories here */}
                            <option value="person 1">person 1</option>
                            <option value="person ">Person 2</option>
                            <option value="person ">Person 3</option>
                            <option value="person ">Person 4</option>
                            <option value="person ">Person 5</option>
                        </select>
                    </label>
                </div>
                <div className="grid gap-5 grid-cols-3 mb-5">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Name *</h4>
                        </div>
                        <input defaultValue={user.displayName} {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-700 outline-none py-7 pl-5 text-base text-white" required />

                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Phone Number*</h4>
                        </div>
                        <input  {...register("phoneNumber")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-700 outline-none py-7 pl-5 text-base text-white" required />

                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <h4 className="label-text text-[#444] font-semibold text-lg md:text-xl">Email*</h4>
                        </div>
                        <input defaultValue={user.email}  {...register("email")} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-700 outline-none py-7 pl-5 text-base text-white" required />

                    </label>
                </div>
                <div className="w-56 mx-auto my-5">
                    <button
                        type="submit"
                        className="mt-1 btn btn-outline btn-accent p-4 mx-auto text-white  border  rounded-md  w-full">
                        Book A Table
                    </button>
                </div>
            </form >
            <DashboardTitle subHeading="Visit us" heading="Our Location"></DashboardTitle>
            <aside className="">
                <div className="grid  md:grid-cols-3 gap-10 mb-5 md:mb-8 lg:mb-10">
                    <div className="text-center">
                        <div className="bg-[#D1A054] grid justify-items-center py-2 md:py-3 lg:py-5 text-white font-extrabold text-xl md:text-2xl lg:text-3xl">
                            <FiPhoneCall />
                        </div>
                        <div className="my-3 md:my-4 lg:my-7">
                            <h3 className="text-[#1eceae] text-lg md:text-xl lg:text-2xl font-semibold my-4">PHONE</h3>
                            <p className="text-base my-2 text-black">+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="bg-[#D1A054] grid justify-items-center py-2 md:py-3 lg:py-5 text-white font-extrabold text-xl md:text-2xl lg:text-3xl ">
                            <FaLocationDot />
                        </div>
                        <div className="my-3 md:my-4 lg:my-7">
                            <h3 className="text-[#1eceae] text-lg md:text-xl lg:text-2xl font-semibold my-4">ADDRESS</h3>
                            <p className="text-base my-2 text-black">+38 (012) 34 56 789</p>
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
                            <p className="text-base my-2 text-black">Mon - Fri: 08:00 - 22:00</p>
                            <p className="text-base my-2 text-black">Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>

            </aside>
        </div >
    );
};

export default AddReservation;