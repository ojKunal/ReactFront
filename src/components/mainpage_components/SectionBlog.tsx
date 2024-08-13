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
        {/* <div className={styles.section}>
          <div className={styles.sectionTitle}>Deals deep-dive</div>
          <div className={styles.sectionContent}>
            <div className={styles.item}>Activities & adventure</div>
            <div className={styles.item}>Stays you’ll love</div>
          </div>
        </div> */}
        <div className={styles.blogs}>
          <div className={styles.blogRow}>
  <div className={styles.blogCard}>
    <a href="https://blogs.tripandthrill.com/exploring-the-best-hostels-in-goa-for-backpackers/" className={styles.blogLink} style={{ textDecoration: 'none' }}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1400&h=1400&s=1')" }}
      />
      <div className={styles.blogTitle}>
        Goa : The best hostels for backpackers
      </div>
    </a>
  </div>
  <div className={styles.blogCard}>
    <a href="https://blogs.tripandthrill.com/ultimate-7-day-adventure-in-coorg-the-guide-you-need/" className={styles.blogLink} style={{ textDecoration: 'none' }}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: "url('https://blogs.tripandthrill.com/media/posts/32/responsive/Screenshot-2024-07-31-at-9.01.24-AM-2xl.png')" }}
      />
      <div className={styles.blogTitle}>
      Ultimate 7-Day Adventure in Coorg
      </div>
    </a>
  </div>
  <div className={styles.blogCard}>
    <a href="https://blogs.tripandthrill.com/the-best-hostels-of-gokarna/" className={styles.blogLink} style={{ textDecoration: 'none' }}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: "url('https://media1.thrillophilia.com/filestore/yb5og479g0ftmfbkjul1kkgnm5ni_Om-Beach-2.jpg?w=400&dpr=2')" }}
      />
      <div className={styles.blogTitle}>
      The Best Hostels of Gokarna
      </div>
    </a>
  </div>
</div>
<div className={styles.blogRow}>
  <div className={styles.blogCard}>
    <a href="https://blogs.tripandthrill.com/the-best-hostels-of-wayanad/" className={styles.blogLink} style={{ textDecoration: 'none' }}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: "url('https://blogs.tripandthrill.com/media/posts/5/responsive/Green-and-White-Minimalist-Nature-Travel-Vlog-Youtube-Thumbnail-2-2-2xl.png')" }}
      />
      <div className={styles.blogTitle}>
      The Best Hostels in Wayanad
      </div>
    </a>
  </div>
  <div className={styles.blogCard}>
    <a href="https://blogs.tripandthrill.com/the-best-hostels-of-ooty/" className={styles.blogLink} style={{ textDecoration: 'none' }}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: "url('https://blogs.tripandthrill.com/media/posts/28/responsive/ooty-2xl.jpg')" }}
      />
      <div className={styles.blogTitle}>
      The Best Hostels of Ooty
      </div>
    </a>
  </div>
</div>

        </div>
        <a href="https://blogs.tripandthrill.com/" >
        <button className={styles.browseButton}>
          <img src="/mainpage_icon/img-5.svg" alt="Browse" className={styles.browseIcon} />
          <div>Browse them all</div>
        </button>
        </a>
      </div>
    </div>
  );
};

export default SectionBlog;
