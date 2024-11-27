
import { deleteData, getData } from "./api";

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