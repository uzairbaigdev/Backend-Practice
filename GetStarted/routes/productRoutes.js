import express from "express";

const productRoutes = express.Router();

const products = [
	{ id: 1, name: "Laptop" },
	{ id: 2, name: "Smartphone" },
	{ id: 3, name: "Tablet" },
	{ id: 4, name: "Wireless Headphones" },
	{ id: 5, name: "Bluetooth Speaker" },
	{ id: 6, name: "Smartwatch" },
	{ id: 7, name: "Keyboard" },
	{ id: 8, name: "Wireless Mouse" },
	{ id: 9, name: "Monitor" },
	{ id: 10, name: "Webcam" },
	{ id: 11, name: "USB Flash Drive" },
	{ id: 12, name: "External Hard Drive" },
	{ id: 13, name: "Power Bank" },
	{ id: 14, name: "Phone Charger" },
	{ id: 15, name: "HDMI Cable" },
	{ id: 16, name: "Desk Lamp" },
	{ id: 17, name: "Office Chair" },
	{ id: 18, name: "Backpack" },
	{ id: 19, name: "Water Bottle" },
	{ id: 20, name: "Coffee Mug" },
	{ id: 21, name: "Notebook" },
	{ id: 22, name: "Ballpoint Pen" },
	{ id: 23, name: "Desk Organizer" },
	{ id: 24, name: "Mechanical Pencil" },
	{ id: 25, name: "Calculator" },
	{ id: 26, name: "Travel Adapter" },
	{ id: 27, name: "Digital Camera" },
	{ id: 28, name: "Tripod Stand" },
	{ id: 29, name: "Fitness Tracker" },
	{ id: 30, name: "Portable Projector" }
];

//API of getting all products
productRoutes.get("/",(req,res)=> {
	res.json(products)
})

//API of getting one product by ID 
productRoutes.get("/:id",(req,res) => {
    const productID = Number(req.params.id);
    const product = products.find((product) => product.id === productID);
    
    if(!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product);
});

// //API of creating a new product
// productRoutes.post("/",(req,res)=> {
//     res.send("create a new product")
// })

// //API of updating a product
// productRoutes.put("/",(req,res)=> {
//     res.send("update a product")
// })

// //API of deleting a product 
// productRoutes.delete("/",(req,res)=> {
//     res.send("delete a product")
// })


export default productRoutes;