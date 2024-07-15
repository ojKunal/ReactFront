import { FunctionComponent, useEffect, useState } from "react";
import { supabase } from "../supabase"; // Initialize Supabase client

import AirbnbNav from "../components/AirbnbNav";
import HostDetails from "../components/HostDetails";
import FrameComponent from "../components/FrameComponent";
import AirbnbFooter1 from "../components/AirbnbFooter1";
import AirbnbFooter from "../components/AirbnbFooter";
import styles from "./Listing.module.css";


const Listing: FunctionComponent = () => {
  const [listing, setListing] = useState<any>(null);

  useEffect(() => {
    // Fetch data from Supabase
    const fetchListing = async () => {
      const { data, error } = await supabase
        .from('Hostel')
        .select('*')
        .eq('id', 270987)
        // .ilike('city_name', '%Bangalore%') // Change the query as needed

// .eq(column, value): Equal to
// .neq(column, value): Not equal to
// .gt(column, value): Greater than
// .gte(column, value): Greater than or equal to
// .lt(column, value): Less than
// .lte(column, value): Less than or equal to
// .like(column, pattern): LIKE SQL operator
// .ilike(column, pattern): Case-insensitive LIKE SQL operator
// .is(column, value): IS operator
// .in(column, array): IN operator
// .cs(column, array): Contains
// .cd(column, array): Contained by
// .ov(column, array): Overlap
// .fts(column, query): Full-text search

      if (error) {
        console.error(error);
      } else {
        setListing(data[0]);
      }
    };

    fetchListing();
  }, []);

  if (!listing) {
    return <div>Loading...</div>;
  }
  // Parse the JSON string into an array
  const imagesArray = JSON.parse(listing.images_url);
  // Get the first image
  const firstImage = imagesArray[0];

  return (
    <div className={styles.listing}>
      <AirbnbNav />
      <main className={styles.page}>
        <div className={styles.mainContent}>
          <h1 className={styles.bordeauxGetaway}>{listing.name}</h1>
          <div className={styles.details}>
            <div className={styles.detailsHeader}>
              <div className={styles.iconText}>
                <div className={styles.ratingStars}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                </div>
                <div className={styles.text}>{listing.overallRating_overall}</div>
              </div>
              <div className={styles.headerLocation}>
                <div className={styles.dot} />
              </div>
              <div className={styles.reviews}>{listing.ratingBreakdown_ratingsCount} reviews</div>
              <div className={styles.headerLocation1}>
                <div className={styles.dot1} />
              </div>
              <div className={styles.iconText1}>
                <div className={styles.badgeWrapper}>
                  <img className={styles.badgeIcon} alt="" src="/badge.svg" />
                </div>
                <div className={styles.text1}>Superhost</div>
              </div>
              <div className={styles.headerLocation2}>
                <div className={styles.dot2} />
              </div>
              <div className={styles.bordeauxFrance}>{listing.city_name}, {listing.country_name}</div>
            </div>
            <div className={styles.detailsActions}>
              <div className={styles.iconText2}>
                <div className={styles.shareWrapper}>
                  <img className={styles.shareIcon} alt="" src="/share.svg" />
                </div>
                <div className={styles.shareSaveLabels}>Share</div>
              </div>
              <div className={styles.iconText3}>
                <div className={styles.heartWrapper}>
                  <img className={styles.heartIcon} alt="" src="/heart.svg" />
                </div>
                <div className={styles.text2}>Save</div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.imageGrid}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src={firstImage}
          />

          <div className={styles.imageNavigation}>
            <div className={styles.row}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src={imagesArray[1] || "/image-1@2x.png"}
              />
              <img
                className={styles.imageIcon2}
                loading="lazy"
                alt=""
                src={imagesArray[2] || "/image-2@2x.png"}
              />
            </div>
            <div className={styles.galleryImages}>
              <img
                className={styles.imageIcon3}
                loading="lazy"
                alt=""
                src={imagesArray[3] || "/image-3@2x.png"}
              />
              <div className={styles.image}>
                <img
                  className={styles.imageIcon4}
                  alt=""
                  src={imagesArray[4] || "/image1@2x.png"}
                />
                <button className={styles.button}>
                  <div className={styles.buttonBase}>
                    <img className={styles.icon} alt="" src="/icon-1.svg" />
                    <div className={styles.navigationLabel}>
                      Show all photos
                    </div>
                    <img className={styles.icon1} alt="" src="/icon2.svg" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.listingContent}>
          <HostDetails />
          <div className={styles.bookingContainer}>
            <div className={styles.bookingBox}>
              <div className={styles.header}>
                <div className={styles.nights}>
                  <div className={styles.priceLabel}>Rs {listing.lowestPricePerNight_value}</div>
                  <div className={styles.nightCount}>
                    <div className={styles.nightLabel}>/</div>
                  </div>
                  <div className={styles.nightCount1}>
                    <div className={styles.night}>night</div>
                  </div>
                </div>
                <div className={styles.ratingSummary}>
                  <div className={styles.rating}>
                    <div className={styles.iconText4}>
                      <div className={styles.starIcon1}>
                        <img
                          className={styles.starIcon2}
                          alt=""
                          src="/star.svg"
                        />
                      </div>
                      <div className={styles.ratingValue}>{listing.overallRating_overall}</div>
                    </div>
                    <div className={styles.separator}>
                      <div className={styles.dot3} />
                    </div>
                    <div className={styles.reviews1}>{listing.ratingBreakdown_ratingsCount} reviews</div>
                  </div>
                </div>
              </div>
              <div className={styles.details1}>
                <div className={styles.row1}>
                  <div className={styles.attribute}>
                    <div className={styles.attribute1}>CHECK-IN</div>
                    <input
                      className={styles.value}
                      placeholder="2/19/2022"
                      type="text"
                    />
                  </div>
                  <div className={styles.attribute2}>
                    <div className={styles.attribute3}>CHECKOUT</div>
                    <input
                      className={styles.value1}
                      placeholder="2/26/2022"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.attribute4}>
                  <div className={styles.label}>
                    <div className={styles.guests}>GUESTS</div>
                    <div className={styles.guests1}>2 guests</div>
                  </div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.buttonBase1}>
                  <img className={styles.icon2} alt="" src="/icon4.svg" />
                  <div className={styles.text3}>Reserve</div>
                  <img className={styles.icon3} alt="" src="/icon5.svg" />
                </div>
              </div>
              <div className={styles.youWontBe}>You won’t be charged yet</div>
              <div className={styles.priceDetails}>
                <div className={styles.row2}>
                  <div className={styles.x7Nights}>$79 x 7 nights</div>
                  <div className={styles.breakdownValues}>$555</div>
                </div>
                <div className={styles.row3}>
                  <div className={styles.weeklyDiscount}>Weekly discount</div>
                  <div className={styles.div}>-$28</div>
                </div>
                <div className={styles.row4}>
                  <div className={styles.cleaningFee}>Cleaning fee</div>
                  <div className={styles.div1}>$62</div>
                </div>
                <div className={styles.row5}>
                  <div className={styles.serviceFee}>Service fee</div>
                  <div className={styles.div2}>$83</div>
                </div>
                <div className={styles.row6}>
                  <div className={styles.occupancyTaxesAnd}>
                    Occupancy taxes and fees
                  </div>
                  <div className={styles.div3}>$29</div>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.totalParent}>
                <div className={styles.total}>Total</div>
                <div className={styles.total1}>$701</div>
              </div>
            </div>
            <div className={styles.iconText5}>
              <div className={styles.flag}>
                <img
                  className={styles.flagPriority2Icon}
                  alt=""
                  src="/flagpriority2.svg"
                />
              </div>
              <div className={styles.text4}>Report this listing</div>
            </div>
          </div>
        </section>
        <FrameComponent />
      </main>
      <AirbnbFooter1 />
      <AirbnbFooter />
    </div>
  );
};

export default Listing;
