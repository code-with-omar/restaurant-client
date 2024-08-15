import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className="my-20 lg:my-32 md:my-24">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"} />
            <div className="">
                <Swiper navigation={true} modules={[Navigation]}>

                    {
                        reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col items-center w-3/4 xl:w-4/5 lg:w-4/5 mx-auto ">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className="w-10 h-10 md:w-14 md:h-14 lg:h-16 lg:w-16 mt-5 md:mt-8 lg:mt-10 text-slate-400" />
                                    <h4 className="text-white text-base text-justify font-normal mt-5 md:mt-8 lg:mt-10">{review.details}</h4>
                                    <h3 className="text-[#CD9003] text-lg lg:text-3xl md:text-2xl font-bold mt-2">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Testimonials;

