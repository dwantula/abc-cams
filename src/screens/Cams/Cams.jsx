import React, { useEffect } from 'react';
import { fetchCamsList } from 'shared/services/cams';

import './styles.scss';

function Cams() {
  useEffect(() => {
    fetchCamsList();
  }, []);
  return (
    <div>
      <h1>Cams</h1>
      <img src="https://images-webcams.windy.com/37/1361879037/current/icon/1361879037.jpg" />
    </div>
  );
}

export default Cams;
