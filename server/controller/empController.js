import * as empRepository from "../repository/empRepository.js";

export async function getList(req, res) {
  const row = await empRepository.getList();
  console.log(row);
  res.json(row);
}
