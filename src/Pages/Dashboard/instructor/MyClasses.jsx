import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/Authprovider';
import MyClassCard from './MyClassCard'; // Import the MyClassCard component

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/addClass/myclass/${user?.email}`);
        if (!response.ok) {
          throw new Error('Error fetching classes');
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
        // Handle error, e.g., show an error message
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  return (
    <div className='grid grid-cols-3 container mx-auto mt-5'>
      {classes.map((classItem) => (
        <MyClassCard key={classItem.id} classItem={classItem} />
      ))}
    </div>
  );
};

export default MyClasses;
