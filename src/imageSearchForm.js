import React, {useState} from "react";

export default function imageSearchForm() {
  //create hook for useState
  const [query, setQuery] = useState("");
  console.log(query);
  
  return (
    <>
    <form className="form"> 
        <label className="label" htmlFor="query"> 
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={'Search images here...'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

    </>
  );
}