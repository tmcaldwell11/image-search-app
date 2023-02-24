import React, {useState, useEffect} from 'react';
import './App.css';
import ImageCard from './imageCard';
import ImageSearchForm from "./imageSearchForm";

export default function App() {
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const key = '33859996-d57edfbba88808139a59556d2';
    const url = `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&pretty=true&safesearch=false&per_page=10`;    
    //console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          //console.log(result)
          setImg(result.hits);
          setIsLoading(false);
        },
        (error) => {
          //setIsLoading(true);
          // setError(error);

        }
      );
  }, [query]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Pixabay Image Search App</h1>
        <ImageSearchForm  imageSearchHook={(text) => setQuery(text)}/>
        {!isLoading && img.length === 0 &&  (
          <h1 className="text-center">Not Found</h1>
        )}
        {isLoading ? (
        <h1 className="text-center"> Loading</h1>
      ) : (
          <div className="container">
            <div className="card-list">
              {img.map((data) => (
                <ImageCard key={data.id} img={data} />
              ))}
            </div>
          </div>
          )}
     </div>
    </div>
  );
}
