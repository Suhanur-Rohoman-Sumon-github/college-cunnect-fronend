import { FaUserPlus } from "react-icons/fa";
import useAutheProvider from "../../../hookes/useAutheProvider";
import useUsersData from "../../../hookes/useUsersData";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";


const UserProfile = () => {
    const { user,handleUpdateProfile } = useAutheProvider()
    
    const userData = useUsersData()
    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        console.log(data)
        const {phoneNumbar,adress,name,imgUrl} = data;
        handleUpdateProfile(name, imgUrl)
        axios.put('http://localhost:5000/updateUserProfile', { email:user?.email, phoneNumbar, adress })
            .then((response) => {
                console.log(response)
                alert("profile updated please refresh this page!");
            })
        reset()
    }
    return (
        <div className="md:flex items-center justify-center">
            <div>
                <img className="pt-14 w-44 h-44 " src={user?.photoURL} alt="" />
                {/* Open the modal using ID.showModal() method */}
                <button className="btn btn-primary  mt-4" onClick={() => window.my_modal_5.showModal()}>update ypur profile</button>
                <dialog id="my_modal_5" className="modal">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box md:w-6/12 max-w-5xl">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="img url" {...register("name")} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Img url</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="img url" {...register("imgUrl",)} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">adress</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="img url" {...register("adress",)} />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone numbar</span>
                            </label>
                            <input className='input input-bordered input-accent w-full' type="text" placeholder="img url" {...register("phoneNumbar",)} />

                        </div>
                        <button  className="btn btn-primary w-full my-4"><FaUserPlus />update now</button>
                        
                    </form>
                </dialog>

            </div>
            <div className="ml-4">
                {userData[0] ? <div><h1 className="text-4xl text-teal-500">{user?.displayName}</h1><p>{user?.email}</p> <p>{userData[0]?.phoneNumber}</p>

                </div> : <p>loding....</p>}
            </div>
        </div>
    );
};

export default UserProfile;