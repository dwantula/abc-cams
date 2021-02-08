import apiClient from 'shared/services/apiClient';

export async function fetchCamsList() {
  const response = await apiClient.get(
    '/webcams/v2/list?show=webcams:image,location;',
  );
  console.log(response.data.result.webcams);
  return response.data.result.webcams[0];
}
