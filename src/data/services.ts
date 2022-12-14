import { CardType } from "./../types/CardType";
import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";


export const servicesData: CardType[] = [
  {
    id: 1,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: BrandRecognition,
  },
  {
    id: 2,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: DetailedRecords,
  },
  {
    id: 3,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: FullyCustomizable,
  },
];
