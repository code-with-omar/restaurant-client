import Message from "../../Message/Message";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Message></Message>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;