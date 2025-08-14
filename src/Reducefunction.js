export function expensiveInitialState() {
  console.log('expensive initial process.')
  return {count: 0};
}
export function reduceFunction(state, action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1};
    default:
      return state;
  }

}