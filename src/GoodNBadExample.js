import React, { useReducer } from 'react'
import { expensiveInitialState, reduceFunction } from './Reducefunction';

// 遅延初期化
// レンダーリング旅に expensiveInitialState()を呼びたして初期化を実行している
// この場合初期化にコストが掛かる作業があると宜しくない。
// 比較のためGoodExampleで確認しよう！
export function BadExample() {
  const [state, dispatch] = useReducer(reduceFunction, expensiveInitialState());

  return (
    <div>
      <h2>Bad example: {state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})}> + 1 </button>
    </div>
  )
}

// useReducerの三番目で初期化関数を渡している、これが遅延初期化。
// この場合はexpensiveInitialStateを呼び出して初期化する、それ以後は呼び出すことはない。
export function GoodExample() {
  const [state, dispatch] = useReducer(reduceFunction, null, expensiveInitialState);

  return (
    <div>
      <h2>Good example: {state.count}</h2>
      <button onClick={() => dispatch({type: 'increment'})}> + 1 </button>
    </div>
  )
}
