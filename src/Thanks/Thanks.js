import './Thanks.css';
import {useEffect, useState} from 'react';
//import {apiUrl} from '../const.js';

export default function Thanks(){
    const [confirmRegistration, setConfirmRegistration] = useState(false); 
 
    
    const getParam = ()=>{
       
        
        //let query = newUrlSearchParam()
        let url = new URL(document.location.href);
        let key = url.searchParams.get("key");
        
        fetch(`${process.env.REACT_APP_API_HOST}/activate-mobile?key=${key}`)
        .then((response) =>{
            return response.json();
        }).then(data => {
       
        if (data.status === 200){
          
            setConfirmRegistration(true);
        } else {
            setConfirmRegistration(false)
           
        }
        //         setConfirmRegistration(true);
         })
        
        
    }
    useEffect(()=>{
        getParam();
    },[])
     return(
        <div>
               {confirmRegistration && <div className="confirm__message"> Email успешно подтвержден!</div>}
               {!confirmRegistration && <div className="confirm__message"> Произошла ошибка!</div>}
        </div>
        
    )
    
}