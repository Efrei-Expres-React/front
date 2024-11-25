import { getData, postData, putData } from './api';

 export async function login(email, password) {
    try {
        const body = {email, password}
      const res = await postData('api/auth/login', body);
      return res;
    } catch (error) {
      throw error;
    }
  }


  export async function register(firstname, lastname, email, password, birth, bio) {
    try {
        const body = {firstname, lastname, email, password, birth, bio}
      const res = await postData('api/auth/register', body);
      return res;
    } catch (error) {
      throw error;
    }
  }


  export async function getMyProfile(token) {
    try {
      const res = await getData('api/user/me', null, token);
      return res;
    } catch (error) {
      throw error;
    }
  }



  
  export async function putMyProfile(firstname, lastname,birth, bio, token) {
    try {
      const body = {firstname, lastname,birth, bio}
      const res = await putData('api/user/me',body, token);
      return res;
    } catch (error) {
      throw error;
    }
  }


