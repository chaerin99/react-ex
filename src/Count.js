import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('렌더링됨');
  }, [count]);

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={IncreaseCount}> + 1 </button>
      <div>안녕하세요</div>
    </div>
  );
};

export default Counter;
