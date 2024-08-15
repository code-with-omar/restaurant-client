import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import img from "./../../../assets/menu/banner3.jpg"
const Menus = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | menus</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
           <Cover img={img} title="OUR MENU" describe="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default Menus;