"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// es6 import
const express_1 = __importDefault(require("express"));
const PORT = 5000;
// Type of Application
const app = express_1.default();
// Arrow function with number params and returns a number
const addNumbers = (num1, num2) => num1 + num2;
app.get('/', (req, res, next) => {
    res.send(`Hello to TypeScript Node 🔥 ${addNumbers(5, 5)}`);
});
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} 🔥`);
});
