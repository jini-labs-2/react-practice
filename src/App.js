import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Users from './Users';
import Todos from './Todos';
import Todos2 from './Todos2';

function App() {
  
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='wrap'>
          <Todos2 />
          {/* <Todos /> */}
          {/* <Users /> */}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
