import mongoose from "mongoose";
import appConfig from "./AppConfig";


async function connect(): Promise<void> {
    try {
        const db = await mongoose.connect(appConfig.connectionString);
        console.log("We're connected to MongoDB, database: " + db.connections[0].name);
    }
    catch(err: any) {
        console.log(err);
    }
}

export default {
    connect
};