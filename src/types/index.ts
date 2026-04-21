import type { Node as RFNode } from 'reactflow';

export type WorkflowNodeType = 'START' | 'TASK' | 'APPROVAL' | 'AUTOMATED' | 'END';

export interface WorkflowNodeData {
  label: string;
  type: WorkflowNodeType;
  description?: string;
  status?: 'pending' | 'success' | 'error';
  // Configurable fields
  assignee?: string;
  deadline?: string;
  webhookUrl?: string;
}

export type WorkflowNode = RFNode<WorkflowNodeData>;
