import { deleteData, getData, postData, putData } from './api';


  export async function getMyCV(token) {
    try {
      const res = await getData('api/cv/getCVOfUser', null, token);
      return res;
    } catch (error) {
      throw error;
    }
  }

  export async function deleteCV(id, token) {
    try {
      const res = await deleteData(`api/cv/${id}`, token);
      return res;
    } catch (error) {
      throw error;
    }
  }





