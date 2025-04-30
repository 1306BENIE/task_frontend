"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SharedButton = ({ handleDelete, name, taskID, }) => {
    return <button onClick={() => handleDelete(taskID)}>{name}</button>;
};
exports.default = SharedButton;
