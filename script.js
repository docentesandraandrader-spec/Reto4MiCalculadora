body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.calculadora {
    background: #1f2937;
    padding: 25px;
    border-radius: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    width: 360px;
}

h1 {
    text-align: center;
    color: white;
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.pantalla {
    background: #111827;
    color: #22d3ee;
    font-size: 2.5rem;
    text-align: right;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 20px;
    min-height: 80px;
    word-break: break-all;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.5);
}

.botones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.btn {
    padding: 20px;
    font-size: 1.4rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.2s;
}

.numero {
    background: #374151;
    color: white;
}

.operador {
    background: #f59e0b;
    color: white;
    font-weight: bold;
}

.limpiar {
    background: #ef4444;
    color: white;
}

.igual {
    background: #22c55e;
    color: white;
    grid-row: span 2;
    height: 100%;
}

.cero {
    grid-column: span 2;
}

.btn:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
}

.btn:active {
    transform: scale(0.95);
}
