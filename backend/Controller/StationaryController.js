const Product = require('../Modals/Stationary');

const getProducts = (req,res,next)=>{
    Product.find()
    .then(response =>{
        res.json({response});
    })
    .catch(error=>{
        res.json({message:error.message});
    })
}

const getProductById = (req,res,next)=>{
    Product.findById(req.params.id)
    .then(response =>{
        console.log(response);
        res.Product = response;
        next();
    })
    .catch(error=>{
        return res.json({message:error.message});
    })
}

const getProduct = (req,res,next)=>{
    res.json(res.Product);
}

const saveProduct = (req,res,next)=>{
    const newProduct = new Product({
        name : req.body.name,
        description:req.body.description,
        rating:req.body.rating,
        price:req.body.price
    });
    newProduct.save()
    .then((response)=>{
        res.json({response})
    })
    .catch((error)=>{
        res.json({message:error.message})
    });
}

const updateProduct = (req,res,next)=>{
    res.Product.name = req.body.name ? req.body.name : res.Product.name 
    res.Product.description = req.body.description ? req.body.description : res.Product.description
    res.Product.rating = req.body.rating ? req.body.rating : res.Product.rating
    res.Product.price = req.body.price ? req.body.price : res.Product.price

    res.Product.save()
    .then((response)=>{
        res.json({response})
    })
    .catch((error)=>{
        res.json({message:error.message})
    });
}

const deleteProduct = (req,res,next)=>{
    
    Product.deleteOne({_id:req.params.id})
    .then(response=>{
        res.json({response});
    })
    .catch(error=>{
        res.json({message:error.message});
    })
}

module.exports = {getProduct,getProductById,getProducts,saveProduct,updateProduct,deleteProduct};
