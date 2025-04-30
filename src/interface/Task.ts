type Tstatus = "pending" | "done";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: Tstatus;
}
export interface ICreateTask {
  title: string;
  description: string;
  status: Tstatus;
}

export interface TaskItemProps {
  tasks: ITask[];
  handleDelete: (id: number) => void;
}
