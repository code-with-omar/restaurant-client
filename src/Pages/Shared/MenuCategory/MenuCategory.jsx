import { Link } from "react-router-dom";
import MenuCover from "../MenuCover/MenuCover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, title, details }) => {
    return (
        <div>
            {title && <MenuCover title={title} details={details}></MenuCover>}
            <div className="grid md:grid-cols-2 gap-10 w-11/12 xl:w-4/5 lg:w-4/5 mx-auto mt-16 mb-20 md:mt-20 lg:mt-24">

                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="grid justify-items-center">
                <Link to="/shop">
                    <button className="my-btn ">Order Now</button>
                </Link>
            </div>
        </div>

    );
};

export default MenuCategory;