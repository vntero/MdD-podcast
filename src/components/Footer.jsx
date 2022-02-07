import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return <div className='footer'>
            <div>
                <Link to='/' style={{textDecoration: 'none', color: 'white'}}><img src="/images/microphone.png" alt="MdD" height={30} width={30}/>  </Link>
                © 2022 MdD
            </div>
            
            <Link to='/about' style={{textDecoration: 'none'}}>Sobre nós</Link> 
            <Link to='/newsletter' style={{textDecoration: 'none'}}>Newsletter</Link>
            <a className='margin' href="mailto:ola@maltadodesporto.com"><img alt="email" src="/images/email.png" height={30} width={30}/></a>
      </div>;
}

export default Footer;
