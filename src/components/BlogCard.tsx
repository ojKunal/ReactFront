import { FunctionComponent } from "react";
import styles from "./BlogCard.module.css";

export type BlogCardType = {
  className?: string;
  blogCard?: string;
  checkOutTheBlog?: string;
};

const BlogCard: FunctionComponent<BlogCardType> = ({
  className = "",
  blogCard,
  checkOutTheBlog,
}) => {
  return (
    <div className={[styles.blogCard, className].join(" ")}>
      <img
        className={styles.blogCardIcon}
        loading="lazy"
        alt=""
        src={blogCard}
      />
      <div className={styles.blogInfo}>
        <div className={styles.blogTitle}>
          <h2 className={styles.checkOutThe}>{checkOutTheBlog}</h2>
          <div className={styles.followTheTeams}>
            Follow the team's musings on trends in travel, itinerary ideas and
            travel tips
          </div>
        </div>
        <div className={styles.blogLinks}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.readMore}>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
