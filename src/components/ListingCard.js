import React, { useState } from "react";

function ListingCard({ listing, setListings }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteUnfavorite() {
    setFavorite((currentFavorite) => !currentFavorite);
  }

  function handleDelete() {
    console.log("delete", listing.id);
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    });
    //Delete
    //add an event listener to the element
    //delete request goes in the event handler function, which handles the delete
    //add a second arguement of an object to the Fetch (in this case the method)
    //interpolate the end of the url with the id of the object to delete
    //Then, we need to delete from the DOM using the state of the items
    //state takes a callback function to return a new array of all the listings except
    //for the deleted.
    //call .filter on that current array, which takes a callback function
    //pass filter an element from the array, which is just one listing
    setListings((currentListings) =>
      currentListings.filter((onelisting) => onelisting.id !== listing.id)
    );
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleFavoriteUnfavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteUnfavorite}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
