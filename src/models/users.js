const usersController = require("../controller/users.controller");
const posts_array=require("./post")
let  users = [
  {
    id: 1,
    username: "karim_tech",
    fullName: "Karim Mansour",
    email: "karim@example.com",
    bio: "Full-stack JavaScript engineer & open-source contributor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    role: "author",
    createdAt: "2026-01-15T09:30:00.000Z",
  },
  {
    id: 2,
    username: "nour_designer",
    fullName: "Nour Al-Huda",
    email: "nour@example.com",
    bio: "UI/UX Designer passionate about minimal web interfaces",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "author",
    createdAt: "2026-02-10T14:15:00.000Z",
  },
  {
    id: 3,
    username: "tariq_dev",
    fullName: "Tariq Ziad",
    email: "tariq@example.com",
    bio: "Node.js & Cloud enthusiast building scalable distributed systems",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    role: "member",
    createdAt: "2026-03-01T11:45:00.000Z",
  },
  {
    id: 4,
    username: "sara_ai",
    fullName: "Sara Mahmoud",
    email: "sara@example.com",
    bio: "AI researcher & Pythonista learning modern Node backends",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    role: "member",
    createdAt: "2026-03-20T16:00:00.000Z",
  },
];


module.exports = {
  getall: () => users,
  getid:(id)=> users.find((e)=>e.id==id),
  create:(newpost)=>{
             const id_new = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            const new_p={id:id_new,...newpost}
            users.push(new_p)
          return users
            },


delete:(id)=> {
users = users.filter(e => e.id !== id);
  return users;
},




update:(id,newdata)=>{
let data_index=users.findIndex(e=>e.id==id)
users[data_index]=[{id:id,...newdata,...users[data_index]}]
return users
}
,

//get by id (posts )
// تم استدعاء ال post من ملفها حتى يتم استخدامها 
getbyid_post:(id)=>{
  
  const posst=posts_array.filter(r=>r.userId==id)
  
  return posst

}

//////











};



