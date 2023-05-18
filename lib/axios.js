import axios from "axios";

const instace = axios.create({
  baseURL: "https://learn.codeit.kr/api/codeitmall",
});

export default instace;
