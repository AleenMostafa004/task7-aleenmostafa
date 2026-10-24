const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    text: "Great summary Karim! MVC pattern really keeps things organized.",
    createdAt: "2026-10-18T11:15:00.000Z",
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    text: "Especially love the separation between routes and business controllers.",
    createdAt: "2026-10-18T12:00:00.000Z",
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    text: "Agree 100%! REST predictability is gold for any client app.",
    createdAt: "2026-10-19T14:30:00.000Z",
  },
  {
    id: 4,
    postId: 3,
    userId: 4,
    text: "Practicing with arrays first gave me a much clearer mental model for CRUD.",
    createdAt: "2026-10-20T09:10:00.000Z",
  },
];

const posts=require("./post")


module.exports = {


getid:(id)=> comments.find((e)=>e.id==id) ||null,

create:(newcomments)=>{
             const id_newp = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
            const new_pp={id:id_newp,...newcomments}
            comments.push(new_pp)
          return comments
            },


delete:(id)=> {
comments = comments.filter(e => e.id !== id);
  return comments;
},




update:(id,newdata)=>{
let data_indecx=comments.findIndex(e=>e.id==id)
if (data_index === -1) return null;
comments[data_indecx]=[{id:id,...newdata,...comments[data_indecx]}]
return comments
}
,




getpostt_id:(postid)=>{
  if(postid){
   const postrequire  = comments.filter(e=>e.postId==postid)
  }return postrequire



   

}








};
