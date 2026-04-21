import React from 'react';
import type { NodeProps } from 'reactflow';
import BaseNode from './BaseNode';
import type { WorkflowNodeData } from '../types';

export const StartNode: React.FC<NodeProps<WorkflowNodeData>> = ({ id, data, selected }) => (
  <BaseNode id={id} type="START" label="Start" icon="🚩" colorClass="bg-black text-white" selected={selected}>
    <p className="text-[13px] font-bold text-slate-800">{data.label}</p>
  </BaseNode>
);

export const TaskNode: React.FC<NodeProps<WorkflowNodeData>> = ({ id, data, selected }) => (
  <BaseNode id={id} type="TASK" label="Action" icon="⚡" colorClass="bg-blue-500 text-white" selected={selected}>
    <p className="text-[13px] font-bold text-slate-800">{data.label}</p>
  </BaseNode>
);

export const ApprovalNode: React.FC<NodeProps<WorkflowNodeData>> = ({ id, data, selected }) => (
  <BaseNode id={id} type="APPROVAL" label="Approval" icon="▶️" colorClass="bg-red-200 text-red-600" selected={selected}>
    <p className="text-[13px] font-bold text-slate-800">{data.label}</p>
  </BaseNode>
);

export const AutomatedNode: React.FC<NodeProps<WorkflowNodeData>> = ({ id, data, selected }) => (
  <BaseNode id={id} type="AUTOMATED" label="Robot" icon="🛠️" colorClass="bg-purple-500 text-white" selected={selected}>
    <p className="text-[13px] font-bold text-slate-800">{data.label}</p>
  </BaseNode>
);

export const EndNode: React.FC<NodeProps<WorkflowNodeData>> = ({ id, data, selected }) => (
  <BaseNode id={id} type="END" label="End" icon="⏹️" colorClass="bg-red-800 text-white" selected={selected}>
    <p className="text-[13px] font-bold text-slate-800">{data.label}</p>
  </BaseNode>
);
