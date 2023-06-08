import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usersData = () => {
    const { data: users = [],isLoading: loading, refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
      });
      return [users, loading, refetch]
};

export default usersData;