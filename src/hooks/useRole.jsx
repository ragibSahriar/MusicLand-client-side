
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../AuthProvider/Authprovider';


const useRole = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({}); // State to store the role data

  useEffect(() => {
    const fetchRoleData = async () => {
      try {
        const response = await fetch(`/role?email=${user?.email}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching role data:", error);
        setData({}); // Handle error by setting data to an empty object or handle it in an appropriate way
      }
    };

    if (user?.email) {
      fetchRoleData();
    }
  }, [user]);

  return { data };
};

export default useRole;
