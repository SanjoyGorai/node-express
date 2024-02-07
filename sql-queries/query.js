
export const selectQuery = `SELECT * FROM student`;
export const deleteQuery = `DELETE * FROM student WHERE id = $1`;
export const insertQuery = `INSERT INTO student (name,phone) VALUES
('Goutam Goswmi', 7484784584) `
export const insertUsersQuery = `INSERT INTO users (username, password) 
VALUES ($1, $2)`
