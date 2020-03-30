import { combineReducers } from 'redux';
import loginReducer from './loginStatus';
import housesReducer from './houses';
import assetTypeCountsReducer from './assetTypeCounts';
import assetReducer from './asset';
import assetTypeReducer from './assetType';
import forgotPasswordReducer from './forgotPassword';
import locationsReducer from './locations';
import assetsOptionsReducer from './assetsOptions';
import catalogOptionsReducer from './catalogOptions';
import assetsPostReducer from './assetsPost';
import catalogPostReducer from './catalogPost';
import catalogUpdateReducer from './catalogUpdate';
import assetsUpdateReducer from './assetsUpdate';
import catalogDeleteReducer from './catalogDelete';
import assetsDeleteReducer from './assetsDelete';

const rootReducer = combineReducers({
  	loginStatus: loginReducer,
  	houses: housesReducer,
  	assetTypeCounts: assetTypeCountsReducer,
  	asset: assetReducer,
  	assetType: assetTypeReducer,
  	forgotPassword:forgotPasswordReducer,
  	locations:locationsReducer,
  	assetsOptions:assetsOptionsReducer,
  	catalogOptions:catalogOptionsReducer,
  	assetsPost:assetsPostReducer,
  	catalogPost:catalogPostReducer,
    catalogUpdate:catalogUpdateReducer,
    assetsUpdate:assetsUpdateReducer,
    catalogDelete:catalogDeleteReducer,
    assetsDelete:assetsDeleteReducer
});

export default rootReducer;
