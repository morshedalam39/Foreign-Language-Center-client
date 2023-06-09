
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const SetRole =() =>{
    const {user}=useAuth();
    const { refetch, data= {}, isLoading} = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/role?email=${user?.email}`)
            return res.json();
        },
    })

    return {data, refetch, isLoading}

}
export default SetRole;