import React, { useState, useCallback } from 'react';
import type { Node, Edge, Connection, OnNodesChange, OnEdgesChange, OnConnect } from 'reactflow';
import { addEdge, applyNodeChanges, applyEdgeChanges } from 'reactflow';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CanvasContainer from './components/CanvasContainer';
import NodeConfigPanel from './components/NodeConfigPanel';
import SimulationPanel from './components/SimulationPanel';
import type { WorkflowNode } from './types';
import { simulateWorkflow } from './api/workflow';
import type { SimulationLog } from './api/workflow';

console.log('App component is loading');

const initialNodes: WorkflowNode[] = [
  { 
    id: 'start-1', 
    type: 'START', 
    data: { label: 'Onboarding Start', type: 'START', description: 'Triggered when a new record is created.' }, 
    position: { x: 100, y: 150 } 
  },
];

const App: React.FC = () => {
  // Flow State
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  // Selection State
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  
  // Simulation State
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLogs, setSimulationLogs] = useState<SimulationLog[]>([]);
  const [showSimPanel, setShowSimPanel] = useState(false);

  // Flow handlers
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect: OnConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNodeId(node.id);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  // Selection data
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) as WorkflowNode | undefined;

  // State update logic for NodeConfigPanel
  const updateNodeData = useCallback((id: string, data: any) => {
    setNodes((nds) => 
      nds.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, ...data } };
        }
        return node;
      })
    );
  }, []);

  // Simulation logic
  const handleRunWorkflow = async () => {
    setIsSimulating(true);
    setSimulationLogs([]);
    setShowSimPanel(true);

    try {
      const logs = await simulateWorkflow(nodes, edges);
      setSimulationLogs(logs);
    } catch (error) {
      console.error('Simulation failed:', error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white selection:bg-blue-100 relative">
      <Header onRun={handleRunWorkflow} isSimulating={isSimulating} />
      
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        
        <CanvasContainer 
          nodes={nodes} 
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          setNodes={setNodes}
        />
        
        <NodeConfigPanel 
          selectedNode={selectedNode}
          onUpdateData={(data) => selectedNodeId && updateNodeData(selectedNodeId, data)}
        />

        {showSimPanel && (
          <SimulationPanel 
            logs={simulationLogs} 
            isSimulating={isSimulating} 
            onClose={() => setShowSimPanel(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
