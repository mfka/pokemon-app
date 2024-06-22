import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const element = document.getElementById('root');
if (!element) {
  throw Error("Couldn't find #root element");
}

ReactDOM.createRoot(element).render(<React.StrictMode></React.StrictMode>);
