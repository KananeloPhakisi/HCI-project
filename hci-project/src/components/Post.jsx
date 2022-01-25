import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
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
              Music
            </Link>
          </span>
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
      <p className="postDesc">
      The Ministry of Communications, Science and Technology (MCST) has registered positive strides in the year 2021/22, Chief Economic Planner Mr. Kori Lenyatsa has revealed.
      The Chief Economic Planner disclosed this in an interview meant to establish Ministry’s successes and challenges in the previous year, as well as plans for the New Year.
      Amongst the many successes, he highlighted that Digital Terrestrial Television (DTT) roll-out campaigns spearheaded by MCST Minister in the country last year, Honourable Tsóinyana Rapapa have been accomplished. “This means that we have moved from analogue to digital way of doing things in line with International Telecommunication Union (ITU).”
      He also mentioned that expansion of telecommunication services is on track as seven (7) Base Tower Stations are under construction, adding the intention is to ensure construction of twenty four (24) more in this New Year.
      </p>
    </div>
  );
}
