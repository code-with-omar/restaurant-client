import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Orders: {cart.length}</h2>
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Price: {totalPrice}</h2>
                <button className="btn btn-outline btn-accent uppercase">pay fast</button>
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
                                            <div className="mask mask-squircle h-12 w-12">
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
                                <th>
                                    <button className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
