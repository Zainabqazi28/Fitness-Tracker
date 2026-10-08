import mongoose from 'mongoose'

async function dbconn() {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Connect Successfully")
    } catch (error) {
        console.log("Connection Error",error.message)
        
    }
    
}

export default dbconn