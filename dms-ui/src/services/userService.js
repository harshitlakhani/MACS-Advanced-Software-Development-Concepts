import http from "./httpService";

const authApiEndpoint = "/auth/users/";
const recoveryApiEndpoint = "/auth/recovery/";
const dalUserApiEndpoint = "/dmsfront/dalusers/";
const chaplainApiEndpoint = "/dmsfront/chaplains/";

export function register(user) {
  return http.post(authApiEndpoint, {
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
    password: user.password,
    is_staff: user.is_staff,
  });
}

export function updatePassword(email, password) {
  return http.put(recoveryApiEndpoint, {
    email: email,
    password: password,
  });
}

export function registerDalUser(user) {
  return http.post(dalUserApiEndpoint, {
    user_id: user.user_id,
    phone: user.phone,
  });
}

export function registerChaplain(user) {
  return http.post(chaplainApiEndpoint, {
    user_id: user.user_id,
    phone: user.phone,
    religion: user.religion,
    description: user.description,
  });
}
