    import mongoose from "mongoose";
    
    const userSchema= mongoose.Schema({
        name:{
            type:String,
            trim:true,
            required:true
        },

         username:{
            type:String,
            trim:true,
         unique: true,
            required:true
        },
       
        email:{
            type:String,
            trim:true,
            unique:true,
            required:true
        },
        password:{
            type:String,
            trim:true,
            required:true
        },
        age:{
            type:Number,
            
            required:true
        },
        gender:{
            type:String,
            trim:true,
            required:true,
            enum:["male","female","other"]
        },

        height:{
            type:Number,
            trim:true,
            required:true
        },

        weight:{
            type:Number,
            trim:true,
            required:true 
        },
        
        profilePicture:{
            type:String,
        default:""
        }
    },
    {
        timestamps:true,
                versionKey:false,


    })

    const UserModel=mongoose.model("Users",userSchema)
    export default UserModel