const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
});
UserSchema.pre("save", function (next) {
    // this is our user
    if (this.age > 14 && this.age < 60) next();
    else next(Error("Age is not recommanded"));
});
UserSchema.post("save", async function (doc) {
    // this is our user
    try {
        const users = await mongoose
            .model("User")
            .updateMany({ firstName: doc.firstName, lastName: doc.lastName }, { age: doc.age });
    } catch (e) {
        console.error(e);
    }
});

UserSchema.methods.findSimilarAge = function () {
    return mongoose.model("User").find({ age: this.age });
};

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
        return { error: e.message };
    }
}
// finding DATA
async function FindUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (e) {
        console.error(e);
        return { error: e.message };
    }
}
async function FindUser(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (e) {
        console.error(e);
        return { error: e.message };
    }
}
async function FindSimilarAge(id) {
    try {
        const user = await User.findById(id);
        return await user.findSimilarAge();
    } catch (e) {
        console.error(e);
        return { error: e.message };
    }
}
async function FindUserbyFirstName(firstName) {
    try {
        const user = await User.findOne({ firstName });
        return user;
    } catch (e) {
        console.error(e);
        return { error: e.message };
    }
}
async function FindUserbyAge(age) {
    try {
        const user = await User.findOne({ age });
        return user;
    } catch (e) {
        console.error(e);
        return { error: e.message };
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
        return { error: e.message };
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
        return { error: e.message };
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
    FindSimilarAge,
};
