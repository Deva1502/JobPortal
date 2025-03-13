import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userroute from "./routes/user.routes.js"
import companyRoute from "./routes/company.route.js"
import jobroute from "./routes/job.route.js"
import application from "./routes/application.route.js"

dotenv.config({});
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Corrected CORS options
const corsoptions = {
    origin: 'http://localhost:5173', // Corrected the URL
    credentials: true // Corrected the case
};
app.use(cors(corsoptions));


app.use("/api/v1/user",userroute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobroute);
app.use("/api/v1/application",application);



try {
    const PORT =  3000;
    app.listen(PORT, () => {
        connectDB();
        console.log(`Running on port ${PORT}`);
    });
} catch (error) {
    console.error("Error starting the server:", error);
}
