import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePreviousTasks = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["previousTask", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/newTasks?email=${user.email}`);
      return res.data;
    },
  });

  return { data, isLoading, refetch };
};

export default usePreviousTasks;
