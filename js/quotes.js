const loadQuote = () =>{
  fetch(" https://api.kanye.rest/")
  .then ( res => res.json())
  .then ( data => displayQoute(data))
}

const displayQoute = quote => {
 const blockQuote = document.getElementById('quote');
  blockQuote.innerText = quote.quote;
}