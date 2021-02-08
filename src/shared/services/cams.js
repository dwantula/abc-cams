import apiClient from 'shared/services/apiClient';

export async function fetchCamsList() {
  const response = await apiClient.get(
    '/webcams/v2/list/category=beach/country=IT/orderby=popularity,desc/limit=20',
  );
  console.log(response.data.result.webcams[1].title);
  return response.data.result.webcams[1].title;
}
