import React from 'react';
import { Clock, Star, MessageSquare, Paperclip } from 'lucide-react';

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    priority: number;
    dueDate: string;
    comments: number;
    attachments: number;
  };
}

export default function TaskCard({ task }: TaskCardProps) {
  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 3: return 'bg-purple-500';
      case 2: return 'bg-blue-500';
      default: return 'bg-indigo-500';
    }
  };

  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-lg rounded-lg p-4 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${getPriorityColor(task.priority)} rounded-full opacity-10 blur-xl`} />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <span className="text-xs text-slate-400">Priority {task.priority}</span>
        </div>
        
        <h3 className="text-white font-medium mb-3">{task.title}</h3>
        
        <div className="flex items-center justify-between text-slate-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs">{task.dueDate}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs">{task.comments}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <Paperclip className="w-4 h-4" />
                <span className="text-xs">{task.attachments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}