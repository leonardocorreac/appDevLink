import './networks.css'
import {useState, useEffect} from 'react'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {MdAddLink} from 'react-icons/md'
import {db} from '../../services/firebaseConnection'
import {
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore'
import {toast} from 'react-toastify'


export function Networks() {
  const [facebook, setFacebook] = useState("")
  const [instagram, setInstagram] = useState("")
  const [linkedIn, setLinkedIn] = useState("")


  useEffect(() => {
     function loadLinks(){
      const docRef = doc(db, "social", "link")
       getDoc(docRef)
       .then((snapshot) => {
        if(snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook)
          setInstagram(snapshot.data().instagram)
          setLinkedIn(snapshot.data().linkedIn)
        }
       })
    }

    loadLinks()
  },[])

  function handleSave(e) {
    e.preventDefault()
    setDoc(doc(db,"social", "link"), {
      facebook: facebook,
      instagram: instagram,
      linkedIn: linkedIn
    })
    .then(() => {
      toast.success("Urls salvas com sucesso")
    })
    .catch((error) => {
      toast.error("Erro ao salvar")
    })

  }


  return(
    <div className='admin-container'>
      <Header />
      <h1 className='title-social'> Suas Redes Sociais</h1>

      <form className='form' onSubmit={handleSave}>
        <label className='label' >Link do Facebook</label>
      <Input 
      placeholder="digite a Url do Facebook"
      value={facebook}
      onChange={(e) => setFacebook(e.target.value)}
      />
        <label className='label' >Link do Instagram</label>
      <Input 
      placeholder="digite a Url do Instagram"
      value={instagram}
      onChange={(e) => setInstagram(e.target.value)}
      />
        <label className='label' >Link do LinkedIn</label>
      <Input 
      placeholder="digite a Url do LinkedIn"
      value={linkedIn}
      onChange={(e) => setLinkedIn(e.target.value)}
      />

      <button type="submit" className='btn-register'>
        Salvar Links <MdAddLink size={24} color="#fff" />
      </button>
      </form>
    </div>
  )
}