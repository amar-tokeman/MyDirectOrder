import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "mydirectorder"
      
    }
   
    await mongoose.connect(DATABASE_URL, DB_OPTIONS )
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
    console.log("Connection Failed")
  }
}

export default connectDB