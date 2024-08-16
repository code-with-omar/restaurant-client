import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from "./../../../assets/menu/banner3.jpg"
import useHooks from '../../../Hooks/useHooks';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
const Menus = () => {
    const [menu] = useHooks()
    const salad = menu.filter(item => item.category === "salad")
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro | menus</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={img} title="OUR MENU" describe="Would you like to try a dish?"></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title="DESSERTS" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            <MenuCategory items={pizza} title="PIZZA" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            <MenuCategory items={salad} title="SALADS" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
            <MenuCategory items={soup} title="SOUPS" details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
        </div>
    );
};

export default Menus;