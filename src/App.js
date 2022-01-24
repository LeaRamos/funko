import { useState } from 'react';
import './App.css';

function App() {


  
const [agregarAlCarro,setAgregarAlCarro]=useState('false');
const classBotonAgregarCarrito= agregarAlCarro ? 'flex flex-auto text-sm font-semibold justify-center items-center colorRosa rounded-br-lg rounded-bl-lg  border-t-2' : 'flex flex-auto text-sm font-bold justify-center items-center text-white rounded-br-lg rounded-bl-lg text-white agregadoAlCarrito border-t-2';
  
return (
    <div className="w-64 h-96 bg-white mx-auto flex flex-col rounded-lg" on>
        <div className="flex flex-auto justify-center h-40 border-b-2">
          <img className='' src='/dino.jpg' alt='img'/>
        </div>
        <div className="flex flex-auto h-32 flex-col px-6 py-3">
          <h2 className='text-3xl font-bold mb-3 colorRosa'><span className='colorNaranja'>$</span>4.350</h2>
          <p className='text-sm font-light'>
            <span className='font-semibold mb-2'>Dragoncito Feo</span> <br/>
            Dragoncito naranja relleno de algodon y gordito
          </p>
        </div>
        <div onClick={() => setAgregarAlCarro(!agregarAlCarro)} className={classBotonAgregarCarrito}>
          <p className=''>Comprar producto</p>
        </div>
    </div>
  );
}

export default App;
