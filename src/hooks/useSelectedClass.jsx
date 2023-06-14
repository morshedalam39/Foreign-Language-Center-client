import { useQuery } from "react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./axiosSecure"



const useSelectedClass=()=>{
    const {user}=useAuth()
    const axios= useAxiosSecure();

    const {refetch, data=[], isLoading}=useQuery(['selectedClass' , user?.email],
     async()=>{
        
        const res =await axios.get(`/selectedClass/${user?.email}`)
        const selectedClass =await res.data
        return selectedClass
    })
    return{data, refetch, isLoading}
}

export default useSelectedClass;




