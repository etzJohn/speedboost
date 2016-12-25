import numeral from 'numeral';

import './index.css';

const cashMoney = numeral(1000000).format('$0,0.00');
console.log(`yoyo i got ${cashMoney} boii`); // eslint-disable-line no-console
