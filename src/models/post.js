const posts = [
  {
    id: 1,
    userId: 1,
    title: "Mastering Express.js & MVC Architecture",
    content:
      "Separating routes, controllers, and models creates a clean codebase that scales effortlessly as your project grows.",
    tags: ["nodejs", "express", "backend", "architecture"],
    likes: 24,
    createdAt: "2026-10-18T10:00:00.000Z",
    updatedAt: "2026-10-18T10:00:00.000Z",
  },
  {
    id: 2,
    userId: 2,
    title: "Designing Intuitive Developer APIs",
    content:
      "Consistent naming conventions, standard HTTP status codes, and clear JSON payloads make life easier for frontend teams.",
    tags: ["design", "api", "rest", "dx"],
    likes: 42,
    createdAt: "2026-10-19T13:20:00.000Z",
    updatedAt: "2026-10-19T13:20:00.000Z",
  },
  {
    id: 3,
    userId: 3,
    title: "Why In-Memory Mocking Accelerates Bootcamp Learning",
    content:
      "Before introducing database complexity and migrations, mastering array manipulations with filter, find, and map builds solid fundamentals.",
    tags: ["javascript", "arrays", "bootcamp"],
    likes: 18,
    createdAt: "2026-10-20T08:45:00.000Z",
    updatedAt: "2026-10-20T08:45:00.000Z",
  },
];
const comments=require("./comments")
//المنشورات (/api/v1/posts):
//  GET / (?tag=),
//  GET /:id,//
//  POST /, //
// PATCH /:id,// 
// DELETE /:id,//
//  POST /:id/like,//
//  GET /:id/comments.//
module.exports = {
getid:(id)=>posts.find(e=>e.id==id) ||null,



getAllPosts: (tag) => {
    if (tag) {
      return posts.filter(e => e.tags && e.tags.includes(tag));
    }
    return posts;
  },


getbyid_commnets:(id)=>{
     return  comments.filter(e=>e.postId==id)
},


create:(newpost)=>{
             const id_ew = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
            const new_m={id:id_ew,...newpost}
            posts.push(new_m)
          return posts
            },




delete:(id)=> {
posts = posts.filter(e => e.id !== id);
  return posts;
},


update:(id,newdata)=>{
let data_index=posts.findIndex(e=>e.id==id)
if (data_index === -1) {return null};
posts[data_index]={id:id,...newdata,...posts[data_index]}
return posts
}
,


//  POST /:id/like,
postlike: (id) => {
    const post = posts.find(e => e.id == id);
    if (!post) return null;
    post.likes += 1;
    return post.likes;
  }
,


//  GET /?tags.//

gettag:(ta_g)=>{
   const elements_bytags=posts.filter(e=>e.tags && e.tags.includes(ta_g))
   if(!elements_bytags) {return null}
   return elements_bytags

}











}
