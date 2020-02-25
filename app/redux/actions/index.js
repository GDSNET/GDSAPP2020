import * as authActions from './authActions'
import * as counterActions from './counterActions'
import * as userActions from './userActions'
import * as messageActions from './messageActions'


const ActionCreators = Object.assign({},
    authActions,
   counterActions,
   userActions, 
   messageActions,

);

export default ActionCreators;
