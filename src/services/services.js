import { api } from "../AxiosUtils/AxiosUtils";

const GetUserList = (search) => {
  return api
    .get(`/api/userlist/?search=${search}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error fetching user list:", error);
      throw error;
    });
};

export { GetUserList };
