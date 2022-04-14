import React from 'react';
import './styles/styles.css'
import { createRoot } from 'react-dom/client';

import { CalendarApp } from './CalendarApp';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CalendarApp />);
