import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from './../../../assets/menu/dessert-bg.jpeg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useState } from "react";
import useHooks from "../../../Hooks/useHooks";
import OrderTabs from "./OrderTabs/OrderTabs";
import './ourShop.css'

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useHooks()
    const salad = menu.filter(item => item.category === "salad")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")
  
    return (
        <section className="mb-12 md:mb-16 lg:mb-20">
            <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <Cover img={img} title="OUR MENU" describe="Would you like to try a dish?"></Cover>
            {/* tab  */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-20 md:mt-24 lg:mt-28">
                <TabList className="flex justify-center gap-x-4 mb-5 md:mb-10 w-4/5 mx-auto text-[#2ecd93] text-center uppercase text-base lg:text-xl md:text-lg font-bold cursor-pointer">
                    <Tab className={`hover:text-[#BB8506] ${tabIndex === 0 ? 'active' : ''}`}>Salad</Tab>
                    <Tab className={`hover:text-[#BB8506] ${tabIndex === 1 ? 'active' : ''}`}>Pizza</Tab>
                    <Tab className={`hover:text-[#BB8506] ${tabIndex === 2 ? 'active' : ''}`}>Soups</Tab>
                    <Tab className={`hover:text-[#BB8506] ${tabIndex === 3 ? 'active' : ''}`}>Desserts</Tab>
                    <Tab className={`hover:text-[#BB8506] ${tabIndex === 4 ? 'active' : ''}`}>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs item={salad}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={pizza}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={soup}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={desserts}></OrderTabs>
                </TabPanel>
                <TabPanel>
                    <OrderTabs item={drinks}></OrderTabs>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default OurShop;
