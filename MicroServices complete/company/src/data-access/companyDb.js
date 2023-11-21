function makeCompanyDb({ cockroach }) {
  const tableName="company"
  return Object.freeze({
    createCompanyDb,
    getAllCompanyDb,
    getCompanyDb,
    deleteCompanyDb,
    updateCompanyDb,
    getCompanyDetailDb,
  });

  async function createCompanyDb({ name, contact, city, address }) {
    try {
      const db = await cockroach.connect();

      await db.query(
        `INSERT INTO ${tableName} (name,contact,city,address) values($1,$2,$3,$4)`,
        [name, contact, city, address]
      );
    } catch (err) {
      throw err;
    }
  }

  async function getAllCompanyDb() {
    try {
      const db = await cockroach.connect();

      const companysData = await db.query(`SELECT * FROM ${tableName}`);

      const result = companysData.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Companys data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function getCompanyDb({ id }) {
    try {
      const db = await cockroach.connect();

      const companyData = await db.query(`SELECT * FROM ${tableName} WHERE id=$1`, [
        id,
      ]);

      const result = companyData.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Company data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }

  async function deleteCompanyDb({ id }) {
    try {
      const db = await cockroach.connect();

      await db.query(`DELETE FROM ${tableName} WHERE id=$1`, [id]);
    } catch (err) {
      throw err;
    }
  }

  async function updateCompanyDb({ receivedData, id }) {
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

  async function getCompanyDetailDb({ name }) {
    try {
      const db = await cockroach.connect();

      const companyData = await db.query(`SELECT * FROM ${tableName} WHERE name=$1`, [
        name,
      ]);

      const result = companyData.rows;

      if (!result || !result.length || result.length == 0) {
        throw new Error("Company data not found");
      }
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = makeCompanyDb;
