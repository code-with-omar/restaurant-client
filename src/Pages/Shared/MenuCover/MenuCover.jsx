

const MenuCover = ({title,details}) => {
    return (
        <section className=" bg-custom-image hero  h-[450px] lg:h-[600px] md:h-[550px] bg-no-repeat bg-cover">
           <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content  text-center bg-slate-900 bg-opacity-50  w-3/4 mx-auto px-12 lg:px-48 py-12 lg:py-24 self-center rounded">
                <div className=" uppercase">
                    <h1 className="mb-5 text-white text-4xl md:text-6xl lg:text-7xl font-bold">{title}</h1>
                    <p className="my-5 text-base md:text-lg lg:text-xl text-white font-normal">{details}</p>

                </div>
            </div>
        </section>
    );
};

export default MenuCover;