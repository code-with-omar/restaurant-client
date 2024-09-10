const DashboardTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-10">
            <p className="uppercase text-base lg:text-xl md:text-lg text-[#0b0101]  italic font-semibold">---{subHeading}---</p>
            <h2 className="text-xl text-[#028bfb] lg:text-4xl md:text-3xl border-y-2 border-y-[#E8E8E8] mx-auto py-2 md:py-4 my-2 md:my-4 font-bold uppercase">{heading}</h2>
        </div>
    );
};

export default DashboardTitle;