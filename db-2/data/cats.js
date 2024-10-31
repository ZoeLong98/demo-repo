import { pool } from "../config/database.js";

const getCats = async () => {
  const results = await pool.query("SELECT * FROM cats");
  console.log(results.rows);
  return results.rows;
};

const getCat = async (id) => {
  const results = await pool.query("SELECT * FROM cats WHERE id = $1", [id]);
  console.log(results.rows);
  return results.rows[0];
};

const createCat = async (data) => {
  const results = await pool.query(
    "INSERT INTO cats (name, color, human, photo) VALUES ($1, $2, $3, $4) RETURNING *",
    [data.name, data.color, data.human, data.image]
  );
  console.log(results.rows);
  return results.rows[0];
};

const updateCat = async (id, data) => {
    
};

const deleteCat = async (id) => {
  const results = await pool.query(
    "DELETE FROM cats WHERE id = $1 RETURNING *",
    [id]
  );
  console.log(results.rows);
  return results.rows[0];
};

export { getCats, getCat, createCat, updateCat, deleteCat };
