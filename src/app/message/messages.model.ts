import {Message} from 'primeng/api';

export enum Severity {
  SUCCESS = 'success',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

export function message(severity: Severity, summary?: string, detail?: string): Message {
  return {
    summary,
    detail,
    severity
  };
}

export function infoMessage(summary?: string, detail?: string): Message {
  return message(Severity.INFO, summary, detail);
}

export function warnMessage(summary?: string, detail?: string): Message {
  return message(Severity.WARN, summary, detail);
}

export function successMessage(detail?: string, summary: string = 'Sukces'): Message {
  return message(Severity.SUCCESS, summary, detail);
}

export function errorMessage(summary?: string, detail?: string): Message {
  return message(Severity.ERROR, summary, detail);
}

export function genericError() {
  return errorMessage('Błąd', 'Generyczny błąd');
}
