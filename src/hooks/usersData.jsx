import { useQuery } from '@tanstack/react-query';

const usersData = () => {
    const { data: users = [],isLoading: loading, refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://music-cloud-server.vercel.app/users');
        return res.json();
      });
      return [users, loading, refetch]
};

export default usersData;