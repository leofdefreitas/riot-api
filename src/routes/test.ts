import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Teste bem sucedido");
})

module.exports = router;