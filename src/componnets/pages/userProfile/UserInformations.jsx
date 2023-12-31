
import useUsersData from "../../../hookes/useUsersData";
const UserInformations = () => {
    const userData = useUsersData();


    return (
        <div>
            {userData[0] ? (
                <div className="grid md:grid-cols-3 gap-4 mt-12">
                    <div>
                        <h1 className="text-teal-500 text-3xl">address:</h1>
                        {userData[0][0]?.address ? (
                            <p>{userData[0][0]?.address}</p>
                        ) : (
                            <p>please update your profile </p> 
                        )}
                    </div>
                    <div>
                        <h1 className="text-teal-500 text-3xl">email:</h1>
                        {userData[0][0]?.email ? (
                            <p>{userData[0][0]?.email}</p>
                        ) : (
                             <p>please update your profile </p> 
                        )}
                    </div>
                    <div>
                        <h1 className="text-teal-500 text-3xl">phoneNumber</h1>
                        {userData[0][0]?.phoneNumber ? (
                            <p>{userData[0][0]?.phoneNumber}</p>
                        ) : (
                            <div>
                                <p>please update your profile </p> 
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p>loading............</p>
            )}
        </div>
    );
};

export default UserInformations;
