import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Menu = ({ item }) => {
    const { _id, name, image, details } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                details
            }
            axios.post('http://localhost:5000/carts',cartItem)
            .then(res=>{
                
            })
        } else {
            Swal.fire({
                title: "You are no logged in",
                text: "Please log in first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="bg-[#F3F3F3] text-center ">
            <img className="w-full" src={image} alt="" />
            <h2 className="text-[#151515] text-base lg:text-2xl md:text-xl font-bold my-4 lg:my-8 md:my-7">{name}</h2>
            <p className="text-[#151515] text-base mb-4 lg:mb-6 md:mb-5">{details}</p>
            <button className="my-btn" onClick={() => handleAddToCart(item)}>add to cart</button>
        </div>
    );
};

export default Menu;