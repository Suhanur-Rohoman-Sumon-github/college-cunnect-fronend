import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Titleses from '../../../../hookes/Titleses';
import useImages from '../../../../hookes/useImages';

const Gelary = () => {
    const imges = useImages()

    return (
        <div className='w-11/12 mx-auto mt-12'>
            <Titleses title='Memories Captured' />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    imges.map(imge=><SwiperSlide key={imge._id}><img className='h-[600px] w-[1150px] block' src={imge.image} alt="" /></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Gelary;