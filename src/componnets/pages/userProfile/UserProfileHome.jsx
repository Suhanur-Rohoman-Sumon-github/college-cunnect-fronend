import useAutheProvider from "../../../hookes/useAutheProvider";
import useUsersData from "../../../hookes/useUsersData";


const UserProfile = () => {
    const { user } = useAutheProvider()
    const userData = useUsersData()
    console.log(userData[0])
    return (
        <div className="md:flex items-center justify-center">
            <div>
                <img className="pt-14 w-44 h-44 " src={user?.photoURL}  alt="" />
                <button className="btn btn-primary my-4">edit profile</button>
               
            </div>
            <div className="ml-4">
            {userData[0] ? <div><h1 className="text-4xl text-teal-500">{user?.displayName}</h1><p>{user?.email}</p> <p>{userData[0]?.phoneNumber}</p> 
           
            </div> : <p>loding....</p>}
            </div>
        </div>
    );
};

export default UserProfile;