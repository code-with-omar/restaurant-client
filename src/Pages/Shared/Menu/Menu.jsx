const Menu = ({item}) => {
    const { _id, name, image,details } = item
    return (
        <div className="bg-[#F3F3F3] text-center">
            <img className="w-full" src={image} alt="" />
            <h2 className="text-[#151515] text-base lg:text-2xl md:text-xl font-bold my-4 lg:my-8 md:my-7">{name}</h2>
            <p className="text-[#151515] text-base mb-4 lg:mb-6 md:mb-5">{details}</p>
            <button className="bg-[#E8E8E8] text-[#BB8506]   px-5 py-3 mb-4 lg:px-7 lg:py-5 lg:mb-5 md:px-6 md:py-4 md:mb-4 rounded-lg uppercase hover:bg-[#1F2937] hover:text-[#39df68] transition-colors">add to cart</button>
        </div>
    );
};

export default Menu;