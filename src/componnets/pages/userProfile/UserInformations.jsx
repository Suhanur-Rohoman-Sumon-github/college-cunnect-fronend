import useUsersData from "../../../hookes/useUsersData";


const UserInformations = () => {
    const userData = useUsersData()
    console.log(userData[0][0])
    return (
        <div>
           {
            userData[0]? <div className="grid md:grid-cols-3 gap-4 mt-12">
               <div>
               <h1 className="text-teal-500 text-3xl">adress:</h1>
                {
                   userData[0][0].adress? <p>{userData[0][0].adress}</p>:<button className="btn-primary">add adress</button>
                }
               </div>
               <div>
               <h1 className="text-teal-500 text-3xl">email:</h1>
                {
                    userData[0][0].email? <p>{userData[0][0].email}</p>:<button className="btn-primary">add email</button>
                }
               </div>
               <div>
               <h1 className="text-teal-500 text-3xl">phoneNumber</h1>
                {
                    userData[0][0].phoneNumber? <p>{userData[0][0].phoneNumber}</p>:<button className="btn-primary">add adress</button>
                }
               </div>
               
             </div> :<p>loading............</p>
           }
        </div>
    );
};

export default UserInformations;