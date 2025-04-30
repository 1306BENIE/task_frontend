"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskList_1 = __importDefault(require("./components/TaskList"));
const App = () => {
    return (<div>
      <h1>Gestionnaire de tâches</h1>
      <TaskList_1.default />
    </div>);
};
exports.default = App;
