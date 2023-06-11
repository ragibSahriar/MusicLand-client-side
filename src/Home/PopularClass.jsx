import React from 'react';
import ClassCard from '../Pages/Dashboard/instructor/ClassCard';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
      });
    return (
    <div className='container mx-auto'>
          <h2 className='text-center text-4xl  p-3 mb-2 border-b-2'>- PUPULAR CLASSES -</h2>
      <div className='flex flex-wrap container mx-auto space-x-4 space-y-4'>
        {classes.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
        ))}
        </div>
    </div>
    );
};

export default PopularClass;