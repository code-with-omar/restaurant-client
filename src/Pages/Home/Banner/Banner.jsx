import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../../../assets/home/01.png'
import img2 from './../../../assets/home/02.png'
import img3 from './../../../assets/home/03.png'
import img4 from './../../../assets/home/04.png'
import img5 from './../../../assets/home/05.png'
import img6 from './../../../assets/home/06.png'


const Banner = () => {
    return (
        <section>
           
            <Carousel autoPlay interval={3000} infiniteLoop >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;