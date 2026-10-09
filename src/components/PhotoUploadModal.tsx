import { useState } from 'react';
import { X, Upload, RotateCcw, Image, Check } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  onSavePhoto: (photoUrl: string | null) => void;
}

export function PhotoUploadModal({
  isOpen,
  onClose,
  currentPhoto,
  onSavePhoto,
}: PhotoUploadModalProps) {
  if (!isOpen) return null;

  const [previewUrl, setPreviewUrl] = useState<string | null>(currentPhoto);
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size exceeds 5MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPreviewUrl(result);
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) return;
    setPreviewUrl(urlInput.trim());
    setUrlInput('');
  };

  const handleSave = () => {
    onSavePhoto(previewUrl);
    onClose();
  };

  const handleResetToPlaceholder = () => {
    setPreviewUrl(null);
    onSavePhoto(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0B1120] border border-white/[0.1] shadow-2xl p-6 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 text-sky-400" />
            <h3 className="text-base font-bold text-white">
              Profile Photo Customizer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current / Preview Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-36 h-36 rounded-2xl overflow-hidden bg-slate-900 border-2 border-sky-400/40 shadow-lg shadow-sky-950/40 flex items-center justify-center mb-3">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400 p-3 text-center">
                <span className="text-xl font-black text-sky-300">SSK</span>
                <span className="text-[10px] text-slate-400 mt-1">Default Monogram</span>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-400 text-center">
            Upload your professional headshot or keep the clean monogram.
          </p>
        </div>

        {/* Upload Controls */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Choose from Computer:
            </label>
            <label className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-dashed border-white/[0.15] hover:border-sky-500 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:text-sky-300 cursor-pointer transition-all text-xs font-semibold">
              <Upload className="w-4 h-4 text-sky-400" />
              <span>Select Image File (PNG, JPG)</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1.5">
              Or Paste an Image URL:
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="flex-1 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={handleApplyUrl}
                disabled={!urlInput.trim()}
                className="px-3 py-2 bg-white/[0.08] hover:bg-white/[0.15] disabled:opacity-40 text-xs font-semibold text-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>

          {error && (
            <p className="text-xs text-rose-400 bg-rose-950/40 p-2.5 rounded-lg border border-rose-800/40">
              {error}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={handleResetToPlaceholder}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-900/30 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Photo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
