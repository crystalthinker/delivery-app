import {environment} from '../../../environments/environment';

function getEnvironment(env) {
 if (env) {
  return 'http://localhost:3000/'; // production api url here
 }else {
   return 'http://localhost:3000/'; // development api url here
 }
}

const hostURL = getEnvironment(environment.production);

export const CONFIG = {
  urls: {
    getDeliveryBoys: hostURL + 'delivery_boys',
    getShops: hostURL + 'shops',
    getDelivery: hostURL + 'delivery',
    users: hostURL + 'users'
  }
};
