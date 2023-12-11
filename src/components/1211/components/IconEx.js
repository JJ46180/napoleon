import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faUser} style={{ color: "lightpink" }} />
    </div>
  );
};

// 스타일을 추가 할때는 중괄호가 두개 들어간다.(7줄)
