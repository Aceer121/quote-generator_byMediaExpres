const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// let apiQuotes = [];

// Show loading not working trough localQuotes
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Show loading not working trough localQuotes
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show new quote
function newQuote() {
    loading();
    // Pick a random quote
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//     console.log(quote)
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
// Check if author field is empty and replace with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
// check quote lenght to determiine styling - 120 is number of characters
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    } 
    // Set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}


// Get Quotes from a API
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // catch the error here
//     }
// }

// Tweet the quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
// getQuotes();
newQuote();
complete();
