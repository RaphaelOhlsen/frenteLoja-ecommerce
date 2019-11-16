export const fetchData = (action, ctx) => new Promise.all(action())
  .then(response => ctx.store.dispatch(response))
  .catch(e => console.log(e));

