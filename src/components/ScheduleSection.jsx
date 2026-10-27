import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { weeklySchedule } from '../data/classData';

export default function ScheduleSection() {
  const [selectedDay, setSelectedDay] = useState('Semua');

  const daysList = ['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Sabtu'];

  // Flatten or filter schedule
  const activeSchedules = weeklySchedule.filter((dayObj) => {
    if (selectedDay === 'Semua') {
      return dayObj.classes.length > 0;
    }
    return dayObj.day === selectedDay;
  });

  return (
    <section id="jadwal" className="py-16 border-t border-slate-800/80 bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Kalender Akademik Semester 3</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Jadwal Perkuliahan Mingguan
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Alokasi 22 SKS perkuliahan teori dan praktik pada laboratorium FIKOM UDB.
            </p>
          </div>

          {/* Filter Days */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-navy-950/80 border border-slate-800 rounded-lg">
            {daysList.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Display */}
        <div className="space-y-8">
          {activeSchedules.map((daySchedule) => (
            <div key={daySchedule.day} className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-base font-semibold text-white tracking-wide">
                  Hari {daySchedule.day}
                </span>
                <span className="h-px flex-1 bg-slate-800"></span>
                <span className="text-xs font-mono text-slate-400">
                  {daySchedule.classes.length} Mata Kuliah
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {daySchedule.classes.map((course) => (
                  <div
                    key={course.id}
                    className="p-5 rounded-xl border border-slate-800 bg-navy-950/80 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/40 font-semibold">
                          {course.code} &bull; {course.credits} SKS
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                          {course.type}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-white leading-snug">
                          {course.course}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1.5">
                          <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{course.lecturer}</span>
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-slate-300">
                        <div className="flex items-center space-x-1.5 font-mono">
                          <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{course.time}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 font-mono text-amber-400">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{course.room}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 gap-2">
                        <span className="truncate">PJ: {course.pj}</span>
                        {course.pjIg && (
                          <a
                            href={`https://instagram.com/${course.pjIg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 font-mono shrink-0 ml-1"
                          >
                            <span>@{course.pjIg}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Summary Banner */}
        <div className="p-4 rounded-xl border border-slate-800 bg-navy-950/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              Perkuliahan mengacu pada ketentuan akademik Fakultas Ilmu Komputer, Universitas Duta Bangsa Surakarta.
            </span>
          </div>
          <span className="font-mono text-slate-300 shrink-0">
            Total 22 SKS Semester 3
          </span>
        </div>

      </div>
    </section>
  );
}
