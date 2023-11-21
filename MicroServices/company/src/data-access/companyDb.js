function makeCompanyDb({ cockroach }) {
  return Object.freeze({
    createCompanyDb,
  });

  async function createCompanyDb({ name, contact, city, address }) {
    const db = await cockroach.connect();

    const outPutArray = await db.query(
      "INSERT INTO company (name,contact,city,address) values($1,$2,$3,$4)",
      [name, contact, city, address]
    );

    return outPutArray;
  }
}

module.exports = makeCompanyDb;
