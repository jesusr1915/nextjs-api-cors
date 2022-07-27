import { extend } from "umi-request";

const localRequest = extend({
  prefix: `./api`,
  timeout: 1000 * 10,
});

export const getUserService = async (page = 1) => {
  const response = await localRequest(`/user`, {
    method: "GET",
  });
  return response;
};
