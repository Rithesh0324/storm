console.log("hello world");

async function data(){
    try{
    let res=await fetch("youtube.com");
    let data=res.json();
    return data
    }catch(err){
        console.error("error fount in fetching")
    }
}