
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useClass =() =>{
    const {user}=useAuth();
    const { refetch, data= [], isLoading} = useQuery({
        queryKey: ['instractorClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class/${user?.email}`)
            return res.json();
        },
    })

    return {data, refetch, isLoading}

}
export default useClass;