import { Helmet } from "react-helmet";

export const PageTitle = ({ name }) => {
  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
    </div>
  );
};
// =>각 페이지 타이틀 정의
