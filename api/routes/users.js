import  Express  from "express";

const router = Express.Router();

router.get("/", (req, res) => {
    res.send("User route working");
});

export default router;