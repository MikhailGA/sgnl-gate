import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Api } from './shared/api/ApiClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

Api.setInstance({ basePath: 'http://localhost:3001' });

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
