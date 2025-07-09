require('dotenv').config();
const app = require("./src/app");

app.listen(process.env.PORT || 3000,'0.0.0.0',function() {
    console.log("Server is running on port 3000");
})