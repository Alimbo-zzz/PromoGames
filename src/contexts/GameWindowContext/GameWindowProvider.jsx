import React, {useState} from 'react';
import {GameWindowContext} from "./GameWindowContext.js";
import GameWindow from './GameWindowComponent.jsx';
import {CSSTransition} from 'react-transition-group';
import './animation.scss';


export const GameWindowProvider = ({children}) => {
	const [isOpened, setOpened] = useState(false);
	const [options, setOptions] = useState(null);
	const timeout = 1200;

	const open = (options)=>{
		setOptions(options);
		setOpened(true);
	}

	const close = ()=>{
		setOpened(false);
		const closed_delay = setTimeout(()=>{
			setOptions(null);
			clearTimeout(closed_delay);
		}, timeout)
	}

	const providerValue = {
		open, close, isOpened, options
	}

	// контент для модального окна передается через ключ {children: (<div>content</div>)}

	return (
		<GameWindowContext.Provider value={providerValue}>
			<CSSTransition in={isOpened} classNames='modal' timeout={timeout} unmountOnExit>
				<GameWindow {...providerValue} {...options} />
			</CSSTransition>

			{children}
		</GameWindowContext.Provider>
	)
}
