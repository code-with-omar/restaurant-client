import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";
import empty from "./../../../assets/shot.gif"
import DashboardTitle from "../../../components/DashboardTitle";
const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxios()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        });
    }
    return (

        <div>
            <DashboardTitle subHeading="my cart" heading="WANNA ADD MORE?"></DashboardTitle>
            {
                cart.length
                    ? <>
                        <div className="flex justify-between">
                            <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Orders: {cart.length}</h2>
                            <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Price: ${totalPrice.toFixed(2)}</h2>
                            {
                                cart.length ?
                                    <Link to='/dashboard/payment'> <button className="btn btn-outline btn-accent uppercase">pay fast</button></Link>
                                    : <></>
                            }
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table mt-5 md:mt-10">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                                    <tr className="border-b-0 rounded">
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name of Item</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#737373] text-lg">
                                    {cart.map((item, index) => (
                                        <tr key={item._id} className="border-b-[.5px] border-[#E8E8E8]">
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squirce h-12 w-12">
                                                            <img
                                                                src={item.image} // Replace with actual image URL from the item
                                                                alt={item.name} // Replace with actual name from the item
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                    : <img className="w-full h-svh" src={empty} alt="" />
            }

        </div>
    );
};

export default Cart;
