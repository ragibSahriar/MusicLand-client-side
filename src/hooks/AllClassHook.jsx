import { useQuery } from "@tanstack/react-query";

const AllClassHook = () => {
  const { data = [], refetch } = useQuery({
    queryKey: ["addClass"],
    queryFn: async () => {
      const res = await fetch("https://music-cloud-server.vercel.app/classes");
      const result = await res.json();
      return result;
    },
  });

  return [data, refetch];
};

export default AllClassHook;
