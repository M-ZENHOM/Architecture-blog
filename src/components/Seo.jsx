import React from "react";
import useGraphql from "../Hooks/useGraphql";

const Seo = ({ title }) => {
  const { metaData } = useGraphql();
  return (
    <>
      <title>
        {title} | {metaData.title}
      </title>
      <meta name="description" content={metaData.description} />
    </>
  );
};

export default Seo;
