import { makeRequest } from '../api';
import { API_BASE_URL } from '../../constants';

export const getWorldById = async (worldId: string) => {
  const url = `${API_BASE_URL}/worlds/${worldId}`;
  try {
    return await makeRequest<never, never>(url, 'GET');
  } catch (error) {
    return false;
  }
};
