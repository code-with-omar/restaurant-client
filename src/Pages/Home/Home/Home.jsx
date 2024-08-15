import Message from "../Message/Message";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import PopularMenu from "../PopularMenu/PopularMenu";
import Features from "../Features/Features";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Message></Message>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
           <ChefRecommends></ChefRecommends>
           <Features></Features>
        </div>
    );
};

export default Home;