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
    </div>
  );
}

export default Cams;
