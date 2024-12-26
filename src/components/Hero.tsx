import React from 'react';
import { Play } from 'lucide-react';
import { playShowreel } from '../utils/video';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c"
      >
        <source
          src="https://player.vimeo.com/external/459389137.hd.mp4?s=865d2b4e96dc4c5c83c3565bf6b197c0a4e6bef0"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-orange-500/30" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Crafting Stories That Move People
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Award-winning documentary and film production company dedicated to telling powerful stories
          </p>
          <button 
            onClick={playShowreel}
            className="bg-orange-500 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto hover:bg-orange-600 transition-colors"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Showreel
          </button>
        </div>
      </div>
    </div>
  );
}