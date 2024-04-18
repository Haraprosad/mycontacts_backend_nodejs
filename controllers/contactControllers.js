//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req,res)=>{
    res.send({message:"Get all contacts"});
}; 

//@desc Create new contact
//@route POST /api/contacts
//@access Public

const createContact = (req,res)=>{
    console.log("The request body is", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.send({message:"It is a post method"});
}; 

//@desc Get a contact
//@route GET /api/contacts/:id
//@access Public

const getContact = (req,res)=>{
    res.send({message:`Get id specific contact ${req.params.id}`});
}; 

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req,res)=>{
    res.send({message:`Update contact for ${req.params.id}`});
}; 

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req,res)=>{
    res.send({message:`Delete contact for ${req.params.id}`});
}; 

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};