import React, { useEffect, useState } from "react";
import "./MainViewer.css";
import instagramLogo from "../../assets/owner/instagram.png";
import twitterLogo from "../../assets/owner/twitter.png";
import moreIcon from "../../assets/owner/more.png";

const MainViewer = ({ selectedApe, collections }) => {
  const [activeApe, setActiveApe] = useState(collections[0]);

  useEffect(() => {
    setActiveApe(collections[selectedApe]);
  }, [collections, selectedApe]);

  return (
    <div className="mainViewer">
      <div className="mainContent">
        <div className="apeHighlight">
          <div className="apeContainer">
            <img
              src={activeApe.image_original_url}
              className="selectedApe"
              alt=""
            />
          </div>
        </div>

        <div
          className="apeDetails"
          style={{
            color: "#fff",
          }}
        >
          <div className="apeTitle">
            {activeApe.name}
            <span className="itemNumber"> •#{activeApe.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeApe.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activeApe.owner.address}</div>
                <div className="ownerHandle">@antonfrancisjeejo</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainViewer;
