import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Trophy, Palette } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Prioritization',
    description: 'Let our quantum AI analyze and prioritize your tasks for maximum efficiency.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Work together in real-time with your team across the cosmos.',
  },
  {
    icon: Trophy,
    title: 'Cosmic Achievements',
    description: 'Level up your productivity with space-themed rewards and milestones.',
  },
  {
    icon: Palette,
    title: 'Custom Workspaces',
    description: 'Design your perfect task environment with celestial themes and layouts.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
        >
          Discover the Future of Task Management
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 bg-slate-900/50 backdrop-blur-lg rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              <feature.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}