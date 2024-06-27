import { FaAddressCard } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import { SiVorondesign } from "react-icons/si";
import { BsJournalBookmark } from "react-icons/bs";
import { GiBrickWall } from "react-icons/gi";
import { GiJewelCrown } from "react-icons/gi";
import { BiBlanket } from "react-icons/bi";
import { PiPaintBrush } from "react-icons/pi";
import { BsStopwatch } from "react-icons/bs";
import { MdOutlineMore } from "react-icons/md";
import { RiEmojiStickerLine } from "react-icons/ri";
import { GiCandleLight } from "react-icons/gi";
import { PiHoodie } from "react-icons/pi";
import { GiTargetPoster } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiHeartNecklace } from "react-icons/gi";
import dogTag from '/AnyTask/dog_tag.png'
import bracelet from '/AnyTask/bracelet.png'
const AnyTaskData = [
  {
    title: "Message Card",
    icon: FaAddressCard,
  },
  {
    title: "T-shirt",
    icon: FaTshirt,
  },
  {
    title: "Mugs",
    icon: FaMugSaucer,
  },
  {
    title: "Graphic Products",
    icon: SiVorondesign,
  },
  {
    title: "Journal",
    icon: BsJournalBookmark,
  },
  {
    title: "Wall Art",
    icon: GiBrickWall,
  },
  {
    title: "Jewellery",
    icon: GiJewelCrown,
  },
  {
    title: "Blanket",
    icon: BiBlanket,
  },
  {
    title: "Acrylic Products",
    icon: PiPaintBrush,
  },
  {
    title: "Watch",
    icon: BsStopwatch,
  },
  {
    title: "Photo-engraved Jewelry",
    icon:GiHeartNecklace,
  },
  {
    title: "Stickers",
    icon: RiEmojiStickerLine,
  },
  {
    title: "Candle",
    icon: GiCandleLight,
  },
  {
    title: "Hoodies",
    icon: PiHoodie ,
  },
  {
    title: "Posters",
    icon: GiTargetPoster,
  },
  {
    title: "Seat Covers",
    icon: MdOutlineEventSeat,
  },
  {
    title: "Phone cases",
    icon: IoIosPhonePortrait,
  },
  {
    title: "Spiral Notebook",
    icon: SlNotebook,
  },
  {
    title: "Tote Notebook",
    icon: MdOutlineShoppingBag,
  },

];

export const extraImg = [
  {
    title: "Bracelets",
    icon: bracelet,
  },
  {
    title: "Dog Tags",
    icon: dogTag,
  },
]
export const lastImg =   [{
  title: "more +",
  icon: MdOutlineMore,
}]

export default AnyTaskData;
