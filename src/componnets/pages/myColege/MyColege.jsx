import useAdmition from "../../../hookes/useAdmition";


const MyColege = () => {
    const admitionData = useAdmition()
    console.log(admitionData[0])
    return (
        <div className="overflow-x-auto pt-28 ">
            <table className="table flex mb-10">
                <thead>
                    <tr className="text-teal-500 text-2xl">
                        <th>#</th>
                        <th>colege img</th>
                        <th>colege name</th>
                        <th>subject</th>
                        <th>user name</th>
                        <th>email</th>
                        <th>phone Numbar</th>
                        <th>date of birth</th>
                    </tr>
                </thead>
                <tbody>

                    {admitionData[0] ?
                        admitionData[0].map((coleges, index) => (
                            <tr className="card-text-secondary" key={coleges._id}>
                                <td>{index + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={coleges.colegeImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                    
                                </td>
                                <td>{coleges.colege}</td>
                                <td>{coleges.subject}</td>
                                <td>{coleges.userName}</td>
                                <td>{coleges.email}</td>
                                <td>{coleges.phoneNumbar}</td>
                                <td>{coleges.dateOfBirth}</td>
                               
                            </tr>
                        ))
                        : (
                            <div
                               className="w-9/12 mx-auto ml-80"
                            >
                                <span className="loading loading-spinner loading-lg text-teal-500"></span>
                            </div>
                        )}

                </tbody>
            </table>
        </div>
    );
};

export default MyColege;