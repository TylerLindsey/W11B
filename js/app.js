// Create an event listener that will make an Axios call to an API of your choice When the API returns, change the page in some way (The api request happens on a button click for example). 

function getQuote(){
  quote = document.getElementById('clickQuote').value;
    axios.request({
      method : "GET",
      url : "https://inspiration.goprogram.ai"
    }).then(successFunction).catch(failureFunction);
}
// above: create a function called getQuote that assigns a value to html h2 from the URL with a GET request. then there is a reference to the funtions for success and failure, which are the 2 next functions.
function successFunction(response){
  console.log(response);
  let quote1 = response.data.quote;
  console.log(quote);
  document.getElementById('quote').innerText = quote1;
}

function failureFunction(error){
  console.log(error);
}
// below references the functions once the click is made. 
document.getElementById('clickQuote').addEventListener('click', getQuote);


