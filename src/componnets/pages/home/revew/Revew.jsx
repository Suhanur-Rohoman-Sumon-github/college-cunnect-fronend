import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import useRevews from '../../../../hookes/useRevews';
import StarRatings from 'react-star-ratings';
import { FaQuoteLeft } from 'react-icons/fa';
const Revew = () => {
    const revews = useRevews()
    return (
        <div className='my-10 py-10'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    revews.map(revew => <SwiperSlide key={revew._id}>
                        <div className=' text-center'>
                            <img className='h-24 w-24 rounded-full mx-auto' src={revew.customerImage} alt="" />
                            <FaQuoteLeft className='text-4xl text-center w-full mx-auto my-4' />
                            <h1 className='text-2xl text-teal-500 py-4'>{revew.customerName}</h1>
                            <StarRatings
                                rating={revew.ratings}
                                starDimension="25px"
                                starSpacing="5px"
                                starRatedColor="yellow"
                            />
                            <p className='py-4'>{revew.reviewText}</p>
                            
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Revew;