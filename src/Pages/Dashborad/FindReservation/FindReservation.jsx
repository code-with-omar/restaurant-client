import { MdDeleteForever } from "react-icons/md";
import useManageItem from "../../../Hooks/useManageItem";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const FindReservation = () => {
    const [reservation, refetch] = useManageItem()
    const axiosSecure = useAxios()

    const handleDelete = async (id) => {
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
                try {
                    const res = await axiosSecure.delete(`/reservation/${id}`);
                    console.log(res)
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();  // Assuming refetch updates the data after deletion
                    }
                } catch (error) {
                    console.error('Error deleting the reservation:', error);
                }
            }
        });
    };
    
    return (
        <div>
            {
                reservation.length
                    ? <>
                        <div className="flex justify-between">
                            <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total reservation: {reservation.length}</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table mt-5 md:mt-10">
                                {/* head */}
                                <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                                    <tr className="border-b-0 rounded">
                                        <th>#</th>
                                        <th>Guest Number</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#737373] text-lg">
                                    {reservation.map((item, index) => (
                                        <tr key={item._id} className="border-b-[.5px] border-[#E8E8E8]">
                                            <td>{index + 1}</td>

                                            <td>{item.guest}</td>
                                            <td>{item.date}</td>
                                            <td>{item.time}</td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                    : <>
                        <h2 className="text-red-950 text-4xl md:text-8xl text-center font-extrabold">No reservation</h2>
                    </>
            }

        </div>
    );
};

export default FindReservation;