import axios from 'axios'


 const URL="http://localhost:8000/"
 const addUser=async(data)=>{
   
    try{
       await axios(URL,data)

    }catch(error){
        console.log("Api is not workin successful",error.message)
    }   
}

export default addUser