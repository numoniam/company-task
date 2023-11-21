const path = require("path");

function makeGetAllUser({ fs }) {
  return async function getAllData() {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "user_data.json"), "utf-8")
    );
    return userData;
  };
}

function makeGetUser({ fs }) {
  return async function getUser(id) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "user_data.json"), "utf-8")
    );
    const user = userData.find((el) => el.id === id);
    if (!user) {
      throw new Error("User Not Found");
    }
    return user;
  };
}

function makeCreateUser({ fs }) {
  return async function createUser({ name, email, password }) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "user_data.json"), "utf-8")
    );
    const newID = userData[userData.length - 1].id + 1;

    if (!name || !email || !password) {
      throw new Error("Enter require value");
    }

    userData.push({ id: newID, name, email, password });

    fs.writeFileSync(
      "/home/ad.rapidops.com/savan.ghori/clean code practice/data-access/user_data.json",
      JSON.stringify(userData)
    );
  };
}

function makeUpdateUser({ fs }) {
  return async function updateUser({ id, newUserData }) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "user_data.json"), "utf-8")
    );

    const userToUpdate = userData.find((el) => el.id === id);
    if (!userToUpdate) {
      throw new Error("User not Found");
    }

    Object.assign(userToUpdate, newUserData);

    const index = userData.indexOf(userToUpdate);

    userData[index] = userToUpdate;

    fs.writeFileSync(
      "/home/ad.rapidops.com/savan.ghori/clean code practice/data-access/user_data.json",
      JSON.stringify(userData)
    );
  };
}

function makeDeleteUser({ fs }) {
  return async function deleteUser(id) {
    const userData = JSON.parse(
      fs.readFileSync(path.join(__dirname, "user_data.json"), "utf-8")
    );

    const userToDelete = userData.find((el) => el.id === id);

    if (!userToDelete) {
      throw new Error("User Not Found");
    }

    const index = userData.indexOf(userToDelete);

    userData.splice(index, 1);

    fs.writeFileSync(
      "/home/ad.rapidops.com/savan.ghori/clean code practice/data-access/user_data.json",
      JSON.stringify(userData)
    );
  };
}

module.exports = {
  makeGetAllUser,
  makeGetUser,
  makeCreateUser,
  makeUpdateUser,
  makeDeleteUser,
};
