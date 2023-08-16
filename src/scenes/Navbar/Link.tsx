import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string;
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
}

function Link
({page, selectedPage,
  setSelectedPage}: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
 <AnchorLink className={`${selectedPage === lowerCasePage ? "text-color-2 underline" : ""} transition duration-500 hover:text-color-2  hover:font-bold hover:underline`}
 href={`#${lowerCasePage}`}
 onClick={() => setSelectedPage(lowerCasePage)}
 >
  {page}
 </AnchorLink>
  )
}

export default Link
