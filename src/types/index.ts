export interface Node {
  id: string;
  type: 'START' | 'TASK' | 'APPROVAL' | 'AUTOMATED' | 'END';
  label: string;
  position: { x: number; y: number };
  data?: any;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}
