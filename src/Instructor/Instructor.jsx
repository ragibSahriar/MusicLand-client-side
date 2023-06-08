import React from 'react';
import usersData from '../hooks/usersData';
import Card from './Card';

const Instructor = () => {
  const [users, , refetch] = usersData();
  const instructors = users.filter(user => user.role === 'instructor');

  return (
    <div>
        {
            instructors.map(instructor=> <Card
                key={instructor._id} instructor={instructor}
            ></Card>)
        }
    </div>
  );
};

export default Instructor;
