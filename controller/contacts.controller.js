import Contact from "../models/contacts.models.js"
import mongoose from "mongoose"
                          
export  const getContacts = async (req,res) => { 
    const contacts = await Contact.find(req.params.id )
    res.render('home',{contacts})
    }

export  const getContact = async (req,res) => { 

    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.render('404',{message:"Contact Not Found! "})
    }

    const contact = await Contact.findById(req.params.id )
    res.render('show-contact',{contact})
    }

export const addContactPage = (req,res) =>{ 
    res.render('add-contact')
}

 export const addContact = async(req,res)=>{
    await Contact.create(req.body) 
    res.redirect("/")}


export const updateContactPage = async(req,res) => { 
    const contact = await Contact.findById(req.params.id)
    res.render('update-contact',{contact})   
}

export const updateContact = async(req,res)=>{
const {first_name, last_name, email, phone, address} = req.body
await Contact.findByIdAndUpdate(req.params.id, {first_name, last_name, email, phone, address})
res.redirect("/")
 }

export const deleteContact = async(req,res)=>{ 
await Contact.findByIdAndDelete(req.params.id)
res.redirect("/")   
}