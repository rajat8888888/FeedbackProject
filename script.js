


const ratingEl=document.querySelectorAll('.ratings');
const btnEl=document.getElementById('btn')

const containerEl=document.getElementById('container')
   let ratingText=""

   ratingEl.forEach((rating)=>{
        rating.addEventListener('click',(event)=>{
            removeActive();
            ratingText=
            event.target.innerText || event.target.parentNode.innerText;
            event.target.classList.add('active');
            event.target.parentNode.classList.add('active');
            
        })
   })

   btnEl.addEventListener('click',()=>{
          if(ratingText !==""){
            containerEl.innerHTML=`<h1>Thanku You</h1>
            <br/>
            <br/>
           <h3> feedback:${ratingText}</h3>
           <p>we'll use your feedback to improve our 
           customer support </p>`
          }
   })

   function removeActive(){
    ratingEl.forEach((rating)=>{
        rating.classList.remove('active');
       
    })
  
   }