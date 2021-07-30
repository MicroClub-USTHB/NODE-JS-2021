const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
});

const User = mongoose.model("User", UserSchema);
//
async function CreateUser(fn, lastName, age) {
    try {
        //1st way
        //const user = await User.create({ firstName: fn, lastName, age });
        //2nd way
        const user = new User({ firstName: fn, lastName, age });
        await user.save();
        console.log("User has been created");
        return user;
    } catch (e) {
        console.error(e);
        return e;
    }
}
// finding DATA
async function FindUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (e) {
        console.error(e);
        return e;
    }
}
async function FindUser(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (e) {
        console.error(e);
        return e;
    }
}

async function FindUserbyFirstName(firstName) {
    try {
        const user = await User.findOne({ firstName });
        return user;
    } catch (e) {
        console.error(e);
        return e;
    }
}
async function FindUserbyAge(age) {
    try {
        const user = await User.findOne({ age });
        return user;
    } catch (e) {
        console.error(e);
        return e;
    }
}

// Updating Data
async function UpdateUserByID(_id, { age, firstName, LastName }) {
    try {
        //1st way
        //const user = await User.updateOne({ _id }, newData);
        //2nd to find the user then change its data then save it
        const user = await User.findById(_id);
        user.age = age ? age : user.age;
        user.firstName = firstName ? firstName : user.firstName;
        user.LastName = LastName ? LastName : user.LastName;
        await user.save();
        console.log("User has been updated");
        return user;
    } catch (e) {
        console.error(e);
        return e;
    }
}
//delete data
async function DeleteUser(_id) {
    try {
        //1st way
        //const user = await User.deleteOne({ _id });
        //2nd to find the user then delete it
        const user = await User.findById(_id);
        await user.remove();
        return "Deleted";
    } catch (e) {
        console.error(e);
        return e;
    }
}
async function CreateUserCB(fn, lastName, age, callback) {
    try {
        const user = await User.create({ firstName: fn, lastName, age });
        callback(null, user);
    } catch (e) {
        console.error(e);
        callback(e);
    }
}

module.exports = {
    User,
    CreateUser,
    CreateUserCB,
    FindUsers,
    FindUserbyFirstName,
    FindUser,
    FindUserbyAge,
    UpdateUserByID,
    DeleteUser,
};
