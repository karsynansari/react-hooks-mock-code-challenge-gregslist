import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  const eachListing = listings.map((listing) => (
    <ListingCard key={listing.id} listing={listing} setListings={setListings} />
  ));
  return (
    <main>
      <ul className="cards">{eachListing}</ul>
    </main>
  );
}

export default ListingsContainer;
