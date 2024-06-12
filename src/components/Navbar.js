import Logo from "./Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import Tablo from "./Tablo.png";
export default function Navbar({ element }) {
  function scrollTo() {
    // e.preventDefault();
    const yOffset = 1000;
    const y =
      element.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div>
      {/* <div className="flex justify-center">
        <img src={Tablo} className="opacity-70 p-1" alt="آزمایشگاه آنالیز" />{" "}
      </div> */}
      <div className="flex items-center">
        <a className="shrink basis-1/3 text-center"></a>
        <a className="flex shrink basis-1/3 justify-center pt-2" href="/logo">
          <img src={Logo} className="h-14 p-1" alt="آزمایشگاه آنالیز" />
        </a>
        <a
          className="flex basis-1/3 shrink justify-center text-xl text-center hover:text-blue-500 transition duration-200"
          href="https://www.google.com/maps/place/%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87+%D9%BE%D8%A7%D8%AA%D9%88+%D8%A8%DB%8C%D9%88%D9%84%D9%88%DA%98%DB%8C+%D8%A2%D9%86%D8%A7%D9%84%DB%8C%D8%B2%E2%80%AD/@35.7594193,51.3100657,17z/data=!4m6!3m5!1s0x3f8dfd2459414727:0x767eeac8534b5486!8m2!3d35.759415!4d51.3126406!16s%2Fg%2F11gdmbwl75?entry=ttu"
          target="_blank"
        >
          <FaLocationDot />{" "}
          <span className="text-sm">
            تهران، جنت آباد مرکزی، {(35).toLocaleString("fa-IR")} متری
            گلستان&#40;مخبری&#41;، بین شاهین و ستاری، پلاک{" "}
            {(153).toLocaleString("fa-IR")}
          </span>
        </a>
        {/* <a
          className="shrink basis-1/3 text-center"
          href="https://www.google.com/maps/place/%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DA%AF%D8%A7%D9%87+%D9%BE%D8%A7%D8%AA%D9%88+%D8%A8%DB%8C%D9%88%D9%84%D9%88%DA%98%DB%8C+%D8%A2%D9%86%D8%A7%D9%84%DB%8C%D8%B2%E2%80%AD/@35.7594193,51.3100657,17z/data=!4m6!3m5!1s0x3f8dfd2459414727:0x767eeac8534b5486!8m2!3d35.759415!4d51.3126406!16s%2Fg%2F11gdmbwl75?entry=ttu"
          target="_blank"
        >
          تماس با ما
        </a> */}
      </div>

      <nav className=" h-14 flex items-center ">
        {/* <a
          className="basis-1/3 shrink text-center hover:text-blue-500 transition duration-200"
          href="/"
        >
          بیمه های طرف قرارداد{" "}
        </a> */}
        <a
          onClick={scrollTo}
          className="flex basis-1/3 shrink text-xl text-center hover:text-blue-500 transition duration-200"
        >
          <FaLocationDot />{" "}
          <span className="text-sm">
            تهران، جنت آباد مرکزی، {(35).toLocaleString("fa-IR")} متری
            گلستان&#40;مخبری&#41;، بین شاهین و ستاری، پلاک{" "}
            {(153).toLocaleString("fa-IR")}
          </span>
        </a>

        <div className="basis-1/3 text-xl text-al-2 font-bold shrink text-center ">
          <p>آزمایشگاه پزشکی آنالیز</p>
        </div>

        {/* <div className="eng">English</div> */}
      </nav>
    </div>
  );
}
