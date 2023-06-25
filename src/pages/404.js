import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/Seo";

const NotFoundPage = () => {
  return (
    <main className="text-white h-[100vh] w-full flex flex-col space-y-10 justify-center items-center">
      <h1 className="text-4xl">Page not found</h1>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
      <Link
        className="bg-[#1e1e1e] w-[300px] p-5 text-center uppercase flex items-center justify-center hover:bg-[#c2bd9e] hover:text-black transition-all duration-700"
        to="/"
      >
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <Seo title="Not Found" />;
