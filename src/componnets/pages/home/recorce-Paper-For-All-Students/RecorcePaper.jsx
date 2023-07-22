import { FaLongArrowAltRight } from "react-icons/fa";
import Titleses from "../../../../hookes/Titleses";


const RecorcePaper = () => {
    return (
        <div className="bg-gray-100 py-12">
            <Titleses title='Tools and resources for every student.' />
            <div>
                <div className="hero font-serif">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="md:flex">
                            <img src="https://www.cappex.com/sites/default/files/styles/default_image_style/public/c-image-images/transfer-students%200.5x.png?itok=biJunFPM" alt="" />
                            <div className="md:ml-4">
                                <h1 className="text-2xl font-bold text-teal-500">High School Students</h1>
                                <p className="py-6">Start planning as a senior, junior, sophomore, or freshman. Get exactly what you need at any stage of your college journey.</p>
                                <button className="btn btn-link text-black">chouse college <FaLongArrowAltRight /> </button>
                            </div>
                        </div>
                        <div className="md:flex items-center">
                            <img src='https://www.cappex.com/sites/default/files/styles/default_image_style/public/c-image-images/high-school-students-1x.png?itok=UnhvqvZN' alt="" />
                            <div className="md:ml-4">
                                <h1 className="text-2xl font-bold text-teal-500">Transfer Students</h1>
                                <p className="py-6">Want to transfer schools? We offer tools and resources for students who are already enrolled to help you transfer schools with confidence.</p>
                                <button className="btn btn-link text-black">chouse college <FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecorcePaper;