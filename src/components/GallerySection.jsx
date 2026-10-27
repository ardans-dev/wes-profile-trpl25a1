import React, { useState } from 'react';
import { Image as ImageIcon, MapPin, Calendar, Maximize2, X } from 'lucide-react';
import { activities } from '../data/classData';

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="dokumentasi" className="py-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Arsip Dokumentasi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Kegiatan & Pengalaman Belajar
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Catatan dokumentasi studi lapangan, praktikum, dan silaturahmi mahasiswa TRPL 25 A1.
            </p>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="rounded-2xl border border-slate-800 bg-navy-950/70 overflow-hidden hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              {/* Image with zoom overlay */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-navy-900 cursor-pointer"
                onClick={() => setActiveImage(activity)}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-navy-950/80 backdrop-blur-md border border-slate-800 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-navy-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-blue-300 font-medium">
                    {activity.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {activity.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {activity.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-navy-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg bg-black/70 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
                aria-label="Tutup pratinjau foto"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="p-6 space-y-2 border-t border-slate-800">
                <span className="text-xs font-mono text-blue-400">{activeImage.category}</span>
                <h4 className="text-base font-bold text-white">{activeImage.title}</h4>
                <p className="text-xs text-slate-400">{activeImage.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
