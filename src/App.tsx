{
  "name": "App.tsx",
  "path": "src/App.tsx",
  "sha": "c431f0062c285c956df23e2ae7302f49ca1c95be",
  "size": 540,
  "url": "https://api.github.com/repos/amanlonare/portfolio/contents/src/App.tsx?ref=feat/add-submit-button",
  "html_url": "https://github.com/amanlonare/portfolio/blob/feat/add-submit-button/src/App.tsx",
  "git_url": "https://api.github.com/repos/amanlonare/portfolio/git/blobs/c431f0062c285c956df23e2ae7302f49ca1c95be",
  "download_url": "https://raw.githubusercontent.com/amanlonare/portfolio/feat/add-submit-button/src/App.tsx",
  "type": "file",
  "content": "/**\n * @license\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport { Resume } from \"./components/Resume\";\nimport Navbar from \"./components/Navbar\";\nimport Hero from \"./components/Hero\";\nimport About from \"./components/About\";\nimport Chatbot from \"./components/Chatbot\";\n\nexport default function App() {\n  return (\n    <div className=\"bg-[#050505] min-h-screen text-white relative overflow-x-hidden\">\n      <Navbar />\n      <Hero />\n      <About />\n      <div id=\"skills\">\n        <Resume />\n      </div>\n      <button className="bg-green-500 text-white py-2 px-4 rounded">Submit Review</button>
      <Chatbot />\n    </div>\n  );\n}\n",
  "encoding": "base64",
  "_links": {
    "self": "https://api.github.com/repos/amanlonare/portfolio/contents/src/App.tsx?ref=feat/add-submit-button",
    "git": "https://api.github.com/repos/amanlonare/portfolio/git/blobs/c431f0062c285c956df23e2ae7302f49ca1c95be",
    "html": "https://github.com/amanlonare/portfolio/blob/feat/add-submit-button/src/App.tsx"
  }
}