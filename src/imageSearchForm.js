import React from "react";

export default function imageSearchForm() {
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
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

    </>
  );
}