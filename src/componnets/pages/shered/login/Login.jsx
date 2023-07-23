import { FaEye, FaEyeSlash, FaUserGraduate, FaUserPlus } from "react-icons/fa";
import google from '../../../../assets/google.png'
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAutheProvider from "../../../../hookes/useAutheProvider";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigat = useNavigate()
    const {handleLogin,handleSininWitheGoogle} =useAutheProvider()
    const onSubmit = data => {
        console.log(data)
        const {  email, password } = data
        handleLogin(email,password)
        .then(result=>{
            console.log(result.user)
            navigat('/')
        })
        reset()
    };
    const handleGoogleLogin =()=>{
        handleSininWitheGoogle()
        .then(result => {
            console.log(result.user)
            navigat('/')
            axios.post('http://localhost:5000/usersInformations', {  email:result.user.email, })
                .then((response) => {
                    console.log(response)
                })
            
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="  py-28 lg:py-44 w-11/12 mx-auto ">
            <div className="justify-between  lg:flex ">
                <div className="text-center md:w-[95%] lg:text-left font-serif">
                    
                    <h1 className="text-5xl font-bold text-teal-500 my-4">Welcome Back!!</h1>
                    <p>We are delighted to have you here. Please enter your credentials below to access your personalized account and unlock a world of opportunities.

                        At our college, we believe in fostering a vibrant and inclusive community of learners, dreamers, and achievers. Whether you are a prospective student, a current member of our college family, or an alumnus, we are thrilled to have you as part of our journey.

                        As you log in, you gain access to a wealth of resources, academic information, and exciting campus updates. We strive to provide you with a seamless and secure login experience, ensuring your privacy and data protection at all times.

                        Remember, your college account is a gateway to numerous academic and extracurricular activities. From exploring courses to engaging in student clubs and events, theres always something happening on our campus.

                        If you encounter any issues during the login process or have any questions, our dedicated support team is just a click away. We are here to assist you on your educational journey and make your experience with us truly exceptional.

                        Thank you for choosing our college, where dreams become realities and ambitions find wings. Lets embark on this incredible adventure together!

                        Best regards,
                        The College Website Team</p>
                </div>
                <div className="md:ml-16 mt-4  w-full  ">
                    <div className="flex items-center justify-center">
                    <FaUserGraduate className="text-3xl text-teal-500" />  <h1 className="text-3xl text-teal-500 font-serif text-center ml-4 my-2"> login now</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </div>
                        {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}
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
                            {errors.password?.type === 'required' && <p className="text-red-500">password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">password must be atlist 6 charectar</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-500">Password is smaller then 20 charectar</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">password must be one uppercase one lower case one numbar and one special cherecter</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full"><FaUserPlus /> Login</button>
                        </div>
                    </form>
                    <div className="flex items-center">
                    <p className="text-center ml-4 md:ml-9">new there please</p><Link to={'/sinup'}><button className="btn btn-link">Sinup</button></Link>
                    
                    </div>
                    <div className="divider text-teal-500">OR</div>
                    <div>
                    <Link onClick={handleGoogleLogin} className="" > <div className="flex items-center justify-center border border-teal-500 rounded-full mx-4 my-4 py-2">
                    <img src= {google} className="w-4 h-4"/>   <button className="ml-4">  login withe google</button>
                    </div></Link>
                  
                    </div>
                </div>
                
            </div>
         
        </div>
    );
};

export default Login;