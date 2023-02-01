import http from 'k6/http';
import { sleep } from 'k6';
import encoding from 'k6/encoding';

export const options = {
  vus: 1,
  duration: '5m',
};

const encodedCredentials = encoding.b64encode("user:password");

const authOptions = {
  headers: {
    Authorization: `Basic ${encodedCredentials}`,
  },
};

export default function () {
  http.get(`http://$NODE_IP:30001/catalogue`);
  http.get(`http://$NODE_IP:30001/`);
  http.get(`http://$NODE_IP:30001/login`, authOptions);
  http.get(`http://$NODE_IP:30001/category.html`);
  http.get(`http://$NODE_IP:30001/detail.html?id=1`);
  http.get(`http://$NODE_IP:30001/cart`);
  http.get(`http://$NODE_IP:30001/basket.html`);
  http.post(`http://$NODE_IP:30001/orders`);
}