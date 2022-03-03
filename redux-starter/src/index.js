import store from './store';
import {
  addBug,
  removeBug,
  resolveBug
} from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
})

store.dispatch(addBug('My first bug'))
store.dispatch(resolveBug(1))

unsubscribe();

store.dispatch(removeBug(1))