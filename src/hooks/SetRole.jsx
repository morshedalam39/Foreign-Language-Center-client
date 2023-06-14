
import { useQuery } from 'react-query';
import useAuth from './useAuth';
import useAxiosSecure from './axiosSecure';

const SetRole =() =>{
    const {user}=useAuth();
    const axios =useAxiosSecure()
    const { refetch, data= {}, isLoading} = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axios(`/role?email=${user?.email}`)
            return res.data;
        },
    })

    return {data, refetch, isLoading}

}
export default SetRole;