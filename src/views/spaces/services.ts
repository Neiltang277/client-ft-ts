import api from '../../utils/api';

export async function querySpaces(pageIndex:number, pageSize: number) {
  return api.get(`/spaces`, {
    pageIndex,
    pageSize
  });
}

