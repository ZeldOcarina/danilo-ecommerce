import React, { useState, useEffect } from "react";
import axios from "axios";

const SalesTermsPage = ({ baseUrl }) => {
  const [pageData, setPageData] = useState(null);

  console.log(baseUrl);

  useEffect(() => {
    async function fetchPrivacyPolicy() {
      const response = await axios.get(`${baseUrl}/pages/3?_embed`);
      console.log(response.data);
      setPageData({
        title: response.data.title.rendered,
        content: response.data.content.rendered,
      });
    }
    fetchPrivacyPolicy();
  }, [baseUrl]);
  if (!pageData) return <main className="container privacy-page">LOADING</main>;

  return (
    <main className="container privacy-page">
      <h1 className="my-5">{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
    </main>
  );
};

export default SalesTermsPage;
