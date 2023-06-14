
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useClass =() =>{
    const {user}=useAuth();
    const { refetch, data= [], isLoading} = useQuery({
        queryKey: ['instractorClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://foreign-language-center-client.vercel.app/class/${user?.email}`)
            return res.json();
        },
    })

    return {data, refetch, isLoading}

}
export default useClass;