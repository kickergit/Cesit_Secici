
import React, { useState } from 'react';

const initialHtmlContent = `
<div class="font-sans p-8">
  <h1 class="text-4xl font-bold text-gray-800 mb-4">
    Live HTML Preview
  </h1>
  <p class="text-gray-600 mb-6">
    Start typing in the editor to see your HTML rendered here in real-time.
  </p>

  <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
    <p class="font-bold">Try it out!</p>
    <p>You can use any HTML tags and even Tailwind CSS classes.</p>
  </div>

  <h2 class="text-2xl font-semibold text-gray-700 mb-3">
    Features
  </h2>
  <ul class="list-disc list-inside text-gray-600 mb-6">
    <li>Real-time rendering</li>
    <li>Supports standard HTML5</li>
    <li>Tailwind CSS classes work out-of-the-box</li>
  </ul>

  <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
    Click Me
  </button>
</div>
`;

const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>(initialHtmlContent);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans flex flex-col">
      <header className="py-4 px-6 md:px-8 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">
          HTML Real-time Previewer
        </h1>
        <p className="text-gray-400">
          Built by a world-class senior frontend React engineer.
        </p>
      </header>

      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 lg:p-8">
        {/* Editor Panel */}
        <div className="flex flex-col bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white">HTML Editor</h2>
          </div>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            spellCheck="false"
            className="flex-grow w-full h-full bg-gray-900 text-gray-300 p-4 font-mono text-sm resize-none focus:outline-none placeholder-gray-500"
            placeholder="<!-- Type your HTML code here -->"
          />
        </div>

        {/* Preview Panel */}
        <div className="flex flex-col bg-white rounded-lg border border-gray-300 overflow-hidden shadow-2xl">
          <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Live Preview</h2>
          </div>
          <div className="flex-grow overflow-auto p-4">
            <div
              dangerouslySetInnerHTML={{ __html: htmlCode }}
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
