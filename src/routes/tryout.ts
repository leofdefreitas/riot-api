import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({msg: "Teste bem sucedido"});
})

module.exports = router;