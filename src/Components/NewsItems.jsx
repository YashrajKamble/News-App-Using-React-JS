import image from "../assets/news.png";

function NewsItems({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "305px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "180px", width: "280px" }}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </h5>
        <p className="card-text">
          {description
            ? description.length > 90
              ? `${description.slice(0, 90)}...`
              : description
            : "News is a report of a current event.it is information about something that has just happened. "}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItems;
