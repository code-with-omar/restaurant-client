import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const { _id, name, recipe, category, price } = useLoaderData()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const axiosSecure = useAxios()
    const onSubmit = async (e) => {
        const menuItemUpdate = {
            name: e.name,
            recipe: e.recipe,
            category: e.category,
            price: parseFloat(e.prices)
        }
        const menuUpdate = await axiosSecure.patch(`/menu/${_id}`, menuItemUpdate)
        if (menuUpdate.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                title: "Good job!",
                text: "Your menu is update",
                icon: "success",
                timer: 1500
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Recipe name</label>
                        <input defaultValue={name} {...register("name")}
                            type="text" className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Recipe name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Category</label>
                        <select defaultValue={category} {...register("category")}
                            className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            required
                        >
                            <option value="" disabled>
                                Select category
                            </option>

                            {/* Add your categories here */}
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soups</option>
                            <option value="dessert">Desserts</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    <div>
                        <label
                            className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Price</label>
                        <input
                            defaultValue={price}
                            {...register("prices")}
                            type="text"
                            className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Price"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Recipe Details</label>
                        <textarea
                            defaultValue={recipe}
                            {...register("recipe")}
                            className="mt-1 bg-white p-4 block w-full border rounded-md h-28 md:h-48 lg:h-60"
                            placeholder="Recipe Details"
                            required
                        />
                    </div>



                    <div className="md:col-span-2 block">
                        <button
                            type="submit"
                            className="mt-1 btn p-4 mx-auto text-white  border  rounded-md  w-full">
                            Update Recipe Details
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateItem;