import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <span>Hello</span>
    </div>
  );
};

export default App;
