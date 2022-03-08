import React from 'react';
import Typography from '@mui/material/Typography';

function About() {
  return <div className='container'>
    <div className='mini-container'>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Tomara poder desempenhar-me, sem hesitações nem ansiedades, deste mandato subjectivo cuja execução por demorada 
        ou imperfeita me tortura e dormir descansadamente, fosse onde fosse, plátano ou cedro que me cobrisse, levando 
        na alma como uma parcela do mundo, entre uma saudade e uma aspiração, a consciência de um dever cumprido.

        Mas dia a dia o que vejo em torno meu me aponta novos deveres, novas responsabilidades da minha inteligência para 
        com o meu senso moral. Hora a hora a (...) que escreve as sátiras surge colérica em mim. Hora a hora a expressão me 
        falha. Hora a hora a vontade fraqueja. Hora a hora sinto avançar sobre mim o tempo. Hora a hora me conheço, mãos inúteis 
        e olhar amargurado, levando para a terra fria uma alma que não soube contar, um coração já apodrecido, morto já e na estagnação
        da aspiração indefinida, inutilizada.

        Nem choro. Como chorar? Eu desejaria poder querer (desejar) trabalhar, febrilmente trabalhar para que esta pátria que vós não 
        conheceis fosse grande como o sentimento que eu sinto quando n'ela penso. Nada faço. Nem a mim mesmo ouso dizer: amo a pátria, 
        amo a humanidade. Parece um cinismo supremo. Para comigo mesmo tenho um pudor em dizê-lo. Só aqui lh'o registo sobre papel, acanhadamente
        ainda assim, para que n'alguma parte fique escrito. Sim, fique aqui escrito que amo a pátria funda, (...) doloridamente.
        Seja dito assim sucinto, para que fique dito. Nada mais.
        <br />
        <br /> 
        <br />  
        Fernando Pessoa, 'Inéditos'
        </Typography>
    </div>
    <div className='mini-container-two'>
        <img style={{ width: 400, height:500}} src="/images/presenters.png" alt="" />
    </div>
</div>
}

export default About;
