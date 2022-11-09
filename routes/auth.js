import express from "express";
import {
  signin,
  addVenue,
  allVenue,
  addFav,
  userInfo,
  removeFav,
} from "../controllers/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from a test API",
  });
});

router.post("/signin", signin);
router.post("/addvenue", addVenue);
router.get("/allvenue", allVenue);
router.post("/addfav", addFav);
router.post("/userInfo", userInfo);
router.post("/removefav", removeFav);
// router.post("/signup", signup);

export default router;
