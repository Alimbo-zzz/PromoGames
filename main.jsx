import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/styles/index.scss';
import {GameWindowProvider} from '@/contexts';
import { HashRouter } from 'react-router-dom';



const root = createRoot(document.getElementById('root'));
root.render(
	<HashRouter>
	<GameWindowProvider>
		<App />		
	</GameWindowProvider>
	</HashRouter>
);