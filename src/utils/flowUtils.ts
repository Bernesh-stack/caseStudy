/**
 * Utility functions for workflow logic
 */

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
};
