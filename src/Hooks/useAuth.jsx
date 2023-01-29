import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/users`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });

                setAuth(true);
                setUser(res.data?.email);
            } catch (error) {
                setAuth(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { auth, user, isLoading };
};

export default useAuth;
