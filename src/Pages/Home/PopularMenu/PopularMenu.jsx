import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useHooks from "../../../Hooks/useHooks";

const PopularMenu = () => {
    const [menu]=useHooks()
    const popularItem=menu.filter(item => item.category === "popular")
    
    return (
        <section className="mb-16">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 w-11/12 xl:w-4/5 lg:w-4/5 mx-auto">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;