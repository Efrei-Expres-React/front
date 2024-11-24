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
