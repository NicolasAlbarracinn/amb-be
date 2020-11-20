const AppError = require('../utils/errorHandler');

exports.renaper = (req, res, next) => {
  const renaperData =  {
    personalData: {
      documentType: {
        value: 'dni',
        isValid: true,
      },
      documentNumber: {
        value: '37278172',
        isValid: true,
      },
      gender: {
        value: 'm',
        isValid: true,
      },
      cuil: {
        value: '20372781727',
        isValid: true,
      },
      name: {
        value: 'Nicolas',
        isValid: true,
      },
      lastName: {
        value: 'Albarracin',
        isValid: true,
      },
      country: {
        value: 'argentina',
        isValid: true,
      },
      birthPlace: {
        value: 'argentina',
        isValid: true,
      },
      civilState: {
        value: 's',
        isValid: true,
      },
      email: {
        value: 'nicodare@gmail.com',
        isValid: true,
      },
      phone: {
        value: '1562685678',
        isValid: true,
      },
      personalPhone: {
        value: '1562685678',
        isValid: true,
      },
    },
    adress: {
      streetAdress: {
        value: 'Miller 2330',
        isValid: true,
      },
      floor: {
        value: '5to',
        isValid: true,
      },
      aptNumber: {
        value: 'C',
        isValid: true,
      },
      department: {
        value: 'Villa Urquiza',
        isValid: true,
      },
      location: {
        value: 'CABA',
        isValid: true,
      },
      province: {
        value: 'Buenos Aires',
        isValid: true,
      },
      postalCode: {
        value: '1431',
        isValid: true,
      },
      observations: {
        value: 'fafita',
        isValid: true,
      },
    }
  }
  res
    .status(200)
    .status(201)
    .json({
      status: 'success',
      data: renaperData,
    });
};
