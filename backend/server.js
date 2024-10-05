const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/expense', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const expenseSchema = new mongoose.Schema({
    text: { type: String, required: true },
    positive: { type: Boolean, required: true },
    amount: { type: Number, required: true }

})
const Expense = mongoose.model('Expense', expenseSchema);
app.get("/", async(req, res) => {
    const expense = await Expense.find({});
    res.json(expense);
})
app.post("/", async(req, res) => {
    try {
        console.log(req.body);
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch {
        res.status(400).json({ message: 'Invalid request' });
    }
})
app.delete("/:id", async(req, res) => {
    try {
        console.log(req.params.id);
        const expense = await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch {
        res.status(400).json({ message: 'Invalid request' });
    }
})
app.listen(5000, () => {
    console.log('Server is running on port 5000');
})