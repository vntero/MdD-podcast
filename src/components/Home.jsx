import React from 'react';
import Episode from './Episode';
import Button from '@mui/material/Button';

function Home() {
  return <>
    <div className='title'>
        <h1>Malta do Desporto</h1>
    </div>

    <div className='intro'>
        <p>Um podcast sobre o que nos une. <br />
        Duarte e Elton sobre <span className='black'>bola</span> tudo e mais alguma coisa.</p>
    </div>

    <div className='title'>
        <h4>Últimos episódios</h4>
    </div>

    <div className='eps'>
        <Episode/>
        <Episode/>
        <Episode/>
        <Episode/>
    </div>

    <div className='eps'>
        <Episode/>
        <Episode/>
        <Episode/>
        <Episode/>
    </div>

    <div className='mais-episodios'>
        <Button style={{color: 'gray'}} sx={{ my: 1, display: 'block', textTransform: 'uppercase' }}>mais episódios</Button>
    </div>
    
</>
}

export default Home;
