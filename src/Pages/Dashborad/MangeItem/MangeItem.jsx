import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useManageItem from "../../../Hooks/useManageItem";


const MangeItem = () => {
    const [allCarts, refetch] = useManageItem()
    console.log(allCarts)
    const handleDelete = () => {

    }
    const update = () => {

    }
    return (
        <div>
            <div className="">
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Item: {allCarts.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Image</th>
                            <th>User</th>
                            <th>Name of Item</th>
                          
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {allCarts.map((cart, index) => (
                            <tr key={cart._id} className="border-b-[.5px] border-[#E8E8E8]">
                                <td>{index + 1}</td>
                                
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={cart.image} // Replace with actual image URL from the item
                                                    alt={cart.name} // Replace with actual name from the item
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cart.email}</td>
                                <td>{cart.name}</td>
                                <td>${cart.price}</td>
                                <td>
                                    <button onClick={() => update(cart._id)} className="btn btn-ghost btn-xs text-lg text-white bg-green-700 rounded-md w-12 h-12 hover:bg-green-700 hover:bg-yellow-400 transition-colors "><FaEdit className="text-xl "></FaEdit></button>
                                </td>
                                <td>
                                    <button onClick={() => (cart._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MangeItem;