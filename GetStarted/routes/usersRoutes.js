import express from 'express';
import { getDatabase } from '../config/database.js';

const userRoutes = express.Router();

//API of getting all users
userRoutes.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const users = await db.collection('users').find({}).toArray();

    return res.status(200).json({
      message: 'success in fetching users',
      data: users,
      code: 200,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to fetch users',
      code: 500,
    });
  }
});

//API of creating a new user
userRoutes.post('/', async (req, res) => {
  try {
    const { username, email } = req.body || {};

    if (!username || !email) {
      return res.status(400).json({
        message: 'username and email are required',
        code: 400,
      });
    }

    const db = getDatabase();
    const result = await db.collection('users').insertOne({
      username,
      email,
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: 'User created successfully',
      code: 201,
      user: {
        _id: result.insertedId,
        username,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Failed to create user',
      code: 500,
    });
  }
});

//API of updating a user 
userRoutes.put('/:id', async (req, res) => {
         
})

export default userRoutes;

