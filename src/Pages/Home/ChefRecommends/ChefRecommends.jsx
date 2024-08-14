import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Menu from "../../Shared/Menu/Menu";

const ChefRecommends = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
                    fetch('chefMenu.json')
                        .then(res => res.json())
                        .then(data => {
                            setMenu(data)
                        })
                },[])
    return (
        <section>
            <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 w-11/12 xl:w-4/5 lg:w-4/5 mx-auto">
               {
                menu.map(item=><Menu
                key={item._id}
                item={item}
                ></Menu>)
               }
            </div>
        </section>
    );
};

export default ChefRecommends;