import React, { useState } from 'react';
import axios from 'axios';


function Home() {
  const [quote, setQuote] = useState('');

  const fetchRandomQuote = async () => {
    const options = {
      method: 'GET',
      url: 'https://famous-quotes4.p.rapidapi.com/random',
      params: {
        category: 'all',
        count: '2'
      },
      headers: {
        'X-RapidAPI-Key': 'ca5b2f5121mshbb12f717cc17beap1d35fdjsn76b2cf09fead',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const randomQuote = response.data[0].text; // Assuming response.data is an array of quotes
      console.log(response);
      setQuote(randomQuote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomQuote}>Get Random Quote</button>
      {quote && (
        <div>
          <h3>Random Quote:</h3>
          <p>{quote}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
