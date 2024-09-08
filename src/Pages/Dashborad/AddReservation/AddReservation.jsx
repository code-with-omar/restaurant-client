import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const AddReservation = () => {
    const {reset , register, handleSubmit, formState: { errors }, } = useForm();
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
        </div >
    );
};

export default AddReservation;