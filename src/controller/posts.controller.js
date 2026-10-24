

const modelpost =require("../models/post")
class cont{
get=(req,res)=>{
const idb=parseInt(req.params.id)
 const ind=modelpost.getid(idb)
 if(!ind){return res.status(404).json({message:"غير موجود  "})}
  const ress=modelpost.getid(ind)
  res.status(200).json({message:"تم الحصول على العنصر",data:ress})

}





getcomments_byid=(req,res)=>{
const idd=parseInt(req.params.id)
const index=modelpost.getid(idd)
const thecomments_ofpost= modelpost.getbyid_commnets(index)
if(!thecomments_ofpost){res.status(404).json({message:"لا يوجد بوستات خاصة فيه "})}
res.status(200).json({message:"تم الحصول على البوستات",data:thecomments_ofpost})
}




createelement=(req,res)=>{
const {   userId,title, content,tags,likes,createdAt,updatedAt}=req.body
const newposts=modelpost.create(  {
    userId,
    title,
    content,
    tags,
    likes,
    createdAt,
    updatedAt,
  })}


deletee=(req,res)=>{
const rID=parseInt(req.params.id);

if(!rID){ return res.status(404).json({message:"العنصر غير موجود "})}

const new_posts=modelpost.delete(rID)
return res.status(200).json({message:" تم حذف العنصر المحدد بنجاح ", data :new_posts})
}



update=(req,res)=>{
const id4_update=parseInt(req.params.id)
const id4_update_check=modelpost.getid(id4_update)
if(!id4_update_check){return res.status(404).json({message:"العنصر غير موجود "})}

const newData= modelpost.update(id4_update,req.body)

return(res.status(200).json({message:"تم تعديل العنصر المحدد بنجاح ",data:newData}))


}



postlikee=(req,res)=>{
const ridd=parseInt(req.params.id)
 const resault_like=modelpost.postlike(ridd)
  
return res.status(200).json({message:"تم ايجاد likes الخاصة فيه " ,data:resault_like})

}


post_bytag=(req,res)=>{

const {tags}=req.query

      const res_tag =gettag(tags)
      if(!res_tag){return res.status(404).json({message:"العنصر غير موجود  " })}
return res.status(200).json({message:"تمت العملية بنجاح ",data:res_tag})
}









}
module.exports=new cont ()