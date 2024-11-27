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



// Création d'un CV
export async function createCV(firstname, lastname, description) {
  try {
    const body = { firstname, lastname, description };
    const res = await postData('api/cv', body);
    return res;
  } catch (error) {
    throw error;
  }
}

// Récupération des CV
export async function getCVs(token) {
  try {
    const res = await getData('api/cv', null, token);
    return res;
  } catch (error) {
    throw error;
  }
}

// Mise à jour d'un CV
export async function updateCV(id, firstname, lastname, description, token) {
  try {
    const body = { firstname, lastname, description };
    const res = await putData(`api/cv/${id}`, body, token);
    return res;
  } catch (error) {
    throw error;
  }
}
