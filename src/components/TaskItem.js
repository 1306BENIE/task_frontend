"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("./Button"));
const TaskItem = ({ tasks, handleDelete }) => {
    return (<ul>
      {tasks.map((task) => (<li key={task.id}>
          {task.title} - {task.status}
          <Button_1.default handleDelete={() => handleDelete(task.id)} taskID={task.id} name="Supprimer"/>
        </li>))}
    </ul>);
};
exports.default = TaskItem;
