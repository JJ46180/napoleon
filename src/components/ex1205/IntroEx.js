const users = [
  {
    id: 0,
    name: "김현지",
    age: 25,
  },
  {
    id: 1,
    name: "이현지",
    age: 27,
  },
  {
    id: 3,
    name: "최현지",
    age: 28,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {users.map((n) => (
        <div key={n.id}>
          <h2>자기소개</h2>
          <h3>이름:{n.name}</h3>
          <h3>나이:{n.age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
