import SectionTitle from "../../../components/SectionTitle";
import img from "./../../../assets/home/featured.jpg"
import './features.css'
const Features = () => {
    return (
        <section className="my-bg md:h-screen w-full flex items-stretch">
            <div className=" w-11/12 mx-auto px-12 lg:px-48 py-12 lg:py-24 self-center rounded">
           
                    <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"}></SectionTitle>
                
                <div className="grid grid-flow-row sm:grid-flow-col justify-center items-center gap-x-0  lg:gap-x-16 md:gap-x-12">
                    <img className="md:w-[400px] lg:w-[500px] mb-5 md:mb-0" src={img} alt="" />
                    <div className="text-lg lg:text-2xl md:text-xl text-white font-normal leading-9">
                        <h3>March 20, 2023</h3>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime ten</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;