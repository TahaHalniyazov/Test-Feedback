// const express = require("express");
// const cors = require("cors");
// const app = express();

// const port = 9090;

// app.use(cors());

// app.post("/api/registration", (req, res) => {
//     if (Math.random() > 0.5) {
//         res.statusCode = 400;

//     setTimeout(() => {
//         res.send({
//             status: "error",
//             message: "Bad request",
//         });
//     }, Math.random() * 1000);

//     return;
// }

// setTimeout(() => {
//     res.statusCode = 200;
//     res.send({
//         status: "success",
//         message: "You are registered",
//     });
//   }, Math.random() * 1000);
// });

// app.get("/api/ping", (req, res) => {
//     res.statusCode = 200;
//     res.send({
//         status: "success",
//         message: "Server is ready",
//     });
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });




const express = require("express");
const cors = require("cors");
const app = express();

const port = 9090;

app.use(cors());

app.post("/api/registration", (req, res) => {
    if (Math.random() > 0.5) {
        setTimeout(() => {
            res.status(400).json({
                status: "error",
                message: "Bad request",
            });
        }, Math.random() * 1000);
    } else {
        setTimeout(() => {
            res.status(200).json({
                status: "success",
                message: "You are registered",
            });
        }, Math.random() * 1000);
    }
});

app.get("/api/ping", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Server is ready",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
