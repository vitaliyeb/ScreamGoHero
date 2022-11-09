import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Game} from "./entities/Game";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const App = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        new Game(
            canvasRef.current as HTMLCanvasElement
        )
    }, [])


    return <canvas
        ref={canvasRef}
    />
}

root.render(<App />);
