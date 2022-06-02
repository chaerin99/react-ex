import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Hello = () => {
  const back = useNavigate();
  const id = useParams();
  console.log(id);
  return (
    <>
      <div>hello</div>
      <button
        onClick={() => {
          back(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default Hello;
