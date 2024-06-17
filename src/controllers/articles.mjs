export const getAticlesHandler = (req, res) => {
  res.send('Get articles route')
}
export const postAticlesHandler = (req, res) => {
  res.send('Post articles route')
}

export const getAticleHandler = (req, res) => {
  res.send(`Get article by Id route: ${req.params.articleId}`)
}
export const putAticleHandler = (req, res) => {
  res.send(`Put article by Id route: ${req.params.articleId}`)
}
export const deleteAticleHandler = (req, res) => {
  res.send(`Delete article by Id route: ${req.params.articleId}`)
}

