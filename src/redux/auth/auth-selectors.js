const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getGetingCurentUser = state => state.auth.isGetingCurentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getGetingCurentUser,
};
export default authSelectors;
