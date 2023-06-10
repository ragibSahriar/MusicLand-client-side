
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';

const MyClasses = () => {
  const { data: classes = [], isLoading: loading, refetch } = useQuery(['classes'], async () => {
    const res = await fetch('http://localhost:5000/classes');
    return res.json();
  });

  // Use the fetched data in your component
  if (loading) {
    return <div>Loading...</div>;
  }

  if (classes.length === 0) {
    return <div>No classes found.</div>;
  }

  return (
    <div>
      <ul>
        {classes.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
        ))}
      </ul>
      {/* <button onClick={refetch}>Refresh</button> */}
    </div>
  );
};

export default MyClasses;
