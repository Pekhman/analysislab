import Khun from "./Khun";
export default function LuleBaKhun({ khunCount }) {
  const khunNumber = [];
  // const randomNumber = Math.ceil(Math.random() * 3);

  for (let i = 0; i < khunCount; i++) {
    khunNumber.push(i);
  }

  return (
    <div className="relative h-44 w-10 bg-gradient-to-b from-gray-200 to-al-2 rounded-b-full">
      {khunNumber.map((k, i) => (
        <div key={i}>
          <Khun />
        </div>
      ))}
    </div>
  );
}
