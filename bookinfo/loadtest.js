import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '5m',
};

export default function () {
  //http.get('http://172.18.0.3:30000/productpage');
  http.get('http://172.18.0.5:30000/productpage');
  //http.get('http://172.18.0.5:30000/productpage');
  sleep(1);
}