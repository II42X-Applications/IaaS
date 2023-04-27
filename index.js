const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/getUsers", (req, res) => {
    const data = [
        {
            id: "1",
            firstName: "Kevyn",
            lastName: "Freeman",
            age: "49",
            role: "Media Relations"
        },
        {
            id: "2",
            firstName: "Kennan",
            lastName: "Hardin",
            age: "49",
            role: "Customer Service"
        },
        {
            id: "3",
            firstName: "Barbara",
            lastName: "Stuart",
            age: "33",
            role: "Quality Assurance"
        },
        {
            id: "4",
            firstName: "Eleanor",
            lastName: "Porter",
            age: "48",
            role: "Research and Development"
        },
        {
            id: "5",
            firstName: "Reese",
            lastName: "Bradford",
            age: "46",
            role: "Finances"
        },
        {
            id: "6",
            firstName: "Preston",
            lastName: "Cox",
            age: "43",
            role: "Asset Management"
        },
        {
            id: "7",
            firstName: "Kirk",
            lastName: "Francis",
            age: "47",
            role: "Advertising"
        },
        {
            id: "8",
            firstName: "Tasha",
            lastName: "Wynn",
            age: "41",
            role: "Customer Service"
        },
        {
            id: "9",
            firstName: "Roary",
            lastName: "Simmons",
            age: "40",
            role: "Advertising"
        },
        {
            id: "10",
            firstName: "Georgia",
            lastName: "Snow",
            age: "31",
            role: "Asset Management"
        },
        {
            id: "11",
            firstName: "Petra",
            lastName: "Forbes",
            age: "49",
            role: "Tech Support"
        },
        {
            id: "12",
            firstName: "Jakeem",
            lastName: "Ball",
            age: "49",
            role: "Research and Development"
        },
        {
            id: "13",
            firstName: "Joseph",
            lastName: "Mccray",
            age: "49",
            role: "Sales and Marketing"
        },
        {
            id: "14",
            firstName: "Eugenia",
            lastName: "Pope",
            age: "30",
            role: "Finances"
        },
        {
            id: "15",
            firstName: "Phelan",
            lastName: "Sandoval",
            age: "39",
            role: "Finances"
        },
        {
            id: "16",
            firstName: "Vivien",
            lastName: "May",
            age: "42",
            role: "Advertising"
        },
        {
            id: "17",
            firstName: "Wayne",
            lastName: "Drake",
            age: "32",
            role: "Customer Relations"
        },
        {
            id: "18",
            firstName: "Tallulah",
            lastName: "Carpenter",
            age: "34",
            role: "Payroll"
        },
        {
            id: "19",
            firstName: "Quail",
            lastName: "Robertson",
            age: "47",
            role: "Public Relations"
        },
        {
            id: "20",
            firstName: "Rana",
            lastName: "Roy",
            age: "38",
            role: "Advertising"
        }
    ];
    res.send(data);
})

app.post("/addUser", (req, res) => {
    const data = [
        {
            id: "1",
            firstName: "Kevyn",
            lastName: "Freeman",
            age: "49",
            role: "Media Relations"
        },
        {
            id: "2",
            firstName: "Kennan",
            lastName: "Hardin",
            age: "49",
            role: "Customer Service"
        },
        {
            id: "3",
            firstName: "Barbara",
            lastName: "Stuart",
            age: "33",
            role: "Quality Assurance"
        },
        {
            id: "4",
            firstName: "Eleanor",
            lastName: "Porter",
            age: "48",
            role: "Research and Development"
        },
        {
            id: "5",
            firstName: "Reese",
            lastName: "Bradford",
            age: "46",
            role: "Finances"
        },
        {
            id: "6",
            firstName: "Preston",
            lastName: "Cox",
            age: "43",
            role: "Asset Management"
        },
        {
            id: "7",
            firstName: "Kirk",
            lastName: "Francis",
            age: "47",
            role: "Advertising"
        },
        {
            id: "8",
            firstName: "Tasha",
            lastName: "Wynn",
            age: "41",
            role: "Customer Service"
        },
        {
            id: "9",
            firstName: "Roary",
            lastName: "Simmons",
            age: "40",
            role: "Advertising"
        },
        {
            id: "10",
            firstName: "Georgia",
            lastName: "Snow",
            age: "31",
            role: "Asset Management"
        },
        {
            id: "11",
            firstName: "Petra",
            lastName: "Forbes",
            age: "49",
            role: "Tech Support"
        },
        {
            id: "12",
            firstName: "Jakeem",
            lastName: "Ball",
            age: "49",
            role: "Research and Development"
        },
        {
            id: "13",
            firstName: "Joseph",
            lastName: "Mccray",
            age: "49",
            role: "Sales and Marketing"
        },
        {
            id: "14",
            firstName: "Eugenia",
            lastName: "Pope",
            age: "30",
            role: "Finances"
        },
        {
            id: "15",
            firstName: "Phelan",
            lastName: "Sandoval",
            age: "39",
            role: "Finances"
        },
        {
            id: "16",
            firstName: "Vivien",
            lastName: "May",
            age: "42",
            role: "Advertising"
        },
        {
            id: "17",
            firstName: "Wayne",
            lastName: "Drake",
            age: "32",
            role: "Customer Relations"
        },
        {
            id: "18",
            firstName: "Tallulah",
            lastName: "Carpenter",
            age: "34",
            role: "Payroll"
        },
        {
            id: "19",
            firstName: "Quail",
            lastName: "Robertson",
            age: "47",
            role: "Public Relations"
        },
        {
            id: "20",
            firstName: "Rana",
            lastName: "Roy",
            age: "38",
            role: "Advertising"
        }
    ];
    const {user} = req.body;
    if(!user){
        res.status(400).send("No user included in the request.");
    }
    if(!user.id || !user.firstName || !user.lastName || !user.role || !user.age){
        res.status(400).send("Badly formatted user in request.");
    }
    data.push(user);
    res.send(user);
})