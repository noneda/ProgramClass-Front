import { useState, useEffect } from "react";
import YouTube from "react-youtube";

import "./base.css";
import { getSubSection } from "../../../../Utils/Api";

const SubSection = (props) => {
  const [Name, setName] = useState();
  const [Info, setInfo] = useState();
  const [urlYoutube, setUrlYoutube] = useState();

  const options = {
    height: "290",
    width: "475",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  const fetchData = async () => {
    const Data = await getSubSection(props.id);
    setName(Data.Name);
    setInfo(Data.Info);
    setUrlYoutube(Data.Video);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="FrameShow">
        <div className="title">
          <h2>{Name}</h2>
        </div>
        <div className="SectCont">
          <YouTube
            className="urlVideo"
            videoId={urlYoutube}
            options={options}
            onReady={(event) => {
              event.target.pauseVideo();
            }}
            id="video"
          />
          <div className="Text">
            <p>{Info}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubSection;
