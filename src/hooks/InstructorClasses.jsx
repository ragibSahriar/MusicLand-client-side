import React from 'react';
import { useQuery } from '@tanstack/react-query';

const InstructorClasses = () => {
    const { data: classes = [],isLoading: loading, refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
      });
      return [classes, loading, refetch]
};

export default InstructorClasses;



// const usersData = () => {
//     const { data: users = [],isLoading: loading, refetch } = useQuery(['users'], async () => {
//         const res = await fetch('http://localhost:5000/users');
//         return res.json();
//       });
//       return [users, loading, refetch]
// };

// export default usersData;

// const useAllClasses = () => {
   
   
//     const fetchAllClasses = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/addclass');
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const data = fetchAllClasses();
  
//     return data;
//   };
  
//   export default useAllClasses;