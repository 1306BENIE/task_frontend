"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.putTask = exports.postTasks = exports.getTasks = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = import.meta.env.VITE_API_URL;
const getTasks = () => axios_1.default.get(API_URL);
exports.getTasks = getTasks;
const postTasks = (task) => axios_1.default.post(API_URL);
exports.postTasks = postTasks;
const putTask = (taskID, task) => axios_1.default.put(`${API_URL}/${taskID}, task`);
exports.putTask = putTask;
const deleteTask = (id) => axios_1.default.delete(`${API_URL}/${id}`);
exports.deleteTask = deleteTask;
