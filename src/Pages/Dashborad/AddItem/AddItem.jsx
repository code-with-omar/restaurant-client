import axios from "axios";
import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const AddItem = () => {
    const { reset, register, handleSubmit, formState: { errors }, } = useForm();
    const axiosSecure = useAxios()
    const onSubmit = async (e) => {

        const file = e.image[0]
        if (!file) return
        const data = new FormData();
        data.append("file", file)
        data.append("upload_preset", import.meta.env.VITE_upload_preset)
        data.append("cloud_name", import.meta.env.VITE_cloud_name)
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_cloud_name}/image/upload`,
            data
        );
        // console.log(response)
        const image = response.data.secure_url
        const itemDetails = {
            name: e.name,
            recipe: e.recipe,
            image: image,
            category: e.category,
            price: parseFloat(e.price)
        }
        const responseFormServer = await axiosSecure.post('/menu', itemDetails)


        if (responseFormServer.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });

        }
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Recipe name*</label>
                        <input  {...register("name")}
                            type="text" className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Recipe name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Category*</label>
                        <select {...register("category")}
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
                            className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Price*</label>
                        <input
                            {...register("price")}
                            type="number"
                            className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Price"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Recipe Details*</label>
                        <textarea
                            {...register("recipe")}
                            className="mt-1 bg-white p-4 block w-full border  rounded-md"
                            placeholder="Recipe Details"
                            required
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-base md:text-lg lg:text-xl  font-semibold text-[#444]">Upload Image</label>
                        <input
                            {...register("image")}
                            type="file"
                            className="file-input file-input-bordered bg-white w-full max-w-xs mt-3" />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="mt-1 my-btn p-4 block text-white  border  rounded-md">
                            Add Item
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddItem;