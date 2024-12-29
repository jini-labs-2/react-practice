import './App.css';
import Todos from './Todos';
import Todos2 from './Todos2';
import Users from './Users';

function App() {
  
  return (
    <div className="App">
      <div className='wrap'>
        <Users />
        {/* <Todos /> */}
        <Todos2 />
      </div>
    </div>
  );
}

export default App;
