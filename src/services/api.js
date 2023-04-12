import axious from 'axious'



 const addUser=async(add)=>{
    try{
        await axious.get(URL,add)

    }catch(error){
        console.log("Api is not workin successful",error,message)
    }   
}

export default addUser