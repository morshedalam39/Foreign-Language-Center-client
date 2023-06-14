import { useQuery } from "react-query"


const useUser=()=>{
    const {refetch, data=[]}=useQuery(['user'], async()=>{
        const res =await fetch ('https://foreign-language-center-client.vercel.app/users')
        const allUsers =await res.json()
        return allUsers
    })
    return{data, refetch}
}

export default useUser;




