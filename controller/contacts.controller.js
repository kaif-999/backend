import Contact from "../models/contacts.models.js"
import mongoose from "mongoose"
                          
export  const getContacts = async (req,res) => { 

try {
    const contacts = await Contact.find(req.params.id )
    return res.render('home',{contacts})

}catch(error){
    return res.render('500',{message: error})
    }


    
    }

export  const getContact = async (req,res) => { 

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
       return  res.render('404',{message:"Invalid Ids! "})
    }

    try{
        const contact = await Contact.findById(req.params.id )
    if(!contact) return res.render('404',{message:"Conatct not Found"})    
    return res.render('show-contact',{contact})}
    catch(error){
    return res.render('500',{message: error})
    }

    
    }

export const addContactPage = (req,res) =>{ 
    return res.render('add-contact')
}

 export const addContact = async(req,res)=>{

     try{
  await Contact.create(req.body) 
    return res.redirect("/")}
   catch(error){
 return res.render('500',{message: error})

    }
}

export const updateContactPage = async(req,res) => { 
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
       return  res.render('404',{message:"Invalid Id! "})
    }
    try{
 const contact = await Contact.findById(req.params.id)
 if(!contact) return res.render('404',{message:"Conatct not Found"})   
 return res.render('update-contact',{contact})   

    }catch(error){
 return res.render('500',{message: error})

    }
   
}

export const updateContact = async(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.render('404',{message:"Invalid Id! "})
    }
    try{
   const contact = await Contact.findByIdAndUpdate(req.params.id,req.body)
 if(!contact) return res.render('404',{message:"Conatct not Found"})   
    return res.redirect("/")

    }catch(error){
 return res.render('500',{message: error})

    }

// const {first_name, last_name, email, phone, address} = req.body
// await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address})
// res.redirect("/")
 }

export const deleteContact = async(req,res)=>{ 

if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.render('404',{message:"Invalid Id! "})
    }

        try{
const contact = await Contact.findByIdAndDelete(req.params.id)
 if(!contact) return res.render('404',{message:"Conatct not Found"})   
    return res.redirect("/")

    }catch(error){
 return res.render('500',{message: error})

    }
}