import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  facilities?: any;
  length?: number;
};



const Column: FunctionComponent<ColumnType> = ({
  className = "",
  facilities,
  length,
}) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      {facilities.slice(0, length).map((facility: any, index: number) => (
        <div key={index} className={styles.airbnbDataDetail}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            // src="/icon-6.svg"
            src={facilityIcons[facility] || "/icon-6.svg"}
            />
          <div className={styles.titleSubtitle}>
            <div className={styles.title}>{facility}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Mapping of facilities to their corresponding icon URLs or file paths
const facilityIcons: { [key: string]: string } = {
  "24 Hour Reception": "/facility_icon/018-check-in.png",
  "24 Hour Security": "/facility_icon/041-check-out.png",
  "ATM": "/facility_icon/011-currency.png",
  "Adaptors": "/facility_icon/066-technical-support.png",
  "Air Conditioning": "/facility_icon/004-sim-card.png",
  "Airport Transfers": "/facility_icon/023-car.png",
  "BBQ": "/facility_icon/009-chef.png",
  "Bar": "/facility_icon/050-bar-counter.png",
  "Beauty Salon": "/facility_icon/062-room-service.png",
  "Bicycle Hire": "/facility_icon/023-car.png",
  "Bicycle Parking": "/facility_icon/028-parking-lot.png",
  "Board games": "/facility_icon/059-open-book.png",
  "Book Exchange": "/facility_icon/059-open-book.png",
  "Breakfast Not Included": "/facility_icon/024-english-breakfast.png",
  "Business centre": "/facility_icon/002-briefcase.png",
  "Cable TV": "/facility_icon/007-tv-lounge.png",
  "Cafe": "/facility_icon/003-cafe.png",
  "Café": "/facility_icon/003-cafe.png",
  "Card Phones": "/facility_icon/014-phone.png",
  "Ceiling Fan": "/facility_icon/005-ceiling-fan.png",
  "Children's play area": "/facility_icon/006-playground.png",
  "Common Room": "/facility_icon/007-tv-lounge.png",
  "Concierge": "/facility_icon/008-concierge.png",
  "Cooker": "/facility_icon/048-oven.png",
  "Cots available": "/facility_icon/010-baby-bed.png",
  "Currency Exchange": "/facility_icon/011-currency.png",
  "DRYCLEANING": "/facility_icon/034-broom.png",
  "DVD's": "/facility_icon/013-dvd.png",
  "Direct Dial Telephone": "/facility_icon/014-phone.png",
  "Dishwasher": "/facility_icon/015-dishwasher.png",
  "Dryer": "/facility_icon/078-washing-machine.png",
  "Elevator": "/facility_icon/017-elevator.png",
  "Express check-in / out": "/facility_icon/018-check-in.png",
  "Fitness Centre": "/facility_icon/019-fitness.png",
  "Flexible NRR": "/facility_icon/020-refund.png",
  "Follows Covid-19 sanitation guidance": "/facility_icon/021-mask.png",
  "Foosball": "/facility_icon/022-table-soccer.png",
  "Free Airport Transfer": "/facility_icon/023-car.png",
  "Free Breakfast": "/facility_icon/046-breakfast.png",
  "Free City Maps": "/facility_icon/025-city-map.png",
  "Free City Tour": "/facility_icon/026-tour-guide.png",
  "Free Internet Access": "/facility_icon/036-online.png",
  "Free Parking": "/facility_icon/028-parking-lot.png",
  "Free WiFi": "/facility_icon/029-wifi.png",
  "Fridge/Freezer": "/facility_icon/030-fridge.png",
  "Games Room": "/facility_icon/057-pool-table.png",
  "Hair Dryers": "/facility_icon/016-hair-dryer.png",
  "Hair Dryers For Hire": "/facility_icon/016-hair-dryer.png",
  "Hot Showers": "/facility_icon/032-shower.png",
  "Hot Tub": "/facility_icon/033-bathtub.png",
  "Housekeeping": "/facility_icon/034-broom.png",
  "Indoor Swimming Pool": "/facility_icon/035-swimming.png",
  "Internet Access": "/facility_icon/036-online.png",
  "Internet café": "/facility_icon/003-cafe.png",
  "Iron/Ironing Board": "/facility_icon/038-ironing.png",
  "Jobs Board": "/facility_icon/039-job-search.png",
  "Key Card Access": "/facility_icon/040-card-key.png",
  "Late check-out": "/facility_icon/041-check-out.png",
  "Laundry Facilities": "/facility_icon/012-laundry-service.png",
  "Linen Included": "/facility_icon/044-blanket.png",
  "Linen Not Included": "/facility_icon/044-blanket.png",
  "Luggage Storage": "/facility_icon/045-luggage.png",
  "Meals available": "/facility_icon/061-restaurant-building.png",
  "Meeting Room": "/facility_icon/047-meeting-room.png",
  "Microwave": "/facility_icon/048-oven.png",
  "Mini-Supermarket": "/facility_icon/049-supermarket.png",
  "Minibar": "/facility_icon/049-supermarket.png",
  "Nightclub": "/facility_icon/051-disco-ball.png",
  "Outdoor Swimming Pool": "/facility_icon/053-pool.png",
  "Outdoor Terrace": "/facility_icon/054-terrace.png",
  "Parking": "/facility_icon/055-parking-car.png",
  "PlayStation": "/facility_icon/056-controller.png",
  "Pool Table": "/facility_icon/057-pool-table.png",
  "Postal Service": "/facility_icon/058-postal-service.png",
  "Reading Light": "/facility_icon/059-open-book.png",
  "Reception (limited hours)": "/facility_icon/060-computer.png",
  "Restaurant": "/facility_icon/061-restaurant-building.png",
  "Room Service  (24 hours)": "/facility_icon/062-room-service.png",
  "Room service (limited hours)": "/facility_icon/062-room-service.png",
  "Sauna": "/facility_icon/063-sauna.png",
  "Security Lockers": "/facility_icon/064-open.png",
  "Self-Catering Facilities": "/facility_icon/065-catering.png",
  "Servizi aggiornate": "/facility_icon/064-open.png",
  "Shuttle Bus": "/facility_icon/067-bus.png",
  "Steam room": "/facility_icon/063-sauna.png",
  "Swimming Pool": "/facility_icon/053-pool.png",
  "Tea & Coffee Making Facilities": "/facility_icon/069-coffee-machine.png",
  "Telephone/Fax Facilities": "/facility_icon/070-telephone.png",
  "Tennis courts": "/facility_icon/071-tennis-equipment.png",
  "Tours/Travel Desk": "/facility_icon/072-information.png",
  "Towels Included": "/facility_icon/073-towels.png",
  "Towels Not Included": "/facility_icon/073-towels.png",
  "Towels for hire": "/facility_icon/073-towels.png",
  "UKRAINEREFUGEES": "/facility_icon/074-refugee.png",
  "Utensils": "/facility_icon/075-cutlery.png",
  "Vending Machines": "/facility_icon/076-vending-machine.png",
  "Wake-up calls": "/facility_icon/077-wake-up.png",
  "Washing machine": "/facility_icon/078-washing-machine.png",
  "Wheelchair Friendly": "/facility_icon/079-disability.png",
  "Wi-Fi": "/facility_icon/037-wifi-1.png",
  "Wii": "/facility_icon/056-controller.png"
};

export default Column;
