const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/users-data.json`, 'utf-8'))

exports.getAllUser=(req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            users
        }
    })
}

exports.creatUser=(req, res) => {
    const newID = users[users.length - 1].id + 1;
    const newUser = Object.assign({ id: newID }, req.body)

    users.push(newUser)

    fs.writeFile(`${__dirname}/../data/users-data.json`, JSON.stringify(users), (err) => {

        res.status(201).json({
            status: "success",
            data: {
                newUser
            }
        });

    })

}

exports.getParticularUser=(req, res) => {

    const id = req.params.id * 1;

    const user = users.find(el => el.id === id)

    if (!user) {
        res.status(404).json({
            status: "fail",
            message: "user data not found"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            user
        }
    })

}

exports.deleteUser=(req, res) => {
    const id = req.params.id * 1;

    const userToDelete = users.find(el => el.id === id)
    if (!userToDelete) {
        res.status(404).json({
            status: "fail",
            message: "user data not found"
        })
    }
    const index = users.indexOf(userToDelete);

    users.splice(index, 1)

    fs.writeFile(`${__dirname}/../data/users-data.json`, JSON.stringify(users), (err) => {

        res.status(204).json({
            status: "success",
            data: null
        });

    })

}

exports.updateUser=(req, res) => {
    const id = req.params.id * 1;

    const userToUpdate = users.find(el => el.id === id)
    if (!userToUpdate) {
        res.status(404).json({
            status: "fail",
            message: "user data not found"
        })
    }

    Object.assign(userToUpdate, req.body)
    const index = users.indexOf(userToUpdate)

    users[index] = userToUpdate

    fs.writeFile(`${__dirname}/../data/users-data.json`, JSON.stringify(users), (err) => {

        res.status(200).json({
            status: "success",
            data: {
                userToUpdate
            }
        });

    })

}
