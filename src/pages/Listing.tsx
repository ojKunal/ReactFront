import { useEffect, useState } from "react";
import { FunctionComponent} from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../Utils/SupabaseConfig";
import AirbnbNav from "../components/AirbnbNav";
import HostDetails from "../components/HostDetails";
import FrameComponent from "../components/FrameComponent";
import AirbnbFooter1 from "../components/AirbnbFooter1";
import AirbnbFooter from "../components/AirbnbFooter";
import styles from "./Listing.module.css";
import FinalPricingContainer from "../components/PricingFinalBreakdown";

const Listing: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const checkin = searchParams.get('checkin');
  const checkout = searchParams.get('checkout');
  const param1 = searchParams.get('param1');
  const param2 = searchParams.get('param2');
  const param3 = searchParams.get('param3');
  const [listingData, setListingData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const navigate = useNavigate();

  // for now data is fetched based on id, will have to update the query once (checkin,checkout,param1,param2,param3) updated in database //
  
  useEffect(() => {
    const fetchListing = async () => {
      console.log("Fetching listing with id:", id);

      const { data, error } = await supabase
        .from("Hostelv2")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching listing:", error);
      } else {
        console.log("Fetched listing data:", data);
        setListingData(data);
      }

      setLoading(false);
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listingData) {
    return <div>No listing found for id: {id}</div>;
  }
  
  const ratingBreakdown = {
    ratingBreakdown_average: listingData.ratingBreakdown_average,
    ratingBreakdown_clean: listingData.ratingBreakdown_clean,
    ratingBreakdown_facilities: listingData.ratingBreakdown_facilities,
    ratingBreakdown_fun: listingData.ratingBreakdown_fun,
    ratingBreakdown_location: listingData.ratingBreakdown_location,
    ratingBreakdown_security: listingData.ratingBreakdown_security,
    ratingBreakdown_staff: listingData.ratingBreakdown_staff,
    ratingBreakdown_value: listingData.ratingBreakdown_value,
  };

  // State for hover effect

  // Inline styles for hover effect
  const imageStyle = (isHovered: boolean) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
  });

  // Function to handle navigation to the gallery page
  const handleClick = () => {
    navigate('/gallery', { state: { imagesArray: listingData.images_url } });
  };

  return (
    <div className={styles.listing}>
      <AirbnbNav />
      <main className={styles.page}>
        {/* Main Content Section */}
        <div className={styles.mainContent}>
          <h1 className={styles.bordeauxGetaway}>{listingData.name}</h1>
          <div className={styles.details}>
            <div className={styles.detailsHeader}>
              <div className={styles.iconText}>
                <div className={styles.ratingStars}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                </div>
                <div className={styles.text}>{listingData.starRating}</div>
              </div>
              <div className={styles.headerLocation}>
                <div className={styles.dot} />
              </div>
              <div className={styles.reviews}>
                {listingData.ratingBreakdown_ratingsCount} reviews
              </div>
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
              <div className={styles.bordeauxFrance}>
                {listingData.city_name}, {listingData.city_country}
              </div>
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

        {/* Image Grid Section */}
        <section className={styles.imageGrid}>
          <img
            style={imageStyle(hoveredImage === "first")}
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src={listingData.images_url[0]}
            onMouseEnter={() => setHoveredImage("first")}
            onMouseLeave={() => setHoveredImage(null)}
          />

          <div className={styles.imageNavigation}>
            <div className={styles.row}>
              <img
                style={imageStyle(hoveredImage === "second")}
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src={listingData.images_url[1]}
                onMouseEnter={() => setHoveredImage("second")}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <img
                style={imageStyle(hoveredImage === "third")}
                className={styles.imageIcon2}
                loading="lazy"
                alt=""
                src={listingData.images_url[2]}
                onMouseEnter={() => setHoveredImage("third")}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </div>
            <div className={styles.galleryImages}>
              <img
                style={imageStyle(hoveredImage === 'fourth')}
                className={styles.imageIcon3}
                loading="lazy"
                alt=""
                src={listingData.images_url[3]}
                onMouseEnter={() => setHoveredImage('fourth')}
                onMouseLeave={() => setHoveredImage(null)}
              />
              <div>
                <img
                  style={imageStyle(hoveredImage === 'fifth')}
                  className={styles.imageIcon2}
                  alt=""
                  src={listingData.images_url[4] || "/image-2@2x.png"}
                  onMouseEnter={() => setHoveredImage('fifth')}
                  onMouseLeave={() => setHoveredImage(null)}
                />
                <button className={styles.button} onClick={handleClick}>
                  <div className={styles.buttonBase}>
                    <img className={styles.icon} alt="" src="/icon-1.svg" />
                    <div className={styles.navigationLabel}>Show all photos</div>
                    <img className={styles.icon1} alt="" src="/icon2.svg" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Section */}
        <section className={styles.listingContent}>
          <HostDetails data={listingData} />
          <div className={styles.bookingContainer}>
          <FinalPricingContainer></FinalPricingContainer>
          {/* <div className={styles.bookingBox}>
            <FinalPricingContainer></FinalPricingContainer>
              <div className={styles.header}>
                <div className={styles.nights}>
                  <div className={styles.priceLabel}>
                    Rs {listingData.lowestPricePerNight_value}
                  </div>
                  <div className={styles.nightCount} style={{ marginLeft: 40 }}>
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
                        <img className={styles.starIcon2} alt="" src="/star.svg" />
                      </div>
                      <div className={styles.ratingValue}>
                        {listingData.overallRating_overall}
                      </div>
                    </div>
                    <div className={styles.separator}>
                      <div className={styles.dot3} />
                    </div>
                    <div className={styles.reviews1}>
                      {listingData.ratingBreakdown_ratingsCount} reviews
                    </div>
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
                  <div className={styles.occupancyTaxesAnd}>Occupancy taxes and fees</div>
                  <div className={styles.div3}>$29</div>
                </div>
              </div>
              <div className={styles.divider} />
              <div className={styles.totalParent}>
                <div className={styles.total}>Total</div>
                <div className={styles.total1}>$701</div>
              </div>
            </div> */}
            <div className={styles.iconText5}>
              <div className={styles.flag}>
                <img className={styles.flagPriority2Icon} alt="" src="/flagpriority2.svg" />
              </div>
              <div className={styles.text4}>Report this listing</div>
            </div>
          </div>
        </section>

        {/* Frame Component Section */}
        <FrameComponent 
        address1={listingData.address1} 
        address2={listingData.address2} 
        hostelId={listingData.id}
        ratingBreakdown={ratingBreakdown}/>

      </main>
      <AirbnbFooter1 />
      <AirbnbFooter />
    </div>
  );
};

export default Listing;