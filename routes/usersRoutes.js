import express from 'express';

const userRoutes = express.Router();

const users = [
        { id: 1, name: "Aarav Sharma", age: 24 },
        { id: 2, name: "Mia Johnson", age: 29 },
        { id: 3, name: "Liam Williams", age: 31 },
        { id: 4, name: "Emma Brown", age: 26 },
        { id: 5, name: "Noah Davis", age: 35 },
        { id: 6, name: "Olivia Miller", age: 22 },
        { id: 7, name: "Ethan Wilson", age: 28 },
        { id: 8, name: "Ava Moore", age: 33 },
        { id: 9, name: "Lucas Taylor", age: 27 },
        { id: 10, name: "Sophia Anderson", age: 30 },
        { id: 11, name: "Mason Thomas", age: 25 },
        { id: 12, name: "Isabella Jackson", age: 32 },
        { id: 13, name: "James White", age: 21 },
        { id: 14, name: "Amelia Harris", age: 38 },
        { id: 15, name: "Benjamin Martin", age: 34 },
        { id: 16, name: "Harper Thompson", age: 23 },
        { id: 17, name: "Henry Garcia", age: 40 },
        { id: 18, name: "Evelyn Martinez", age: 36 },
        { id: 19, name: "Alexander Robinson", age: 29 },
        { id: 20, name: "Abigail Clark", age: 27 },
        { id: 21, name: "Daniel Rodriguez", age: 42 },
        { id: 22, name: "Emily Lewis", age: 31 },
        { id: 23, name: "Michael Lee", age: 26 },
        { id: 24, name: "Elizabeth Walker", age: 37 },
        { id: 25, name: "Sebastian Hall", age: 28 },
        { id: 26, name: "Sofia Allen", age: 24 },
        { id: 27, name: "Jack Young", age: 39 },
        { id: 28, name: "Ella Hernandez", age: 30 },
        { id: 29, name: "William King", age: 45 },
        { id: 30, name: "Grace Wright", age: 25 }
    ];

// API of getting all users
userRoutes.get("/", (req, res) => {
    res.json(users)
})  

// API of getting one user by ID
userRoutes.get("/:id", (req, res) => {
    const userId = Number(req.params.id)
    const user = users.find((user) => user.id === userId)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
})

// //API of creating a new user
// userRoutes.post('/',(req,res)=> {
//     res.send("User created!")
// })

// //API of updating a user
// userRoutes.put("/",(req,res)=> {
//     res.send("User updated!")
// })

// //API of deleting a user
// userRoutes.delete("/",(req,res)=> {
//     res.send("User deleted!")
// })

// //API of getting a specific user 
// userRoutes.get("/getuser",(req,res)=> {
//     res.send("user with ID is fetched")
// })

export default userRoutes;

