import Message from "../../Message/Message";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Message></Message>
           <PopularMenu></PopularMenu>
           <CallUs></CallUs>
        </div>
    );
};

export default Home;