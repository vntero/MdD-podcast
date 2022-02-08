import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return <>
    <div className='about'> 
        <h1>O porquê?</h1>
        <h2>Trazer conteúdo de qualidade para os amantes do desporto. Descodificar o que vai na cabeça do Verstappen
            e tentar perceber como é que o João Félix se tornou no maior flop da história do futebol.</h2>
    </div>
    
    <div>
        <Card className='about-text' style={{ width: '60%', backgroundColor: '#EEF2FF'}}>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Verdes são os campos</Card.Subtitle>
                <Card.Text>
                Verdes são os campos,
                De cor de limão:
                Assim são os olhos
                Do meu coração.

                Campo, que te estendes
                Com verdura bela;
                Ovelhas, que nela
                Vosso pasto tendes,
                De ervas vos mantendes
                Que traz o Verão,
                E eu das lembranças
                Do meu coração.

                Gados que pasceis
                Com contentamento,
                Vosso mantimento
                Não no entendereis;
                Isso que comeis
                Não são ervas, não:
                São graças dos olhos
                Do meu coração.
                </Card.Text>
            </Card.Body>
        </Card>
        
        <img className='presenters' src="/images/presenters.jpg" alt="" />
    </div>
</>
}

export default About;
