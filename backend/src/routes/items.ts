import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/items", (req: Request, res: Response) => {
  return res.send("the todo");
});

export { router as itemsRouter };
