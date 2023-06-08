const router = require("express").Router();

//collection model
const collection = require("../models/collection");

router.post("/save", async(req,res)=>{
    const newCollection = collection(
        {
            name: req.body.name,
            access: req.body.access
        }
    );
    try {
        const savedCollection = await newCollection.save();
        return res.status(200).send({success : true, collection : savedCollection});
    } catch (error) {
        return res.status(400).send({success:false,message:error});
    }
})

router.get("/getAll",async(req,res)=>{
     
    const data = await collection.find().sort({createdAt : 1});
    if (data){
       return res.status(200).send({success:true, data : data});
    }else{
       return res.status(400).send({success:false,message:"Data not found"});
    }

})

router.put("/update/:id", async(req,res)=>{
    const filter = {_id : req.params.id}

    const options = {
        upsert : true,
        new : true
    };

    try {
        const result = await artist.findOneAndUpdate(filter,{
            name: req.body.name,
            access:req.body.access,
        },options);

        return res.status(200).send({success:true,data:result})
    } catch (error) {
        return res.status(400).send({success:false,message:error})
    }
})


router.delete("/delete/:id", async(req,res)=>{
    const filter = { _id : req.params.id};

    const result = await collectiona.deleteOne(filter);
    if (result){
        return res.status(200).send({success:true, message : "Data deleted successfully",data: result});
     }else{
        return res.status(400).send({success:false,message:"Data not found"});
     }
})

module.exports = router