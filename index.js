require('dotenv').config();
const app = require('./api/server/server');

const {PORT} = process.env || 3000;


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});