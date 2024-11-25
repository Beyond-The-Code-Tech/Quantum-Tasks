import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import { Layout, Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  priority: number;
  dueDate: string;
  comments: number;
  attachments: number;
}

const initialTasks = [
  {
    id: '1',
    title: 'Design New Dashboard Interface',
    priority: 3,
    dueDate: 'Tomorrow',
    comments: 5,
    attachments: 2,
  },
  {
    id: '2',
    title: 'Implement AI Task Prioritization',
    priority: 2,
    dueDate: 'Next Week',
    comments: 3,
    attachments: 1,
  },
  {
    id: '3',
    title: 'User Testing Session',
    priority: 1,
    dueDate: 'In 3 days',
    comments: 8,
    attachments: 4,
  },
];

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask: { title: string; priority: number; dueDate: string }) => {
    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      ...newTask,
      comments: 0,
      attachments: 0,
    };
    setTasks([...tasks, task]);
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Layout className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">Current Sprint</h2>
        </div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTask}
      />
    </div>
  );
}