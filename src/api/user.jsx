import { postData } from './api';

 export async function login(email, password) {
    try {
        const body = {email, password}
      const res = await postData('api/auth/login', body);
      return res;
    } catch (error) {
      throw error;
    }
  }


  export async function register(firstName, lastName, email, password, birth, bio) {
    try {
        const body = {firstName, lastName, email, password, birth, bio}
      const res = await postData('api/auth/register', body);
      return res;
    } catch (error) {
      throw error;
    }
  }

