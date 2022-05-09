import React from "react";
import handleViewport from "react-in-viewport";

const Item = (innerProps: any) => {
  const { inViewport, enterCount, leaveCount, forwardedRef } = innerProps;
  console.log("Item props : ", innerProps);
  let added = null;
  let nadded = null;

  if (inViewport) {
    added = <h4>This is in viewport</h4>;
    nadded = null;
  } else if (!inViewport) {
    added = null;
    nadded = <h4>This is not in viewport</h4>;
  }

  console.log("added and removed", added, nadded);
  return (
    <div ref={forwardedRef}>
      <h3>Hello viewport</h3>
      <p>Enter viewport {enterCount}</p>
      <p>Leave viewport {leaveCount}</p>
      {added}
    </div>
  );
};

const ViewportItem = handleViewport(Item);

const DReactInViewport = () => {
  return (
    <div>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <ViewportItem
        onEnterViewport={() => console.log("[debug] : enter in Viewport")}
        onLeaveViewport={() => console.log("[debug] : leave from Viewport")}
      />
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
      <p>DReactInViewport</p>
    </div>
  );
};

export default DReactInViewport;
