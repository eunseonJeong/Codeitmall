let cart = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log("조회성공");
    return res.status(200).json(cart);
  } else if (req.method === "PATCH") {
    cart = req.body;
    console.log("수정", cart);
    return res.status(200).json(cart);
  } else {
    return res.sendStatus(404);
  }
}
