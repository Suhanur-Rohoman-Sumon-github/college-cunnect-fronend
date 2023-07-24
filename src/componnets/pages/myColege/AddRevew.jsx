import { useForm } from "react-hook-form";
import { FaExclamation, FaGrinStars } from "react-icons/fa";
import useAutheProvider from "../../../hookes/useAutheProvider";
import axios from "axios";
import Swal from "sweetalert2";


const AddRevew = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAutheProvider()
    const onSubmit = data => {
        console.log(data)
        const { customerName,reviewText,ratings} = data
        axios.post('http://https://colege-cunnect-backends-su44248124.vercel.app/addRevew', { customerName,reviewText,ratings:parseFloat(ratings) ,customerImage :user?.photoURL })
            .then((response) => {
                console.log(response)
                Swal.fire('revew added ')
            })
        reset()
    }
    return (
        <div className="py-28 md:flex items-center w-9/12 mx-auto">
            <div className="md:w-[70%]">
                <h1 className="text-5xl font-bold text-teal-500 my-4">please rate us!!</h1>
                <p>Welcome to the College Website Reviews page! We know how important it is for students to make informed decisions
                    about their education, and thats why weve created this platform to provide honest and unbiased reviews of
                    various college websites.</p>

                <p>Here, youll find real feedback from current and past students who have experienced these college websites
                    firsthand. Whether youre looking for information about a specific college website usability, course
                    offerings, campus life, or any other aspect, youll find valuable insights right here.</p>

                <p>Our goal is to empower students with the information they need to choose the best-fit college website for their
                    academic journey. We encourage users to leave their own reviews and contribute to this growing community of
                    college website reviews.</p>

                <p>Explore the reviews, discover hidden gems, and make an informed choice for your higher education adventure.
                    Remember, your opinion matters!</p>

                <p>Happy browsing!</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                <div className="flex items-center justify-center">
                    <FaGrinStars className="text-3xl text-teal-500" />  <h1 className="text-3xl text-teal-500 font-serif text-center ml-4 my-2"> rate us</h1>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input className='input input-bordered input-accent w-full' value={user?.displayName} type="text" placeholder="name" {...register("customerName" )} />
                </div>
                {errors.customerName?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className='' />name  is required</p>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">write some text</span>
                    </label>
                    <textarea className="textarea textarea-accent" {...register("reviewText", { required: true })} placeholder="Bio"></textarea>
                </div>
                {errors.reviewText?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className='' />reviewText  is required</p>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input className='input input-bordered input-accent w-full' type="numbar" placeholder="please write a numbar under 5" {...register("ratings", { required: true})} />
                </div>
                {errors.ratings?.type === 'required' && <p className="text-red-500 flex items-center"><FaExclamation className='' />ratings  is required</p>}
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full"><FaGrinStars />Rate now</button>
                </div>
            </form>
        </div>
    );
};

export default AddRevew;