import Layout from "./components/Layout";
import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
// function Numfa(number) {
//   return number.toLocaleString('fa-IR')
// }

const myEvents = [
  { title: "hello", content: "ye kossheri" },
  { title: "hello2", content: "ye kossheri2" },
  { title: "hello3", content: "ye kossheri3" },
  { title: "hello4", content: "ye kossheri4" },
];

export default function App() {
  return (
    <Layout>
      <div>
        <header className="flex justify-center text-al-2 ">
          جنت آباد مرکزی، {(35).toLocaleString("fa-IR")} متری
          گلستان&#40;مخبری&#41;، بین شاهین و ستاری، پلاک{" "}
          {(153).toLocaleString("fa-IR")}
        </header>
        {/* <span>{"("} تو پرانتز {")"}</span> */}
        {/* <div className=" bg-al-2 m-20 rounded-full p-2 ">
          <button className="bg-al-1 flex p-2 rounded-full"></button>
          <button className="bg-white flex p-4 rounded-b-lg"></button>
        </div>
        <div className="bg-green-100 py-2 px-96 flex justify-between">
          {[1, 2, 3, 4, 5].map((a) => (
            <div className="relative">
              <div className="bg-white w-6 h-16" />
              <div className="bg-al-1 w-4 h-4 absolute bottom-1 left-1" />
            </div>
          ))}
        </div> */}
        {/* <div className="flex justify-center p-3">
          <div className=" bg-al-2 p-10"><Banner className="" /></div>
        </div> */}
        {/* <div className="flex justify-center">
          <div className="p-10 min-w-[300px] m-auto">
            <Banner className="" />
          </div>
        </div> */}


          <div className="p-10">
            <Banner className="" />
          </div>



        {/* {myEvents.map((e) => (
          <div>
            <h1>{e.title}</h1>
            <p>{e.content}</p>
          </div>
        ))} */}
        {/* <svg
          width="800"
          height="800"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="5" height="5" />
        </svg> */}
      </div>
    </Layout>
  );
}
