import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../../../assets/graduation-take-black-yellow-tassel-front-bokeh-blurry-background_43157-129.avif';
import img1 from '../../../../assets/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.avif';
import img2 from '../../../../assets/4.avif';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banners = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                    <div className=" "></div>
                    <div className="  ">
                        <div className="w-[60%]  ml-12 pl-12 py-16  shadow-2xl font-mono">
                            <h1 className="text-4xl font-bold  py-5 text-teal-500"><span className='text-white'>Admission</span> Open for 2023</h1>
                            <p className="my-4 text-lg text-white py-5">
                                Welcome to college cunnct Admission Portal. Apply now and embark on an exciting educational journey with us.
                                Our dedicated faculty and diverse campus community await your arrival. Dont miss this opportunity to
                                shape your future!
                            </p>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                    <div className=" "></div>
                    <div className="  ">
                        <div className="w-[60%] ml-12 pl-12 py-16 shadow-2xl font-mono">
                            <h2 className="text-4xl font-bold  py-5 text-teal-500 "><span className='text-white'>Scholarship</span> Opportunities</h2>
                            <p className="my-4 text-lg text-white py-5">
                                At college cunnct, we believe in recognizing and rewarding academic excellence. We offer a range of
                                scholarships to exceptional students who demonstrate outstanding achievements in their academics,
                                sports, or extracurricular activities. Check our scholarship page to see if you qualify for any of
                                our prestigious scholarships.
                            </p>


                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                    <div className=" "></div>
                    <div className="  ">
                        <div className="w-[60%] ml-12 pl-12 py-16 shadow-2xl font-mono">
                            <h2 className="text-4xl font-bold  py-5 text-teal-500 "><span className='text-white'>Explore</span> Our Campus Virtually</h2>
                            <p className="my-4 text-lg text-white py-5">
                                Cant visit our campus in person? No worries! Take a virtual tour of our state-of-the-art facilities,
                                vibrant classrooms, and beautiful campus grounds from the comfort of your home. Get a glimpse of the
                                college life that awaits you at college cunnct. Click here to start your virtual campus tour now!
                            </p>

                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Banners;
