import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import axios from "axios";
import ApeList from "./components/ApeList/ApeList";
import MainViewer from "./components/MainViewer/MainViewer";

const App = () => {
  const [collections, setCollections] = useState([]);
  const [selectedApe, setSelectedApe] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xe544280413dc0506e73abf30cc956af479518079&order_direction=asc"
      );
      setCollections(openSeaData.data.assets);
    };
    return getMyNfts;
  }, []);

  return (
    <div className="app">
      <Header />
      {collections.length > 0 && (
        <>
          <MainViewer collections={collections} selectedApe={selectedApe} />
          <ApeList collections={collections} setSelectedApe={setSelectedApe} />
        </>
      )}
    </div>
  );
};

export default App;
