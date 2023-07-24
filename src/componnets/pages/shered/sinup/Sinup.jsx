import { FaExclamation, FaEye, FaEyeSlash, FaUserGraduate, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import google from '../../../../assets/google.png'
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useState } from "react";
import useAutheProvider from "../../../../hookes/useAutheProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Sinup = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const { handleSinup, handleUpdateProfile, handleSininWitheGoogle} = useAutheProvider();
    const navigat = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const { adress, email, imgUrl, phoneNumber, userName, password } = data;
        handleSinup(email, password)

            .then(result => {
                handleUpdateProfile(userName, imgUrl)
                    .then(result => {
                        console.log(result)
                        navigat('/')
                    })
                console.log(result.user)
                axios.post('https://colege-cunnect-backends-su44248124.vercel.app/usersInformations', { adress, email, phoneNumber })
                    .then((response) => {
                        console.log(response)
                        Swal.fire('user sinup sucssesfully')
                    })
            })
            .catch(err => console.error(err))
        reset()
    };
    const handleGoogleSinup = () => {
        handleSininWitheGoogle()
            .then(result => {
                console.log(result.user)
                navigat('/')
                axios.post('https://colege-cunnect-backends-su44248124.vercel.app/usersInformations', {  email:result.user.email, })
                    .then((response) => {
                        console.log(response)
                    });
                
            })
            .catch(err => console.error(err));
    };
    return (
        <div className="  py-28  w-11/12 mx-auto ">
            <div className="justify-between  lg:flex ">
                <div className="text-center lg:py-44 md:w-[95%] lg:text-left font-serif">

                    <h1 className="text-5xl font-bold text-teal-500 my-4">Embark on Your Journey!!</h1>
                    <p>We are delighted to welcome you to our college community. Please fill in the required information below to create your personalized account and unlock a world of opportunities.

                        At our college, we believe in fostering a vibrant and inclusive community of learners, dreamers, and achievers. Whether you are a prospective student eager to join our ranks, a current member of our college family seeking new adventures, or an alumnus returning to reconnect, we are thrilled to have you as part of our journey.

                        By signing up, you gain access to a wealth of resources, academic information, and exciting campus updates. We strive to provide you with a seamless and secure signup experience, ensuring your privacy and data protection at all times.

                        Your college account will be your gateway to numerous academic and extracurricular activities. From exploring a diverse range of courses to engaging in student clubs and events, theres always something happening on our dynamic campus.

                        Should you encounter any questions or require assistance during the signup process, our dedicated support team is just a click away. We are here to assist you on your educational journey and make your experience with us truly exceptional.

                        Thank you for choosing our college, where dreams take flight and ambitions find roots. Lets embark on this incredible adventure together!

                        Best regards,
                        The College cunnect Team</p>
                </div>
                <div className="md:ml-16 mt-4  w-full  ">
                    <div className="flex items-center justify-center">
                        <FaUserGraduate className="text-3xl text-teal-500" />  <h1 className="text-3xl text-teal-500 font-serif text-center ml-4 my-2"> sinup now</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate name</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="user name" {...register("userName", { required: true, maxLength: 80 })} />
                        </div>
                        {errors.userName?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className=''/>name  is required</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </div>
                        {errors.email?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className=''/>email is required</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <PhoneInput
                                className='input input-bordered input-accent w-full'
                                defaultCountry="US"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                {...register("phoneNumber", { required: true })} />
                        </div>
                        {errors.phoneNumber?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className=''/>phone numbar  is required</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Img url</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="img url" {...register("imgUrl", { required: true })} />
                            {errors.imgUrl?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className=''/>img url  is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Adress</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="Adress" {...register("adress", { required: true })} />
                        </div>
                        {errors.adress?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className=''/>adress is required</p>}

                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>

                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                    required: true, minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered  w-full" />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                        </div>
                        {errors.password?.type === 'required' && <p className="text-red-500 flex items-center">password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500 flex items-center">password must be atlist 6 charectar</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-500 flex items-center">Password is smaller then 20 charectar</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500 flex items-center">password must be one uppercase one lower case one numbar and one special cherecter</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full"><FaUserPlus />Sinup</button>
                        </div>
                    </form>
                    <div className="flex items-center">
                        <p className="text-center ml-4 md:ml-9">new there please</p><Link to={'/login'}><button className="btn btn-link">Login</button></Link>

                    </div>
                    <div className="divider text-teal-500">OR</div>
                    <div>
                        <Link onClick={handleGoogleSinup} className="" > <div className="flex items-center justify-center border border-teal-500 rounded-full mx-4 my-4 py-2">
                            <img src={google} className="w-4 h-4" /><button  className="ml-4">  login withe google</button>
                        </div></Link>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Sinup;