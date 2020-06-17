// Eliminar a necessidade de ficar usando try e catch em toda parte do código, ao usar async
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
