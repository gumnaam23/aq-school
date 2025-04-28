import mongoose from "mongoose";


export const databaseConnection = async (uri) => {
    return mongoose.connect(uri, {
        dbName: 'user'
    })
        .then(()=> console.log("Database connected"))
        .catch(err=> console.log("Database connection error", err));
}
