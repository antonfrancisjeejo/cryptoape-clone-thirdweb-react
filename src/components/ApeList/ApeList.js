import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./ApeList.css";

const ApeList = ({ collections, setSelectedApe }) => {
  return (
    <div className="apeList">
      {collections.map((ape, index) => (
        <div onClick={() => setSelectedApe(index)}>
          <CollectionCard
            key={ape.token_id}
            id={ape.token_id}
            name={ape.name}
            traits={ape.traits}
            image={ape.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default ApeList;
