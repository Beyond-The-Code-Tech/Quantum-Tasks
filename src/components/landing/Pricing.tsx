import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for personal use',
    features: [
      'Up to 10 projects',
      'Basic task management',
      'Simple analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'Best for growing teams',
    features: [
      'Unlimited projects',
      'AI task prioritization',
      'Advanced analytics',
      'Priority support',
      'Team collaboration',
      'Custom workflows',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'Advanced security',
      'API access',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Choose Your Plan
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-6 bg-slate-900/50 backdrop-blur-lg rounded-lg border ${
                plan.popular ? 'border-purple-500' : 'border-slate-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                <p className="text-slate-400">{plan.description}</p>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}