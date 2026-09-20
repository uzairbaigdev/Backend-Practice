import { MongoClient } from 'mongodb'
import { ensureDatabaseSchema } from '../schemas/databaseSchema.js'

const mongoUri = process.env.MONGODB_URI
const databaseName = process.env.MONGODB_DB_NAME || 'backend'

if (!mongoUri) {
  throw new Error('MONGODB_URI is not set. Add it to your .env file.')
}

const client = new MongoClient(mongoUri)
let database

export async function connectToDatabase() {
  await client.connect()
  database = client.db(databaseName)
  await database.command({ ping: 1 })
  await ensureDatabaseSchema(database)

  console.log(`Connected to MongoDB database "${databaseName}"`)
  return database
}

export function getDatabase() {
  if (!database) {
    throw new Error('Database connection is not initialized')
  }

  return database
}

export async function closeDatabaseConnection() {
  await client.close()
}