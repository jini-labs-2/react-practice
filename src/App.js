import { Profiler } from 'react';
import './App.css';
import { BadExample, GoodExample } from './GoodNBadExample';

function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interActions  
) {
  console.log(`[${id}] 렌더링 정보:`);
  console.log(`  - Phase: ${phase}`);
  console.log(`  - Actual Duration: ${actualDuration}ms`);
  console.log(`  - Base Duration: ${baseDuration}ms`);
  console.log(`  - Start Time: ${startTime}ms`);
  console.log(`  - Commit Time: ${commitTime}ms`);
  console.log('-----------------------');
}

function App() {
  return (
    <div className="App">
      {/* Profilerを利用して  BadExampleと  GoodExampleのelapsedタイムを測定 */}
      <Profiler id="BadExample" onRender={onRenderCallback}>
        <BadExample/>
      </Profiler>
      <Profiler id="GoodExample" onRender={onRenderCallback}>
        <GoodExample/>
      </Profiler>
    </div>
  );
}

export default App;
