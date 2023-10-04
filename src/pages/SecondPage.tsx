import React from "react";
import TimelineList from "../components/timeline/TimelineList";
import Page from "../components/Page";

const SecondPage: React.FC<{
  onNextPage: () => void;
  pageId: string;
}> = ({ onNextPage, pageId }) => {
  return (
    <Page onNextPage={onNextPage} pageId={pageId}>
      <div className="title">
        <h1>My Work</h1>
      </div>
      <TimelineList />
    </Page>
  );
};

export default SecondPage;
