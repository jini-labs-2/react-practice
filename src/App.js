import logo from './logo.svg';

function App() {
  return (
    <div className='border border-gray-200 rouded-2xl p-2 m-2 flex flex-col justify-around items-center'>
      <h1 className="text-3xl font-bold underline mb-8">
        Hello world!
      </h1>
      <p>Tailwind CSSです</p>
      <button className='bg-gray-300 border-0 p-2 px-4 rounded-md hover:bg-gray-400 hover:text-white'>
        ボタン
      </button>
    </div>
  );
}

export default App;
