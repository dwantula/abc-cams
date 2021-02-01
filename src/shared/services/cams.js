import apiClient from 'shared/services/apiClient';

export async function fetchCamsList() {
  const response = await apiClient.get(
    'https://api.windy.com/api/webcams/v2/list/webcam=1361879037?show=webcams:location,image',
    // 'webcams/v2/list/',
  );
  console.log(response);
}
