/**
 *
 * Layout
 *
 */
import React, { memo } from "react";
import Header from "./Header";

const Layout = memo(({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <div className="bg-black/[.8]">footer</div> */}
    </div>
  );
});
export default Layout;
