import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAutheProvider from "../hookes/useAutheProvider";

const PrivateRoute = ({ children }) => {
    const [userDataFetched, setUserDataFetched] = useState(false);
    const navigat = useNavigate();
    const { user, loading } = useAutheProvider();

    useEffect(() => {
        if (!loading) {
            setUserDataFetched(true);
        }
    }, [loading]);
    if (!userDataFetched) {
        return <progress className="progress w-56"></progress>;
    }
    if (user) {
        return children;
    } else {
        navigat('/login');
    }
};

export default PrivateRoute;
