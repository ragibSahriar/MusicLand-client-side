import { useContext } from "react";
import { AuthContext } from './../AuthProvider/Authprovider';
import { useQuery } from "@tanstack/react-query";



const useRole = () => {
  const { user } = useContext(AuthContext)
  const { data = {} } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/role?email=${user?.email}`)

      
      return  res.json()
      
    },
  });
console.log(data);
  return data.role ;
};

export default useRole;