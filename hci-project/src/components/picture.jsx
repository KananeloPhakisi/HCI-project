import { Link } from "react-router-dom";
import "./post.css";

export default function Picture({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            MCST RECORDS SUCCESSES IN 2021/2022
          </Link>
        </span>
        <hr />
        <span className="postDate">17 Jan 2022</span>
      </div>
    </div>
  );
}
