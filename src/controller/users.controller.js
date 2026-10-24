
const modeluse = require("../models/users");

class con {


  //الحصول على العناصر كلها 
  getallelements = (req, res) => {
    res.status(200).json({ message: "true", data: modeluse.getall() });
  };

  //الحصول على عنصر محدد حسب الايدي

  getbyid = (req, res) => {
    const idd = parseInt(req.params.id)

    const databyid = modeluse.getid(idd)
        if (!databyid) { return res.status(404).json({ message: "العنصر غير موجود " }) }
    return res.status(200).json({ message: "تم جلب بيانات العنصر المحدد", data: databyid })
  }


/// دالة اضافة او انشاء عنصر 

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

delete=(req,res)=>{
const rID=parseInt(req.params.id);

if(!rID){ return res.status(404).json({message:"العنصر غير موجود "})}

const new_users=modeluse.delete(rID)
return res.status(200).json({message:" تم حذف العنصر المحدد بنجاح ", data :new_users})
}


//////دالة ال  PATCH /:id تعديل العنصر المحدد 

update=(req,res)=>{
const id1_update=parseInt(req.params.id)
const id_update_check=modeluse.getid(id1_update)
if(!id_update_check){return res.status(404).json({message:"العنصر غير موجود "})}

const newData= modeluse.update(id1_update,req.body)

return(res.status(200).json({message:"تم تعديل العنصر المحدد بنجاح ",data:newData}))


}

getpost_id=(req,res)=>{
const idy=parseInt(req.params.id)
 const allpostsbyid=modeluse.getbyid_post(idy)

return  res.status(200).json({message:"تك ايجاد البوستات الخاصة بالعنصر ",data:allpostsbyid})


}




















}
module.exports = new con();