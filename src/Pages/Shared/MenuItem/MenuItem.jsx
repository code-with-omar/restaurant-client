const MenuItem = ({ item }) => {
    const { _id, name, recipe, image, price } = item
    return (
        <div className="flex space-x-4">
            <img className="w-28 h-28 bg-[#D9D9D9] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]" src={image} alt="" />
            <div>
                <h3 className="text-[#1cdf5a] uppercase text-lg md:text-xl mb-2">{name}</h3>
                <h3 className="text-[#f2e1f2cf] text-base">{recipe}</h3>
            </div>
            <p className="text-[#BB8506] text-lg">${price}</p>
        </div>
    );
};

export default MenuItem;