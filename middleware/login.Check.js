export const isLogIn = (req, res, next) => {
  const token = req.cookies.token;
    //good response that means the user is logged in and does neet to be sent on the hompage or the admin page
  if (token) {
    return res.status(200).json({ loggedIn: true });
  }
  // response is bad user will stay on the login page
  return res.status(401).json({ loggedIn: false });
};