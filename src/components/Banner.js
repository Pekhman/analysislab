import LuleBaKhun from "./LuleBaKhun";
export default function Banner({className}) {
  const luls = [2, 1, 2, 2, 3, 1];
  return (
    // const newluls = luls.map()
    <div className={`flex justify-center gap-2 ${className}`}>
      {luls.map((l, i) => (
        <div key={i}>
          <LuleBaKhun khunCount={l} />
        </div>
      ))}
      {/* <LuleBaKhun khunCount={2}/>
      <LuleBaKhun khunCount={2}/>
      <LuleBaKhun khunCount={1}/>
      <LuleBaKhun khunCount={1}/>
      <LuleBaKhun khunCount={2}/>
      <LuleBaKhun khunCount={2}/>
      <LuleBaKhun khunCount={2}/>
      <LuleBaKhun khunCount={2}/> */}
    </div>
  );
}
