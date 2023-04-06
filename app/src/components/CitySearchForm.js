import React from "react";

export default function CitySearchForm(props) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            // value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter City Here..."
            id="search"
          />
          <button /* onClick={props.handleFormSubmit} */ className="btn btn-primary mt-3"> 
            Search
          </button>
        </div>
      </form>
    );
  }