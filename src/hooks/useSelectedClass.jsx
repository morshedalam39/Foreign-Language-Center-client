import { useQuery } from "react-query"
import useAuth from "./useAuth"


const useSelectedClass=()=>{
    const {user}=useAuth()
    const {refetch, data=[], isLoading}=useQuery(['selectedClass' , user?.email], async()=>{
        const res =await fetch (`http://localhost:5000/selectedClass/${user?.email}`)
        const selectedClass =await res.json()
        return selectedClass
    })
    return{data, refetch, isLoading}
}

export default useSelectedClass;




