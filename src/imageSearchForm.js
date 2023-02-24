import React, {useState} from "react";

//create hook for useState
export default function imageSearchForm({imageSearchHook}) {
  const [query, setQuery] = useState("");
  //console.log(query);
  const onSubmit = (e) => {
    e.preventDefault();
    imageSearchHook(query);
  };

  
  return (
    <>
    <form className="form" onSubmit={onSubmit}> 
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
        <button type="submit"

        className="button" >
          Search
        </button>
      </form>

    </>
  );
}