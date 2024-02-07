import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = async () => {
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7cfca7b98cmsh92c51d2bedde1dep1d17dbjsn57e1cfff8305',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.titles);
    } catch (error) {
      console.error(error);
    }
  }

  // call fetchMovies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log('movies Data', movies);

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    card: {
      width: '300px',
      margin: '20px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  return (
    <>
      <h1>Movie List App</h1>
      <div style={styles.container}>
        {movies.map((movie) => (
          <div key={movie.summary.id} style={styles.card}>
            <h3>
              <img
                width="300px"
                height="200px"
                src={movie.jawSummary.backgroundImage.url} 
                alt=""
              />
            </h3>
            <h2>{movie.jawSummary.title}</h2>
            <p>{movie.jawSummary.releaseYear}</p>
            <p>{movie.jawSummary.synopsis}</p>``
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
