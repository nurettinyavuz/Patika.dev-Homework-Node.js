const posts = [
  { postName: "Post 1", content: "content 1" },
  { postName: "Post 2", content: "content 2" },
  { postName: "Post 3", content: "content 3" },
];

const listpost =()=>{
  posts.map((value)=>{
   console.log(value.postName),
   console.log(value.content);
  }); 
}

const addPosts=(newPosts)=>{
    const promise = new Promise((resolve,reject)=>{
    posts.push(...newPosts);
    if(posts){
     resolve(posts);   
    }
    else{
       reject("Hata Oluştu...")
    }
    
   }) 
   return promise;
}

async function showPost(){
    try{
        await addPosts([
        { postName: "Post 4", content: "content 4" },
        { postName: "Post 5", content: "content 5" },
        { postName: "Post 6", content: "content 6" },   
    ]);

    listpost();

    } catch(error){
        console.log(error);
    }
}

showPost();