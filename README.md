# HR Workflow Designer 🚀

A premium, interactive HR Workflow Designer built for modern human resource management. This tool allows HR professionals to visually design, configure, and simulate complex workflows such as employee onboarding, performance reviews, and automated approvals.

![HR Workflow Designer](https://images.unsplash.com/photo-1454165833767-027eeef1596e?q=80&w=2070&auto=format&fit=crop)

---

## 🔹 1. Project Overview

The **HR Workflow Designer** provides a visual playground for building process maps. Instead of rigid spreadsheets, users can drag and drop nodes to represent different stages of an HR process.

### Key Features
- **Drag-and-Drop Canvas**: Powered by React Flow for a smooth, high-performance experience.
- **Custom Workflow Nodes**: Specialized nodes for Start, Task, Approval, Automation, and End.
- **Polymorphic Configuration**: Dynamic sidebars that adapt based on the selected node type (e.g., showing Assignees for Tasks or Webhook URLs for Automations).
- **Workflow Simulation**: Test your logic instantly with a mock simulation engine and execution logs.
- **Premium Aesthetics**: Sleek dark/light design with glassmorphism and modern typography (Inter).

---

## 🔹 2. Architecture

The project follows a modular, feature-first architecture designed for scalability and maintainability.

### Folder Structure
```text
src/
├── api/          # Mock API engine and services
├── components/   # Core UI (Canvas, Sidebar, Config Panels)
├── hooks/        # Custom state and workflow logic hooks
├── nodes/        # Custom React Flow node definitions
├── types/        # TypeScript interfaces and enums
└── utils/        # Shared helper functions
```

### State Management
The application manages flow state (nodes, edges, and connections) using a centralized state in `App.tsx`, leveraging React's `useState` and `useCallback` for optimized re-renders. 
- **React Flow State**: Managed via `onNodesChange`, `onEdgesChange`, and `onConnect` hooks provided by React Flow.
- **Selection State**: A global `selectedNodeId` tracks which element is being configured in the panel.

### Node Design
Nodes are designed using a type-safe system:
- **`WorkflowNode`**: Extends the base `Node` type from React Flow.
- **`WorkflowNodeData`**: A rich interface containing:
  - `label`: Display name.
  - `type`: Enum (`START`, `TASK`, `APPROVAL`, `AUTOMATED`, `END`).
  - `assignee`, `deadline`, `webhookUrl`: Type-specific metadata.

### Form Handling
The **NodeConfigPanel** implements **Polymorphic Forms**. Instead of a one-size-fits-all form, it conditionally renders inputs based on the `selectedNode.data.type`. This ensures a clean UI and valid data structures for each node type.

---

## 🔹 3. Tech Stack

- **Core**: [React 19](https://reactjs.org/) + [Vite 8](https://vitejs.dev/)
- **Visual Engine**: [React Flow 11](https://reactflow.dev/) (Advanced canvas management)
- **Language**: [TypeScript 6](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (Utility-first styling with custom glassmorphism effects)
- **Mock API**: Custom internal simulation service with `Promise`-based async logic.

---

## 🔹 4. Mock API

The project implements a mock backend service to simulate real-world data interactions:

- **`GET /automations`**: Returns a list of available third-party automation services (e.g., Slack, Email, Database Sync) used in `AUTOMATED` nodes.
- **`POST /simulate`**: Accepts the current workflow JSON (nodes and edges) and returns a sequence of execution logs, simulating the path a process would take.

---

## 🔹 5. Validation Rules

The workflow engine enforces several constraints to ensure process integrity:
- **Start Node Constraint**: Every workflow must begin with exactly one `START` node.
- **Connection Validation**: Nodes must be connected before simulation can proceed.
- **Basic Logic Check**: Ensures that "End" nodes are terminal and cannot trigger further actions.

---

## 🔹 6. How to Run

Follow these steps to set up the project locally:

1. **Clone the repository** (or download source)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser**: Navigate to `http://localhost:5173`

---

## 🔹 7. Design Decisions & Tricky Problems

### 🧩 Tricky Problem: Atomic State Synchronization
**Problem**: Syncing a complex node configuration form with the canvas state in real-time without causing infinite loops or UI lag.
**Solution**: I implemented a decoupled state pattern where the `NodeConfigPanel` communicates via a debounced `updateNodeData` callback. By targeting only the specific node's `data` property using shallow merging, I ensured the canvas stays responsive even with hundreds of nodes while providing instant visual feedback in the configuration panel.

### Other Decisions
- **Custom Hook Separation**: Centralizing workflow logic into hooks (like `useWorkflow`) keeps components clean.
- **Atomic Node Logic**: Custom nodes are abstracted into a `BaseNode` component for visual consistency.
- **Scalability**: The standardized `WorkflowNode` interface allows adding new node types (e.g., "AI Decision") with minimal code changes.

---

## 🔹 8. What You Completed vs Future Work

### ✅ Completed
- [x] **Interactive Canvas**: Drag, drop, and connect nodes.
- [x] **Rich Node Library**: 5 distinct node types with unique icons and styles.
- [x] **Dynamic Configuration**: Real-time property editing for all nodes.
- [x] **Mock API integration**: `GET` and `POST` simulation routes.
- [x] **Basic Validation**: Start node constraints and connection checks.

### ❌ Future Work
- [ ] **Undo/Redo**: Implementation of command-pattern for history management.
- [ ] **Auto-layout**: Integration with ELK or Dagre for automatic arrangement.
- [ ] **Advanced Validation**: Cycle detection and unreachable node warnings.
- [ ] **Backend Integration**: Real persistence with MongoDB.

---

*Built with ❤️ for the HR Tech Community.*
