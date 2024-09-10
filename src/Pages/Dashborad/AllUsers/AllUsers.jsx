import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import DashboardTitle from "../../../components/DashboardTitle";

const AllUsers = () => {
    const axiosSecure = useAxios()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
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
                // Fetch user details before deleting

                // Proceed to delete the user after fetching details
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire("Deleted!", `The user  has been deleted.`, "success");
                            refetch();  // Refetch the user data to update the UI
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });

            }
        });
    };

    const rule = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You make ${user.name} as admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: `Now ${user.name} is a admin`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }

        });

    }
    return (
        <div>
            <DashboardTitle subHeading="How many??" heading="MANAGE ALL USERS"></DashboardTitle>
            <div className="">
                <h2 className="text-[#151515] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table mt-5 md:mt-10">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white text-lg font-semibold">
                        <tr className="border-b-0 rounded">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                   
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="border-b-[.5px] border-[#E8E8E8]">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? "Admin" : <button onClick={() => rule(user)} className="btn btn-ghost btn-xs text-lg text-white bg-[#D1A054] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><FaUsers className="text-3xl "></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        {
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
                                        }
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;