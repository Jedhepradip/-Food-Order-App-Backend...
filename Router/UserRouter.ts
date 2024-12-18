import express from "express";
const router = express.Router();
import { upload } from "../Middewares/Multer middleware";
import { SendOTPForRegistrationUser, RegistrationUser, LoginUser, UserUpdate, ForgetPassword, PasswordReset, GetLoginUserdata,UserAllDataSend, AdminDeleteTheUSER } from "../Controllers/UserControllers";
import { jwtMiddleware } from "../Middewares/jwtAuthMiddleware";

router.post("/Login/User", LoginUser);
router.post("/ForgetPassword", ForgetPassword);
router.post("/User/Password/Reset", PasswordReset)
router.get("/UserAll/DataSend",jwtMiddleware,UserAllDataSend)
router.get("/Login/UserData", jwtMiddleware, GetLoginUserdata)
router.post("/SendOTP/ForRegistration/User", SendOTPForRegistrationUser);
router.put("/Admin/Delete/User/:ID",jwtMiddleware,AdminDeleteTheUSER)
router.post("/Update/User/:id", upload.single("profilePicture"), UserUpdate);
router.post("/Registration/User", upload.single("profilePicture"), RegistrationUser);

export default router;
