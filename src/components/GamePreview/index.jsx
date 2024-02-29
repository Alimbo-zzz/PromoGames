import React, {useState, useEffect, useCallback} from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import scss from "./style.module.scss";
import {HashLoader} from "react-spinners";
import { Link, useNavigate, useParams } from "react-router-dom";



const games = {
	Lemon:{
		loaderUrl: "games/LemonGame/Build/LemonGame.loader.js",
		dataUrl: "games/LemonGame/Build/LemonGame.data.unityweb",
		frameworkUrl: "games/LemonGame/Build/LemonGame.framework.js.unityweb",
		codeUrl: "games/LemonGame/Build/LemonGame.wasm.unityweb",
	},
	Memory:{
		loaderUrl: "games/MemoryGame/Build/MemoryGame.loader.js",
		dataUrl: "games/MemoryGame/Build/MemoryGame.data.unityweb",
		frameworkUrl: "games/MemoryGame/Build/MemoryGame.framework.js.unityweb",
		codeUrl: "games/MemoryGame/Build/MemoryGame.wasm.unityweb",
	},
	Platformer:{
		loaderUrl: "games/Platformer/Build/Platformer.loader.js",
		dataUrl: "games/Platformer/Build/Platformer.data.unityweb",
		frameworkUrl: "games/Platformer/Build/Platformer.framework.js.unityweb",
		codeUrl: "games/Platformer/Build/Platformer.wasm.unityweb",
	},
	Quiz:{
		loaderUrl: "games/QuizGame/Build/QuizGame.loader.js",
		dataUrl: "games/QuizGame/Build/QuizGame.data.unityweb",
		frameworkUrl: "games/QuizGame/Build/QuizGame.framework.js.unityweb",
		codeUrl: "games/QuizGame/Build/QuizGame.wasm.unityweb",
	},

}


function GamePreview() {
	const {id} = useParams();

	const [gameData, setGameData] = useState(games?.[id] || games.Quiz);

	// gamesData

	const { unityProvider, addEventListener, removeEventListener, sendMessage } = useUnityContext(gameData);
  const navigate = useNavigate();

  useEffect(()=>{
  	document.body.style.overflowY = 'hidden';

  	return () => {
  		document.body.style.overflowY = 'auto';
  	}
  },[])


  return (<>
    <div className={scss.wrap} onClick={(e)=> { navigate('/'); }}>
			<div className={scss.body} onClick={e => e.stopPropagation()}>
				<Link to="/" className={scss.btnClose} onClick={close}>✖</Link>
				<div className={scss.loader}>
					<HashLoader color="#13A5FF" size="60"/>
				</div>		
				<div className={scss.gameBlock}>
					<Unity unityProvider={unityProvider} />
				</div>
			</div>
		</div>
  </>);
}




export default GamePreview;