import React from "react";
import Page from "../components/Page";
const image = require("../images/Logan_Meghan.png");

const ThirdPage: React.FC<{
  onNextPage: () => void;
  pageId: string;
}> = ({ onNextPage, pageId }) => {
  return (
    <Page onNextPage={onNextPage} pageId={pageId}>
      <div className="title">
        <h1>About me</h1>
      </div>
      <div className="image-container">
        <img src={image} alt={""}></img>
      </div>
      <div className="content">
        <p>
          I like gaming, music and have a love for art and creativity.
          <br /> <br />
          In my spare time I like to go running or walking, play games with my
          friends or work on personal projects and goals.
          <br /> <br />
          If you want to learn more you can visit my{" "}
          <a
            href="https://github.com/neontanker"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>{" "}
          or contact me at{" "}
          <a href="mailto:loganrainford42@gmail.com">
            loganrainford42@gmail.com
          </a>
        </p>
      </div>
    </Page>
  );
};

export default ThirdPage;
