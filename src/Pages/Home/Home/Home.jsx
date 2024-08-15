import Message from "../Message/Message";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Message></Message>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Features></Features>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;