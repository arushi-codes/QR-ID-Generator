import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { adjectives, nouns, getRandomItem } from './utils/wordLists';

function App() {
  const [id, setId] = useState('shadow-golem-373');
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(false);

  const generateNewId = () => {
    const adj = getRandomItem(adjectives);
    const noun = getRandomItem(nouns);
    const num = Math.floor(Math.random() * 900) + 100;
    const newId = `${adj}-${noun}-${num}`;
    
    setId(newId);
    setHistory(prev => [newId, ...prev].slice(0, 5));
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQR = () => {
    const canvas = document.getElementById('qr-code');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${id}-qr.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b3c] to-[#1e0b2a] py-8 px-4">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#c77dff] via-[#b56aff] to-[#9d4edd] text-transparent bg-clip-text mb-2">
            ✨ QR ID Generator
          </h1>
          <p className="text-[#b794f4]">
            Generate beautiful, human-readable IDs with QR codes
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#2a1038] rounded-2xl shadow-2xl p-6 mb-4 border border-[#6b21a5]">
          
          {/* ID Display Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-[#d8b4fe]">
                YOUR UNIQUE ID
              </label>
              <button
                onClick={generateNewId}
                className="text-sm bg-gradient-to-r from-[#9333ea] to-[#6b21a5] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                🎲 Generate New
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#1e0b2a] border-2 border-dashed border-[#6b21a5] rounded-lg p-3">
                <p className="text-xl font-mono font-semibold text-[#e9d5ff]">
                  {id}
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  copied 
                    ? 'bg-[#581c87] text-[#d8b4fe]' 
                    : 'bg-[#1e0b2a] text-[#c77dff] hover:bg-[#2e1a3a]'
                }`}
                title="Copy to clipboard"
              >
                {copied ? '✅' : '📋'}
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-[#d8b4fe]">
                QR CODE
              </label>
              <button
                onClick={downloadQR}
                className="text-sm bg-[#1e0b2a] text-[#c77dff] px-3 py-1 rounded-lg hover:bg-[#2e1a3a] transition-colors border border-[#6b21a5]"
              >
                ⬇️ Download
              </button>
            </div>
            
            <div className="bg-[#1e0b2a] rounded-xl p-6 flex justify-center border border-[#6b21a5]">
              <div className="bg-white p-3 rounded-lg shadow-lg shadow-purple-900/20">
                <QRCodeCanvas 
                  id="qr-code"
                  value={id} 
                  size={180}
                  level="H"
                  includeMargin={true}
                  bgColor="#ffffff"
                  fgColor="#1e0b2a"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 text-center text-sm">
            <div className="bg-[#1e0b2a] rounded-lg p-2 border border-[#6b21a5]">
              <span className="text-[#c77dff] font-semibold">
                {id.length}
              </span>
              <span className="text-[#b794f4] ml-1">characters</span>
            </div>
            <div className="bg-[#1e0b2a] rounded-lg p-2 border border-[#6b21a5]">
              <span className="text-[#c77dff] font-semibold">
                {adjectives.length * nouns.length * 900}
              </span>
              <span className="text-[#b794f4] ml-1">possibilities</span>
            </div>
          </div>
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div className="bg-[#2a1038] rounded-2xl shadow-2xl p-6 border border-[#6b21a5]">
            <h3 className="text-sm font-medium text-[#d8b4fe] mb-3">
              📜 RECENTLY GENERATED
            </h3>
            <div className="flex flex-wrap gap-2">
              {history.map((oldId, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setId(oldId);
                    setCopied(false);
                  }}
                  className="group relative bg-[#1e0b2a] hover:bg-[#2e1a3a] px-3 py-1 rounded-full text-sm transition-colors border border-[#6b21a5] hover:border-[#9333ea]"
                >
                  <span className="text-[#b794f4] group-hover:text-[#e9d5ff]">
                    {oldId}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-[#6b21a5] mt-4">
          Click on any recent ID to reuse it • QR codes include error correction
        </p>
      </div>
    </div>
  );
}

export default App;