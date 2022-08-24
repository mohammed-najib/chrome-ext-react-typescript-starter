import React, { FC } from "react";
import ReactDOM from "react-dom/client";

type PopupProps = {
  //
};

export const Popup: FC<PopupProps> = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple popup</p>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("react-target") as HTMLElement
);

// const roott = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

root.render(<Popup />);
