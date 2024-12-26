import React from 'react';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-white to-orange-50 dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => window.open(project.url, '_blank')}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/80 via-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <span className="text-orange-300 text-sm font-medium mb-2">{project.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}