import { useState } from 'react';
import type { Node, Edge } from 'reactflow';

/**
 * Hook to manage workflow state
 */
export const useWorkflow = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const addNode = (node: Node) => {
    setNodes((prev) => [...prev, node]);
  };

  const addEdge = (edge: Edge) => {
    setEdges((prev) => [...prev, edge]);
  };

  return {
    nodes,
    edges,
    addNode,
    addEdge,
  };
};
