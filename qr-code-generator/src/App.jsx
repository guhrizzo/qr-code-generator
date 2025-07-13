import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

function App() {

  const [link, setLink] = useState('')
  const [qrcodeLink, setqrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setqrcodeLink(url)
    })
  }

  function handleQRCode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>
      
      <div className="qr-container">
        <QRCode
        value={link}
       className='qrcode'/>
      </div>
      
      <input type="text" name="" id="" placeholder='Digite aqui...' className='inp' value={link} onChange={(e) => {
        handleQRCode(e)
      }} />

      <a href={qrcodeLink} download={`qrcode.png`}> Baixar QrCode <i class="bi bi-download"></i></a>
    </div>
  )
}

export default App
