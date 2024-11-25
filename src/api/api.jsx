const fetchData = async (endpoint, method, data, token = '') => {
  const body = data ? JSON.stringify(data) : undefined;
  const jwtToken = token || '';
  const apiUrl = import.meta.env.VITE_API_URL;;

  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,
      },
      body: body,
    });


    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'Unknown error occurred');
      }
  
    const responseData = await response.json();
    return { data: responseData, status: response.status };
  } catch (error) {
    throw error;
  }
};

export const postData = (url, data, token) => fetchData(url, 'POST', data, token);
export const putData = (url, data, token) => fetchData(url, 'PUT', data, token);
export const getData = (url, data, token) => fetchData(url, 'GET', data, token);
export const deleteData = (url, token) => fetchData(url, 'DELETE', undefined, token);
