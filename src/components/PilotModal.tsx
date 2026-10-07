import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, AlertCircle, Building, User, Mail, Phone, ArrowRight } from 'lucide-react';
import { savePilotSubmission } from '../utils/storage';
import type { FormErrors } from '../types';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, triggerElement }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management & Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    if (saveSuccess) {
      setSaveSuccess(false);
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
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
  }, [isOpen, onClose, triggerElement, saveSuccess]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: FormErrors = {};

    const trimmedName = fullName.trim();
    if (!trimmedName) {
      errs.fullName = 'Please enter your full name.';
    } else if (trimmedName.length < 2) {
      errs.fullName = 'Full name must be at least 2 characters.';
    }

    const trimmedPhone = phoneNumber.trim();
    const phoneRegex = /^[+]?[(]?[0-9\s]{1,4}[)]?[-\s./0-9]{6,20}$/;
    if (!trimmedPhone) {
      errs.phoneNumber = 'Please enter your phone number.';
    } else if (!phoneRegex.test(trimmedPhone) || trimmedPhone.replace(/\D/g, '').length < 7) {
      errs.phoneNumber = 'Please enter a valid telephone number (minimum 7 digits).';
    }

    const trimmedEmail = emailAddress.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!trimmedEmail) {
      errs.emailAddress = 'Please enter your email address.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errs.emailAddress = 'Please enter a valid email address.';
    }

    const trimmedOrg = organisationName.trim();
    if (!trimmedOrg) {
      errs.organisationName = "Please enter your organisation or trading name (or 'Sole trader').";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const result = savePilotSubmission({
      fullName,
      phoneNumber,
      emailAddress,
      organisationName,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSaveSuccess(true);
      setFullName('');
      setPhoneNumber('');
      setEmailAddress('');
      setOrganisationName('');
    } else {
      setErrors({
        general: result.error || 'Failed to save to local storage. Please check your browser storage permissions.',
      });
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs transition-opacity animate-fade-in"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pilot-modal-title"
        aria-describedby="pilot-modal-desc"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-fade-up"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between bg-[#F8FAFC]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-2 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              Pilot Programme Registration
            </div>
            <h2 id="pilot-modal-title" className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight font-heading">
              Request a Pilot
            </h2>
            <p id="pilot-modal-desc" className="text-xs sm:text-sm text-slate-600 mt-1">
              Tell us about your business and interest in BuildMate AI.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Region for Screen Readers */}
        <div className="sr-only" aria-live="polite">
          {saveSuccess
            ? 'Your pilot interest has been saved in this browser.'
            : errors.general || ''}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {saveSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-200 shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950 font-heading">
                  Interest Saved Successfully
                </h3>
                <p className="text-sm text-slate-700 max-w-sm mx-auto font-medium leading-relaxed">
                  Your pilot interest has been saved in this browser.
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setSaveSuccess(false)}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Record Another Interest
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors shadow-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errors.general && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Storage Error: </strong>
                    <span>{errors.general}</span>
                  </div>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    ref={firstInputRef}
                    id="fullName"
                    name="fullName"
                    type="text"
                    maxLength={100}
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors ${
                      errors.fullName
                        ? 'border-red-400 bg-red-50/20'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-800 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    maxLength={30}
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
                    }}
                    placeholder="Enter telephone number"
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-400 bg-red-50/20'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-800 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    maxLength={120}
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      if (errors.emailAddress) setErrors((prev) => ({ ...prev, emailAddress: undefined }));
                    }}
                    placeholder="Enter email address"
                    aria-invalid={!!errors.emailAddress}
                    aria-describedby={errors.emailAddress ? 'emailAddress-error' : undefined}
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors ${
                      errors.emailAddress
                        ? 'border-red-400 bg-red-50/20'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p id="emailAddress-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-800 mb-1">
                  Organisation Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    id="organisationName"
                    name="organisationName"
                    type="text"
                    maxLength={120}
                    value={organisationName}
                    onChange={(e) => {
                      setOrganisationName(e.target.value);
                      if (errors.organisationName)
                        setErrors((prev) => ({ ...prev, organisationName: undefined }));
                    }}
                    placeholder="Organisation or trading name"
                    aria-invalid={!!errors.organisationName}
                    aria-describedby="org-helper"
                    className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 transition-colors ${
                      errors.organisationName
                        ? 'border-red-400 bg-red-50/20'
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  />
                </div>
                <p id="org-helper" className="mt-1.5 text-xs text-slate-500">
                  Enter your trading name, or 'Sole trader'.
                </p>
                {errors.organisationName && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.organisationName}</p>
                )}
              </div>

              {/* Form Action Buttons (Clean & fully accessible, no clipping) */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? 'Saving...' : 'Save Pilot Interest'}</span>
                  {!isSubmitting && <ArrowRight className="w-3.5 h-3.5 text-teal-400" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
