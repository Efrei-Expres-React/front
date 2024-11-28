
import { deleteData, getData, postData } from "./api";

export async function getMyrecomandations(token) {
    try {
      const res = await getData('api/reco/', null, token);
      return res;
    } catch (error) {
      throw error;
    }
  }


  export async function deleteRecommandation(id, token) {
    try {
      const res = await deleteData('api/reco/'+id, token);
      return res;
    } catch (error) {
      throw error;
    }
  }


  
export async function getCvRecommandations(id, token) {
  try {
    const res = await getData('api/reco/'+id, null, token);
    return res;
  } catch (error) {
    throw error;
  }
}


export async function createRecomandation(data, token) {
  try {
    const res = await postData('api/reco/', data, token);
    return res;
  } catch (error) {
    throw error;
  }
}

