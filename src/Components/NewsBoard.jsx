import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20vh" }}
        >
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-center mt-2">
            Latest <span className="badge text-light bg-danger fs-4">News</span>
          </h2>
          {articles.map((news, index) => (
            <NewsItems
              key={index}
              title={
                news.title.length > 30
                  ? `${news.title.slice(0, 30)}...`
                  : news.title
              }
              description={
                news.description
                  ? news.description.length > 90
                    ? `${news.description.slice(0, 90)}...`
                    : news.description
                  : "News is a report of a current event. It is information about something that has just happened."
              }
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsBoard;
