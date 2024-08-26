import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxios()
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })
    const action = () => {

    }
    const rule = () => {

    }
    return (
        <div>
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
                            <th>Rule</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373] text-lg">
                        {/* row 1 */}
                        {
                            users.map((user, index) => (
                                <tr key={user._id} className="border-b-[.5px] border-[#E8E8E8]">
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button onClick={() => rule(user._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#D1A054] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><FaUsers className="text-3xl "></FaUsers></button>
                                    </td>
                                    <td>
                                        <button onClick={() => action(user._id)} className="btn btn-ghost btn-xs text-lg text-white bg-[#B91C1C] rounded-md w-12 h-12 hover:bg-white hover:text-[#B91C1C] transition-colors "><MdDeleteForever className="text-3xl "></MdDeleteForever></button>
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