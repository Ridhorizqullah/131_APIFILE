const db = require("../models");

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log("Database connected successfully.");

        await db.Sequelize.sync({ alter: true });
        console.log("Database synchronized successfully.");


    } catch (error) {
        console.log("Database connection failed:", error);
        process.exit(1);
    }
}
