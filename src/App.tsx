/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout, Database, Cpu, FileText, Users, Settings, Activity } from 'lucide-react';

export default function App() {
  const modules = [
    { name: 'Config', icon: Settings, description: 'External services (Supabase, Gemini) configuration' },
    { name: 'AI', icon: Cpu, description: 'Gemini client and prompt engineering' },
    { name: 'Services', icon: Layout, description: 'Core business logic (Assessments, Evaluation)' },
    { name: 'Repositories', icon: Database, description: 'Data access layer for Supabase' },
    { name: 'Pipelines', icon: Activity, description: 'AI processing workflows (PDF Extraction, Grading)' },
    { name: 'Types', icon: FileText, description: 'Domain models and TypeScript interfaces' },
    { name: 'Utils', icon: Users, description: 'Helper functions and shared utilities' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans p-8">
      <header className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">EduAssess AI</h1>
        <p className="text-zinc-500 text-lg">Initial Architecture Scaffolding</p>
      </header>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <div key={mod.name} className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <mod.icon className="w-6 h-6 text-zinc-700" />
                </div>
                <h2 className="text-xl font-semibold">{mod.name}</h2>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                {mod.description}
              </p>
              <div className="mt-4 pt-4 border-top border-zinc-100">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">/src/{mod.name.toLowerCase()}</span>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 p-8 bg-zinc-900 text-white rounded-3xl overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 italic serif">System Overview</h3>
            <ul className="space-y-3 opacity-80">
              <li>• AI-powered PDF extraction for class lists and assessments</li>
              <li>• Automated student answer evaluation via Gemini API</li>
              <li>• Real-time performance reporting and skill analysis</li>
              <li>• Scalable PostgreSQL storage via Supabase</li>
            </ul>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
        </section>
      </main>
    </div>
  );
}

