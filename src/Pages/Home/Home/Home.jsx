import Message from "../../Message/Message";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Message></Message>
        </div>
    );
};

export default Home;