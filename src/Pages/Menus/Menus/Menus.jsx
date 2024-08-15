import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from "./../../../assets/menu/banner3.jpg"
import useHooks from '../../../Hooks/useHooks';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MenuCover from '../../Shared/MenuCover/MenuCover';
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
            <div className="grid md:grid-cols-2 gap-10 w-11/12 xl:w-4/5 lg:w-4/5 mx-auto">
                {
                    offered.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <MenuCover title="DESSERTS" details="Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCover>
        </div>
    );
};

export default Menus;