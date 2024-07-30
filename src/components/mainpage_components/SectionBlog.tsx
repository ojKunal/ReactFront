import { FunctionComponent } from "react";
import styles from './sectionblog.module.css'; // Assuming you're using CSS modules

export type FrameComponent1Type = {
  className?: string;
};

const SectionBlog: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Worthwhile Travel Reads</h1>
        <div className={styles.subtitle}>
          Curated articles by travelers, for travelers
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Deals deep-dive</div>
          <div className={styles.sectionContent}>
            <div className={styles.item}>Activities & adventure</div>
            <div className={styles.item}>Stays you’ll love</div>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blogRow}>
            <div className={styles.blogCard}>
              <div className={styles.blogImage} />
              <div className={styles.blogTitle}>
                Explore Richmond Park: Everything You Need to Know
              </div>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogImage} />
              <div className={styles.blogTitle}>
                Ultimate Guide To Dubai On A Budget – All You Need To Know
              </div>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogImage} />
              <div className={styles.blogTitle}>
                Discover the Magic of Luxembourg Gardens, Paris
              </div>
            </div>
          </div>
          <div className={styles.blogRow}>
            <div className={styles.blogCard}>
              <div className={styles.blogImage} />
              <div className={styles.blogTitle}>
                The Best Time To Visit Dubai – Weather, Events & More
              </div>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogImage} />
              <div className={styles.blogTitle}>
                Discover the Magic of Parc Monceau, Paris
              </div>
            </div>
          </div>
        </div>
        <button className={styles.browseButton}>
          <img src="/img-5.svg" alt="Browse" className={styles.browseIcon} />
          <div>Browse them all</div>
        </button>
      </div>
    </div>
  );
};

export default SectionBlog;
