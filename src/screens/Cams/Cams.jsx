import React, { useEffect, useState } from 'react';
import { fetchCamsList } from 'shared/services/cams';

import './styles.scss';

function Cams() {
  const [cams, setCams] = useState({});
  console.log(cams);

  useEffect(() => {
    async function getCams() {
      const camsList = await fetchCamsList();
      setCams(camsList);
    }
    getCams();
  }, []);

  return (
    <div>
      <h1>{cams.title}</h1>
      {cams && <img src={cams.image.current.preview} alt="picture"></img>}
    </div>
  );
}

export default Cams;
