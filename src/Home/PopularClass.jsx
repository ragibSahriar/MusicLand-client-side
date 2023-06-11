import React from 'react';
import ClassCard from '../Pages/Dashboard/instructor/ClassCard';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
      });
    return (
        <div>
            <div>
      <ul>
        {classes.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
        ))}
      </ul>
      {/* <button onClick={refetch}>Refresh</button> */}
    </div>
        </div>
    );
};

export default PopularClass;