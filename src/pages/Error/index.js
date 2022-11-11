import './erro.css'
import {Link} from 'react-router-dom'
import {Logo} from '../../components/Logo'

export default function Error () {
  return(
    <div className='error'>
      <Logo />
      <h1>Página Não Encontrada!</h1>
      <p>Está página que você esta procurando não existe!</p>

     <Link className='link' to="/">
        Voltar para Home
      </Link>
    </div>
  )
}