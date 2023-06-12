import { useContext } from "react";
import { AuthContext } from './../AuthProvider/Authprovider';
import { useQuery } from "@tanstack/react-query";



// const useRole = () => {
//   const { user } = useContext(AuthContext)
//   const { data = {} } = useQuery({
//     queryKey: ["role", !!user?.email],
//     queryFn: async () => {
//       const res = await fetch(`https://music-cloud-server.vercel.app/role?email=${user?.email}`)

      
//       return  res.json()
      
//     },
//   });
//   console.log(data);
//   return data.role ;
// };

// export default useRole;



const useRoleChange = () => {
  const { user, loading } = useContext(AuthContext);
  const { data = {} } = useQuery({
    queryKey: ["role", !!user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await fetch(
        `https://music-cloud-server.vercel.app/role?email=${user?.email}`
      );
      const result = await res.json();
      console.log(result);
      return result;
    },
  });

  return { data };
};
export default useRoleChange;
