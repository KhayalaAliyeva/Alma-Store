import React from "react";

// components

import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";

const Layout = ({
  children,
  title,
  description,
  url,
  thumbnail,
  type = "default",
  categories,
}) => {
  return (
    <div>
      <SEO
        title={title}
        description={description}
        url={url}
        thumbnail={thumbnail}
      />
      <Header />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;