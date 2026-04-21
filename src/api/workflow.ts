/**
 * Mock API service for Workflow simulations.
 */

export interface SimulationLog {
  id: string;
  nodeId: string;
  nodeLabel: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  timestamp: string;
}

export const getAutomations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Email Notification Service' },
        { id: '2', name: 'Slack Integration' },
        { id: '3', name: 'Database Sync' },
      ]);
    }, 800);
  });
};

export const simulateWorkflow = async (nodes: any[], edges: any[]): Promise<SimulationLog[]> => {
  console.log('Simulating Workflow with:', { nodeCount: nodes.length, edgeCount: edges.length });
  
  return new Promise((resolve) => {
    const logs: SimulationLog[] = [];
    
    // Simple mock logic: create a log for each node
    nodes.forEach((node, index) => {
      logs.push({
        id: `log_${index}`,
        nodeId: node.id,
        nodeLabel: node.data.label,
        status: 'success',
        message: `Node "${node.data.label}" executed successfully.`,
        timestamp: new Date().toLocaleTimeString(),
      });
    });

    setTimeout(() => {
      resolve(logs);
    }, 1500);
  });
};
