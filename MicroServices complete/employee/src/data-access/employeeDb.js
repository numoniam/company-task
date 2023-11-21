function makeEmployeeDb({ cockroach }) {
  let tableName = "employee";
  return Object.freeze({
    createEmployeeDb,
    getEmployeeDb,
    deleteEmployeeDb,
    updateEmployeeDb,
    getAllEmployeeDb,
    getAllEmployeeByIdDb,
  });

  async function createEmployeeDb({ company_id, name, email, salary, role }) {
    try {
      const db = await cockroach.connect();

      await db.query(
        `INSERT INTO ${tableName} (company_id,name,email,salary,role) values($1,$2,$3,$4,$5)`,
        [company_id, name, email, salary, role]
      );
    } catch (err) {
      throw err;
    }
  }

  async function getEmployeeDb({ id }) {
    try {
      const db = await cockroach.connect();

      const employeeData = await db.query(
        `SELECT * FROM ${tableName} WHERE id=$1`,
        [id]
      );

      const result = employeeData.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Employee data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function deleteEmployeeDb({ id }) {
    try {
      const db = await cockroach.connect();

      await db.query(`DELETE FROM ${tableName} WHERE id=$1`, [id]);
    } catch (err) {
      throw err;
    }
  }

  async function updateEmployeeDb({ receivedData, id }) {
    try {
      const db = await cockroach.connect();

      //making query
      const columnName = Object.keys(receivedData);
      const columnValue = Object.values(receivedData);
      const queryColumn = columnName.join(", ");

      let executeQuery = `UPDATE ${tableName} SET (${queryColumn}) = (`;

      for (let i = 1; i <= columnValue.length; i++) {
        executeQuery += `$${i},`;
      }
      console.log(executeQuery);

      //remove extra "," from query
      executeQuery = executeQuery.slice(0, executeQuery.length - 1);

      //adding ID and remaining query part
      executeQuery += `) WHERE id = $${columnValue.length + 1}`;

      //push ID value into array
      columnValue.push(id);

      console.log(executeQuery, columnValue);

      //execute the query
      await db.query(executeQuery, columnValue);
    } catch (err) {
      throw err;
    }
  }

  async function getAllEmployeeDb() {
    try {
      const db = await cockroach.connect();

      const employesData = await db.query(`SELECT * FROM ${tableName}`);

      const result = employesData.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Employee data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function getAllEmployeeByIdDb({ id }) {
    try {
      const db = await cockroach.connect();

      const employeeDataById = await db.query(
        `SELECT * FROM ${tableName} WHERE company_id=$1`,
        [id]
      );

      const result = employeeDataById.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Employee data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = makeEmployeeDb;
