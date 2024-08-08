import mongoose from "mongoose";
import config from "config";
import debug from 'debug';

const dbgr = debug('development:mongoose');

mongoose.connect(`${config.get("MONGODB_URI")}/ecommerce`)
.then(() => {
    dbgr("Database connected");
})
.catch((err) => {
    dbgr(err);
});

const db = mongoose.connection;

export default db;
