const Cover = ({ img, title, describe }) => {
    return (
        <div
            className="hero h-[450px] lg:h-[600px] md:h-[550px] bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content  text-center bg-slate-900 bg-opacity-50  w-3/4 mx-auto px-12 lg:px-48 py-12 lg:py-24 self-center rounded">
                <div className="max-w-md uppercase">
                    <h1 className="mb-5 text-white text-4xl md:text-6xl lg:text-7xl font-bold">{title}</h1>
                    <p className="mb-5 text-base md:text-lg lg:text-xl text-white font-semibold">{describe}</p>

                </div>
            </div>
        </div>
    );
};

export default Cover;