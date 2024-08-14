const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-1/2 md:w-1/2 lg:w-1/4 mx-auto my-12 md:my-16">
            <p className="text-base lg:text-xl md:text-lg text-[#D99904] font-normal italic ">---{subHeading}---</p>
            <h2 className="text-xl lg:text-4xl md:text-3xl border-y-2 border-y-[#E8E8E8] mx-auto py-2 md:py-4 my-2 md:my-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;