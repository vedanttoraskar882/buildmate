import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Database, HardDrive } from 'lucide-react';
import { STORAGE_KEY } from '../utils/storage';

interface StorageInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const StorageInfoModal: React.FC<StorageInfoModalProps> = ({
  isOpen,
  onClose,
  triggerElement,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);

      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    };
  }, [isOpen, onClose, triggerElement]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="storage-modal-title"
        aria-describedby="storage-modal-desc"
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
      >
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-slate-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="storage-modal-title" className="text-lg font-bold text-slate-900 tracking-tight">
                Demonstration Storage & Data Notice
              </h2>
              <p id="storage-modal-desc" className="text-xs text-slate-500">
                Information on how this interactive showcase stores data
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800 text-xs uppercase tracking-wider">
              <HardDrive className="w-4 h-4 text-teal-600" />
              <span>Client-Side Only</span>
            </div>
            <p className="text-xs text-slate-600">
              This website is a frontend-only technology preview and marketing landing page. It operates entirely within your web browser with no backend servers, external databases, cloud services, tracking pixels, or email providers connected.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
              <Database className="w-4 h-4 text-teal-600" />
              How Pilot Requests Are Handled
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>
                When you submit a pilot interest form, the data is saved exclusively inside your browser's <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-800">{STORAGE_KEY}</code> key.
              </li>
              <li>
                Data never leaves your local device or network.
              </li>
              <li>
                You can clear these records at any time by clearing your browser's site data or website cookies/storage for this page.
              </li>
            </ul>
          </div>

          <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-900">
            <strong>Proposed Development Status:</strong> BuildMate AI Ltd is a proposed company and platform in active development. Commercial launch documents, full Terms of Service, and enterprise Data Processing Agreements will be published upon commercial launch.
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
