import { useHttp } from "../../hooks/http.hook";

const useChampionService = () => {
  const { request } = useHttp();

  const getChampion = async (id) => {
    const res = await request(`http://localhost:3001/champions/${id}`);
    return await res;
  };

  return { getChampion };
};

export default useChampionService;
