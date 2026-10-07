import type { PilotSubmission } from '../types';

export const STORAGE_KEY = 'buildmateAI_pilotRequests';

export function generateUniqueId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    try {
      return crypto.randomUUID();
    } catch {
      // Fallback if randomUUID fails in restricted context
    }
  }
  return 'bm_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 10);
}

export function getStoredSubmissions(): { success: boolean; data: PilotSubmission[]; error?: string } {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return { success: false, data: [], error: 'Browser local storage is not available in this environment.' };
    }

    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) {
      return { success: true, data: [] };
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return {
        success: false,
        data: [],
        error: 'Existing stored pilot data in localStorage is malformed and cannot be parsed as JSON.'
      };
    }

    if (!Array.isArray(parsed)) {
      return {
        success: false,
        data: [],
        error: 'Existing stored pilot data in localStorage is corrupted (not an array).'
      };
    }

    return { success: true, data: parsed as PilotSubmission[] };
  } catch (err) {
    return {
      success: false,
      data: [],
      error: `Failed to access localStorage: ${err instanceof Error ? err.message : 'Unknown storage access error'}`
    };
  }
}

export function savePilotSubmission(data: {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}): { success: boolean; record?: PilotSubmission; error?: string } {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return { success: false, error: 'Browser local storage is not available in this environment.' };
    }

    // Step 1 & 2: Read current value
    const raw = localStorage.getItem(STORAGE_KEY);
    let currentArray: PilotSubmission[] = [];

    if (raw !== null) {
      // Step 3: Parse existing JSON
      let parsed: unknown;
      try {
        parsed = JSON.parse(raw);
      } catch {
        // Rule: If existing stored data is malformed, do not overwrite it. Show clear error.
        return {
          success: false,
          error: 'Cannot save: Existing stored pilot data in this browser is malformed. To prevent data loss, the record was not overwritten.'
        };
      }

      // Step 4: Verify array
      if (!Array.isArray(parsed)) {
        return {
          success: false,
          error: 'Cannot save: Existing stored pilot data in this browser is invalid (not an array). To prevent data loss, the record was not overwritten.'
        };
      }

      currentArray = parsed as PilotSubmission[];
    }

    // Prepare new entry
    const newSubmission: PilotSubmission = {
      id: generateUniqueId(),
      fullName: data.fullName.trim(),
      phoneNumber: data.phoneNumber.trim(),
      emailAddress: data.emailAddress.trim(),
      organisationName: data.organisationName.trim(),
      submittedAt: new Date().toISOString()
    };

    // Step 5: Append new submission (preserve all previous entries)
    const updatedArray = [...currentArray, newSubmission];

    // Step 6: Save combined array
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedArray));
    } catch (saveError) {
      // Step 8: Handle quota exceeded or blocked storage
      return {
        success: false,
        error: `Could not write to local storage: ${saveError instanceof Error ? saveError.message : 'Storage quota exceeded or storage blocked.'}`
      };
    }

    // Step 7: Return success only after localStorage.setItem succeeds
    return { success: true, record: newSubmission };
  } catch (err) {
    return {
      success: false,
      error: `Unexpected storage error: ${err instanceof Error ? err.message : 'Failed to save submission.'}`
    };
  }
}
