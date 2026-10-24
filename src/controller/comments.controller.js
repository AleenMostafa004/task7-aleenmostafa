

const modelcomment=require("../models/comments")
class control{

//1/
 getbyid = (req, res) => {
    const idd = parseInt(req.params.id)

    const databyid = modeluse.getid(idd)
        if (!databyid) { return res.status(404).json({ message: "العنصر غير موجود " }) }
    return res.status(200).json({ message: "تم جلب بيانات العنصر المحدد", data: databyid })
  }


/// دالة اضافة او انشاء عنصر 
//2/
createelement=(req,res)=>{
const {id,username,fullName, email,bio,avatar, role}=req.body

const newusers=modeluse.create(  {
       username , 
       fullName      ,
       email , 
       bio,
       avatar     ,
       role
})


res.status(201).json({message:"تم انشاء العنصر بنجاخ ", data: newusers})

}


/////دالة حذف العنصر 
//3/
deletecomment=(req,res)=>{
const rID=parseInt(req.params.id);

if(!rID){ return res.status(404).json({message:"العنصر غير موجود "})}

const new_users=modelcomment.delete(rID)
return res.status(200).json({message:" تم حذف العنصر المحدد بنجاح ", data :new_users})
}


//////دالة ال  PATCH /:id تعديل العنصر المحدد 
//4/
updatecomment=(req,res)=>{
const id1_update=parseInt(req.params.id)
const id_update_check=modelcomment.getid(id1_update)
if(!id_update_check){return res.status(404).json({message:"العنصر غير موجود "})}

const newData= modelcomment.update(id1_update,req.body)

return(res.status(200).json({message:"تم تعديل العنصر المحدد بنجاح ",data:newData}))


}


getAllComments= (req, res) => {
    const { postId } = req.query; // قراءة الـ postId من الـ Query Parameters
    const comments = modelcomment.getpostt_id(postId);

    return res.status(200).json({
      message: "تم الجلب بنجاح ",
      data: comments
    });
  



}












}













module.exports=new control()