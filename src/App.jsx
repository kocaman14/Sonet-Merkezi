import { useState, useRef } from 'react'
import sonnetsData from './data/sonnetsData'
import Header from './components/Header'
import './styles.css'
export default function App() {
  const inputRef = useRef()
  const [searchInput, setSearchInput] = useState('')
  const [total, setTotal] = useState([]);
  function handleClick(){
    const inputValue = inputRef.current.value.trim();
    if(inputValue.length>0){
      setSearchInput(inputValue)
      let totalAr=sonnetsData.filter((texts)=>texts.lines.some((li)=>li.includes(inputValue)))
      // console.log(totalAr.map((totals)=>totals.lines.map((lin)=>lin.split(""))))
      setTotal(totalAr)

    }else{
      setTotal([])
    }
console.log(total)
  }
  /* Challenge

  Kullanıcı " Arama " butonuna tıkladığında, input alanına yazdığı metin searchInput state'inin değeri olur (bu kod zaten yazılmıştı).    
 1. SonnetsData array'indeki satırlarından birinde searchInput değerini içeren her bir sonnet için "sonnets-container" div'inde className'i "sonnet" olan bir div oluşturun (satır 27). 
    
    2. "sonnet" div'inde, sonenin number özelliğini bir <h3> öğesinin metin içeriği olarak ekleyin ve ardından lines özelliğinden/dizisinden sonenin *her* satırını bir <p> öğesinin text içeriği olarak ekleyin, böylece sonenin her satırı için bir <p> elde edin. 
       
    3. "Love", "summer", "winter" ve "strange" gibi yaygın sözcüklerin yanı sıra "hello" ve "weird" gibi hiçbir sonede geçmeyen sözcükleri arayarak kodunuzu test edin.
*/

  return (
    <div className='wrapper'>
      <Header searchProps={{ inputRef, handleClick }} />

      <div className='sonnets-container'>
        {total.length > 0 ? (
          total.map((sonnet) => (
            <div className='sonnet' key={sonnet.number}>
              <h3>{sonnet.number}</h3>
              {sonnet.lines.map((line, index) => (
               <span key={index}>{line}</span> 
              ))}
            </div>
          ))
        ) : (
          <p className='no-results-message'>Ne yazık ki, araman sonucunda hiçbir şey bulamadın.</p>
        )}
      </div>
    </div>
  )
}

/*Bonus Challenges
      
    - Arama sonucu yoksa, "sonnets-container" div'inde "Ne yazık ki, araman sonucunda hiçbir şey bulamadın." yazan bir <p> öğesi oluşturun. <p> öğesine "no-results-message" şeklinde bir className verin. 
      
    - Sonuçlar varsa, sonedeki searchInput değeriyle eşleşen her kelimenin etrafına bir <span> koyun. Böylece kelime otomatik olarak vurgulanacaktır (CSS zaten ayarlanmıştır). 
*/
