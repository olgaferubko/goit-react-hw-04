import axios from "axios";
const fetchResult = async (query, page = 1) => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "-Q-wE1scsMXPcndDPLLiqgiV_o61rH00ryp0mPYSc3M",
      query,
      page,
    },
  });
  return data;
};
export default fetchResult;