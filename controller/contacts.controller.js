import Contact from "../models/contacts.models.js"
import mongoose from "mongoose"
                          
export  const getContacts = async (req,res) => { 
    const contacts = await Contact.find(req.params.id )
    res.render('home',{contacts})
    }

export  const getContact = async (req,res) => { 

    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:"Invalid Id! "})
    }

    try{
        const contact = await Contact.findById(req.params.id )
    if(!contact) return res.render('404',{message:"Conatct not Found"})    
    res.render('show-contact',{contact})}
    catch(error){
 res.render('500',{message: error})
    }

    
    }

export const addContactPage = (req,res) =>{ 
    res.render('add-contact')
}

 export const addContact = async(req,res)=>{
    await Contact.create(req.body) 
    res.redirect("/")}


export const updateContactPage = async(req,res) => { 
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:"Invalid Id! "})
    }
    try{
 const contact = await Contact.findById(req.params.id)
 if(!contact) return res.render('404',{message:"Conatct not Found"})   
 res.render('update-contact',{contact})   

    }catch(error){
 res.render('500',{message: error})

    }
   
}

export const updateContact = async(req,res)=>{

    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:"Invalid Id! "})
    }

    await Contact.findByIdAndUpdate(req.params.id,req.body)
    res.redirect("/")
// const {first_name, last_name, email, phone, address} = req.body
// await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address})
// res.redirect("/")
 }

export const deleteContact = async(req,res)=>{ 

if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:"Invalid Id! "})
    }

await Contact.findByIdAndDelete(req.params.id)
res.redirect("/")   
}