const logoutUser = async function (req, res) {
    res.cookie('token', null);
    res.status(200).send('User Logged out successfully');
}
export default logoutUser