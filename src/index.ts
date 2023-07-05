import express from "express";
import cors from "cors";
import helmet from "helmet";
import postRoutes from "./routes/postRoutes";

const app = express();
 
app.use(cors());
 
app.use(helmet());
 
app.use(express.json());
 
app.use('/teste',(req, res) => {
    res.send("ola mundo");
})

app.use('/posts/', postRoutes);

export default app;

