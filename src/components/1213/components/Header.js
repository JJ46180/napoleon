import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}>LOGO</Link>
        </div>
        {/* <Link to={"/"}>LOGO</Link> */}
        {/* => a태그 처럼 사용 */}
        {/* =>링크를 사용할때는 a태그가 아닌 Link컴포넌트를 사용한다! */}
        <ul>
          <li>
            <Link to={"/sub01"}>서브페이지1</Link>
          </li>
          <li>
            <Link to={"/sub02"}>서브페이지2</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

// ->하나하나 다 복붙하면 비효율적이므로 아예 컴포넌트 분해를 해준다
