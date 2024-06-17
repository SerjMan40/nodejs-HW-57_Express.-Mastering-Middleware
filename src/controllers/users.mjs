export const getUsersHandler = (req, res) => {
  res.send('Get users route')
}
export const postUsersHandler = (req, res) => {
  res.send('User created')
}

export const getUserIdHandler = (req, res) => {
  res.send(`Get user by Id route: ${req.params.userId}`)
}
export const putUserIdHandler = (req, res) => {
  res.send(`Put user by Id route: ${req.params.userId}`)
}
export const deleteUserIdHandler = (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`)
}

