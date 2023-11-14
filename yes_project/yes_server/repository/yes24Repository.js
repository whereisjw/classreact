import { db } from "../db/database.js";

export async function getListPage(bsid) {
  return db
    .execute("SELECT * FROM yes24 WHERE bs_id = ?", [bsid])
    .then((rows) => rows[0]);
}
