import express from "express";

// import { singleUpload } from "../middlewares/mutler.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controller/company.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload ,updateCompany);

export default router;
