import React from 'react';
import Episode from './Episode';

function Home() {
  return <>
    <div className='title'>
        <h1>Malta do Desporto</h1>
    </div>
    <div className='intro'>
        <p>Um podcast sobre o que nos une. <br />
        Duarte e Elton sobre <span className='black'>bola</span>, e não só.</p>
    </div>

    <div className='eps'>
        <Episode/>
        <Episode/>
        <Episode/>
        <Episode/>
    </div>
   
</>
}

export default Home;
