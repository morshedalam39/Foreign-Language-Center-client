import { useQuery } from "react-query"


const useAllClass=()=>{
    const {refetch, data=[]}=useQuery(['user'], async()=>{
        const res =await fetch ('http://localhost:5000/class')
        const allClass =await res.json()
        return allClass
    })
    return{data, refetch}
}

export default useAllClass;




