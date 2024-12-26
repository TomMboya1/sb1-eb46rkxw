import React from 'react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-white dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-black/50 p-6 rounded-lg shadow-lg hover:shadow-xl dark:hover:bg-black/70 transition-all border border-orange-500/20 group hover:border-orange-500"
            >
              <service.icon className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-orange-500 mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}