import mongoose, {Model} from 'mongoose';
import {config} from "../config/config";

class DbContext {

    constructor() {
        mongoose.connect(config.db.host, {
                // useCreateIndex: true,
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
            },
            () => {
                console.log("connected to database");
            });
    }
}

export default new DbContext();
