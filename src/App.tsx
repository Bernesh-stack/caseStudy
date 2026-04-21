import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;
