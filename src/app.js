import express from 'express';
import morgan from 'morgan';

let app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get('/',(req,res) => {
    res.status(200).json({
        message:"Welcome to the api",
    });
})

export default app;