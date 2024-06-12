import Khun from "./Khun";
export default function LuleBaKhun({ khunCount }) {
  const khunNumber = [];
  // const randomNumber = Math.ceil(Math.random() * 3);

  for (let i = 0; i < khunCount; i++) {
    khunNumber.push(i);
  }

  return (
    <div className="relative h-44 w-10 bg-white rounded-b-full">
      {khunNumber.map((k, i) => (
        <div key={i}>
          <Khun />
        </div>
      ))}
    </div>
  );
}
