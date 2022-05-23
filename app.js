const express = require("express");
const app = express();

const db = require("./config/db");
const Summarize = require("./models/SummarizeModel");

app.get('/', (req, res) => res.send("respon nodejs berhasil"));

app.use(express.urlencoded({extended: true}));

db.authenticate().then(() => 
    console.log("Connected to Database."
)).catch (err => {
    console.error('Unable to connect to the database:', err);
});

app.post('/addSummarize', async(req, res) => {
    try {
        // const createdAt = Date.now();
        const {
            userID,
            username,
            caption,
            location,
            summarize,
            typeSummarize,
            category,
            // createdBy
        } = req.body

        const newSummarize = new Summarize ({
            userID,
            username,
            caption,
            location,
            summarize,
            typeSummarize,
            category,
            // createdAt,
            // createdBy
        })

        await newSummarize.save();
        res.json({
            status:'true',
            message: 'success', 
            newSummarize
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get("/getSummarize", async(req, res) => {
    try {
        const getAllSummarize = await Summarize.findAll({})

        res.json({
            status:'true',
            message: 'success', 
            getAllSummarize
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get('/getSummarize/:id', async(req, res) => {
    try {
        const id = req.params.id

        const getSummarize = await Summarize.findOne({
            where: { userID:id }
        });

        if (id !== undefined) {
            res.json({
                status: 'true',
                message: 'success',
                getSummarize
            });
        }

        else {
            res.status(404).json({
                status: 'false',
                message: "Summarize doesn't found"
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

app.listen(3000, () => console.log("port berjalan di 3000"));