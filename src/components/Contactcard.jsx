import { useState } from 'react';
import './Contactcard.css';
// import './App.css';

export const Contactcard = ({ contacts }) => {
    
    const [showccontact, setShowcontact] = useState(false)

 return(
     <div className='contacts'>
         <h1 className='head'>Contact List</h1>
         <div className='card'>
             <div className='imgdiv'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X55SY3RrRyc_MYzbc4LC55jga-kkWG2ZtA&usqp=CAU" alt="" />
             </div>
             <div className='detail'>
                 <h2>Annette Murphy</h2>
                 <p>sara.curz@exmple.com</p>
                 {/* <p className='num'>+91-7039746800</p> */}
             </div>
         </div>
         {contacts.map((e) => {
         return <div className='card' onClick={()=> setShowcontact(!showccontact)}>
             <div className='imgdiv'>
                     <img src={e.photo} alt="" />
             </div>
             <div className='detail'>
                 <h2>{e.name}</h2>
                 <p>{e.email}</p>
                 {/* <p className='num'>+91-{e.contact}</p> */}
                 {showccontact ? <p className='num'>+91-{e.contact}</p> : null}
             </div>
         </div>
         })}
     </div>
 )
}



