import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useHooks from "../../../Hooks/useHooks";


const Allmenu = () => {
    const [menus, loading, refetch] = useHooks()
    const axiosSecure = useAxios()
    const updateMenu = () => {

    }
    const deleteMenu = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    
                }
                refetch()
            }
        });
    }
    return (
        <div>
            <div className="">
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Item: {menus.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Name </th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {menus.map((menu, index) => (
                            <tr key={menus._id} className="border-b-[.5px] border-[#E8E8E8]">
                                <td>{index + 1}</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={menu.image} // Replace with actual image URL from the item
                                                    alt={menu.name} // Replace with actual name from the item
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{menu.category}</td>
                                <td>{menu.name}</td>
                                <td>${menu.price}</td>
                                <td>
                                    <button onClick={() => updateMenu(menu._id)} className="btn btn-ghost btn-xs text-lg text-white bg-green-700 rounded-md w-12 h-12 hover:bg-green-700 transition-colors "><FaEdit className="text-xl "></FaEdit></button>
                                </td>
                                <td>
                                    <button onClick={() => deleteMenu(menu._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allmenu;