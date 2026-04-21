import React, { useCallback, useRef } from 'react';
import ReactFlow from 'reactflow';
import type { 
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  ReactFlowInstance
} from 'reactflow';
import { Background, Controls, BackgroundVariant } from 'reactflow';
import { StartNode, TaskNode, ApprovalNode, AutomatedNode, EndNode } from '../nodes/allNodes';
import type { WorkflowNodeType } from '../types';

interface CanvasContainerProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  onNodeClick: (event: React.MouseEvent, node: Node) => void;
  onPaneClick: () => void;
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}

const nodeTypes = {
  START: StartNode,
  TASK: TaskNode,
  APPROVAL: ApprovalNode,
  AUTOMATED: AutomatedNode,
  END: EndNode,
};

const CanvasContainer: React.FC<CanvasContainerProps> = ({ 
  nodes, 
  edges, 
  onNodesChange, 
  onEdgesChange, 
  onConnect,
  onNodeClick,
  onPaneClick,
  setNodes
}) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = React.useState<ReactFlowInstance | null>(null);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow') as WorkflowNodeType;

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: `node_${Math.random().toString(36).substr(2, 9)}`,
        type,
        position,
        data: { label: `New ${type}`, type },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <main className="flex-1 overflow-hidden relative bg-slate-50" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1} 
          color="#e2e8f0" 
        />
        <Controls 
          className="bg-white border border-slate-200 rounded-lg shadow-premium !m-6"
          showInteractive={false}
        />
      </ReactFlow>

      <div className="absolute top-6 left-6 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 px-4 py-2 rounded-full shadow-sm flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Live Editor</span>
        </div>
      </div>
    </main>
  );
};

export default CanvasContainer;
