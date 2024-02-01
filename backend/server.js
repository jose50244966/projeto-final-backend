import app from "./src/app.js";
import mongoose from "mongoose"
const URI = "Acione o URI"
const connectDB = async() =>{
    try{
        await mongoose.connect(URI);
        console.log("Conectado ao MongoDB")
    } catch(error) {
        handleError(error);
    }
}
connectDB();
const PORT = 3000;

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`));
