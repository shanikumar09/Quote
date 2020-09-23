
const quoteContainer=document.getElementById('quote-container');
const quotetext=document.getElementById('quote');
const authortext=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const loader=document.getElementById('loader');
const newquoteBtn=document.getElementById('new-quote');
//Get Quote from api
// loading spinner shown
function showloadingspinner(){
  loader.hidden=false;
  quoteContainer.hidden=true;
}
// Remove loading spinner
 function removeloadingspinner(){
   if(!loader.hidden)

   quoteContainer.hidden=false;
    loader.hidden=true;
 }
 //Get quote from api
async function getQuote(){
 showloadingspinner();
  const proxyUrl='https://cors-anywhere.herokuapp.com/'
  const apiurl="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
   try{
     const response=await fetch(proxyUrl + apiurl);
     const data=await response.json();
     // console.log(data);

     if(data.quoteAuthor===''){
       authortext.innerText=unknown;
     }else{
     authortext.innerText=data.quoteAuthor;
    }
    // if(data.quoteText.length>120){
    //   quoteText.classList.add('long-quote');
    // }else{
    //     quoteText.classList.remove('long-quote');
    // }
    quotetext.innerText=data.quoteText;
    // show quote container
    removeloadingspinner();
   } catch(error){
     getQuote();
   }

}
//tweet Quote
function tweetQuote(){
  const quote=quotetext.innerText;
  const author=authortext.innerText;
  const twitterUrl=`https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, '_blank');
}
//Event Listner
 newquoteBtn.addEventListener('click',getQuote);
 twitterBtn.addEventListener('click',tweetQuote);

//On load
 getQuote();
 // loading();
