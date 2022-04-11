import { createRoot } from 'react-dom/client';

import { CalendarApp } from './CalendarApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CalendarApp />);
