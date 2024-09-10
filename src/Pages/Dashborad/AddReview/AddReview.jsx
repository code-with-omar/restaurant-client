import { useForm } from "react-hook-form";
import DashboardTitle from "../../../components/DashboardTitle";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";



const AddReview = () => {
    const [rating,setRating]=useState(1)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { user } = useAuth()
    const handleRatingClick = (rating) => {
        setRating(rating)
    }
    const onSubmit = async (e) => {
        const ratingUs = {
            userName: user.displayName,
            email: user.email,
            recipeName: e.name,
            rating: rating,
            suggestion: e.suggestion,
            details: e.details
        }
        console.log(ratingUs)
    }
    return (
        <div>
            <DashboardTitle subHeading="Sharing is Caring!!!" heading="GIVE A REVIEW..."></DashboardTitle>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-blue-800 font-bold mb-4 md:mb-6">Rate Us</h2>
            <div className="rating justify-center flex gap-x-1 mb-4 md:mb-10">

                <input type="radio" name="rating-2" onClick={() => handleRatingClick(1)} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" onClick={() => handleRatingClick(2)} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" onClick={() => handleRatingClick(3)} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" onClick={() => handleRatingClick(4)} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" onClick={() => handleRatingClick(5)} className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mask mask-star-2 bg-orange-400" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444] mb-5">Which recipe you liked most?</label>
                        <input  {...register("name")}
                            type="text" className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Recipe you liked most"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444] mb-5">Do you have any suggestion for us?</label>
                        <input  {...register("suggestion")}
                            type="text" className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Suggestion"
                            required
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444] mb-5">Kindly express your care in a short way.</label>
                        <textarea

                            {...register("details")}
                            className="mt-1 bg-white p-4 block w-full border rounded-md h-20 md:h-36 lg:h-48"
                            placeholder="Review in detail"
                            required
                        />
                    </div>
                    <div className="md:col-span-2 block">
                        <button
                            type="submit"
                            className="mt-1 btn p-4 mx-auto text-white  border  rounded-md  w-full">
                            Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;