import express from 'express';
import dotenv from 'dotenv';
import dbconn from './config/dbcon.js';
import router from './routes/route.js';
dotenv.config();



const app = express();
import cors from 'cors'
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true

}));

app.use(express.json());
app.use("/auth/api",router)
const PORT = process.env.PORT 

dbconn(); // Call the database connection function
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});