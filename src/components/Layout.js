import Tablo from "./Tablo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef } from "react";

export default function Layout({ children }) {
  const findel = useRef(null);
  // console.log(findel.current); // => real value of findel use .currnet
  return (
    // <div style={{'--image-url': `url(${Tablo})`}}
    // className='bg-[image:var(--image-url)]'>

    <div>
      <Navbar element={findel} />
      <div className="p-4">{children}</div>
      <div className="h-[1000px]">hello</div>
      <div ref={findel}>
        <Footer />
      </div>
    </div>
  );
}
