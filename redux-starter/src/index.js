import configureStore from './store/store';
import {
  addBug,
  removeBug,
  resolveBug
} from './store/bugs';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
})

store.dispatch(addBug('My first bug'))
store.dispatch(resolveBug(1))

unsubscribe();

store.dispatch(removeBug(1))

// to use toolkit
store.dispatch(addBug({ description: 'My first bug' }))
store.dispatch(resolveBug({ id: 1 }))
store.dispatch(removeBug({ id: 1 }))