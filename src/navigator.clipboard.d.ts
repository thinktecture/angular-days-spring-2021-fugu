// Type declarations for Clipboard API
// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
interface Clipboard {
  write(items: ClipboardItem[]): Promise<any>;
  read(): Promise<ClipboardItem[]>;
}

interface ClipboardItem {
  types: string[];
  getType(type: string): Promise<Blob>;
}

declare var ClipboardItem: {
  new(item: { [key: string]: Blob }): ClipboardItem;
}
