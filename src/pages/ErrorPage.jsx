import { useState } from 'react';
import { Link } from 'react-router-dom';
const Errorpage = () => {
  const [timer, setTimer] = useState(null);
  setTimeout(() => {
    setTimer(1);
  }, 3000);
  return (
    <>
      <div>
        This page not founded.<br></br> You can RETURN after 3 sec.
      </div>

      {timer && <Link to="/">Back</Link>}
    </>
  );
};

export default Errorpage;
