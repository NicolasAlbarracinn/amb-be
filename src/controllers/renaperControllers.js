const AppError = require('../utils/errorHandler');

exports.renaper = (req, res, next) => {
  if (!req.query.id) {
    next(new AppError(`please provide an afilliate id`, 404));
  }
  console.log(req.query.id);
  if (req.query.id !== '12345') {
    next(new AppError(`invalid afilliate id`, 404));
  }

  res
    .status(200)
    .status(201)
    .json({
      status: 'success',
      data: {
        dni: 12345122131,
        nroTramite: 122223,
        nroSocio: 15165156,
        tipoDocumento: 'DNI',
        nomber: 'jp',
        apellido: 'lorek',
      },
    });
};
