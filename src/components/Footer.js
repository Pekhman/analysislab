import { FaPhone } from "react-icons/fa6";
import Tablo from "./Tablo.png";

export default function Footer() {
  return (
    <div>
      <footer className="flex bg-gray-200 text-sm p-2">
        <div className="basis-1/2 ">
          <p>اطلاعات تماس</p>
          <p>
            پست الکترونیک :{" "}
            <a
              className="basis-1/2 text-center text-blue-800 hover:text-blue-500 transition duration-200"
              href="mailto:Annalysislab@gmail.com"
            >
              Analysislab@gmail.com
            </a>
          </p>
          <p>
            آدرس: جنت آباد مرکزی، {(35).toLocaleString("fa-IR")} متری
            گلستان&#40;مخبری&#41;، بین شاهین و ستاری، پلاک{" "}
            {(153).toLocaleString("fa-IR")}
          </p>
          <p>
            تلفن :{" "}
            <a
              className="basis-1/2 text-center text-blue-800 hover:text-blue-500 transition duration-200"
              href="tel:+9821-44492805"
            >
              {(44492805).toLocaleString("fa-IR").split("٬")}
            </a>{" "}
            <span className="font-bold text-al-1">{" | "}</span>
            <a
              className="basis-1/2 text-center text-blue-800 hover:text-blue-500 transition duration-200"
              href="tel:+9821-44492907"
            >
              {(44492907).toLocaleString("fa-IR").split("٬")}
            </a>
          </p>
        </div>
        <div className="basis-1/2"></div>
      </footer>
      <div className="text-xs flex justify-center">
        تمامی حقوق وبسایت برای آزمایشگاه آنالیز محفوظ است.
      </div>
      {/* <div className="flex justify-center">
        <img src={Tablo} className=" p-1" alt="آزمایشگاه آنالیز" />{" "}
      </div> */}
    </div>
  );
}
