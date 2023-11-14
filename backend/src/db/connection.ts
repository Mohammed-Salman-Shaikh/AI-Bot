import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        throw new Error("Cannot connect to mongodb");
    }
}

async function disconnectFromDatabse() {
    try {
        await disconnect();
    } catch (error) {
        console.log("Error connecting to the database: ", error);
        throw new Error("Cannot disconnect to mongodb");
    }
}

export {connectToDatabase, disconnectFromDatabse}