"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const taskGateway_1 = require("../gateway/taskGateway");
const TaskTitle_1 = __importDefault(require("./TaskTitle"));
const TaskItem_1 = __importDefault(require("./TaskItem"));
const TaskList = () => {
    const [tasks, setTasks] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetchTasks();
    }, []);
    const fetchTasks = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, taskGateway_1.getTasks)();
        setTasks(response.data);
    });
    const handleDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, taskGateway_1.deleteTask)(id);
        fetchTasks();
    });
    return (<div>
      <TaskTitle_1.default />
      <TaskItem_1.default tasks={tasks} handleDelete={handleDelete}/>
    </div>);
};
exports.default = TaskList;
