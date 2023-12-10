const arr = [
  {
    id: 0,
    name: "네이버",
    url: "https://www.naver.com/",
  },
  {
    id: 1,
    name: "다음",
    url: "https://www.daum.net/",
  },
  {
    id: 2,
    name: "네이트",
    url: "https://www.nate.com/",
  },
];

// export const MapFnEx2 = () => {
//   return arr.map((i) => (
//     <div key={i.id}>
//       <h3>즐겨찾기</h3>
//       <h2>이름:{i[0].name}</h2>
//       <h2>주소:이름:{i[0].url}</h2>
//     </div>
//   ));
// };

export const MapFnEx2 = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {arr.map((site) => (
        <h3 key={site.id}>
          <a href={site.url}>{site.name}</a>
        </h3>
      ))}
    </div>
  );
};
