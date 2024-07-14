import { useEffect } from "react";
import { useState } from "react";
import NewsItems from "./NewsItems";

function NewsBoard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-light bg-danger fs-4">News </span>
      </h2>

      {articles.map((news, index) => {
        return (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default NewsBoard;
