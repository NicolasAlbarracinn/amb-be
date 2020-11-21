const mongoose = require('mongoose');

const { Schema } = mongoose;

//we should think about validation
//This are just the fields for the partners table, we need to think which is the best way to add the others fields to the schema
const partnersSchema = new Schema({
  partnerId: { 
    type: Number,
    required: true,
    unique : true
  },
  personalData: {
    documentType: {
      type: String,
      required: true,
    },
    documentNumber: {
      type: Number,
      required: true,
    },
    procedureNumber: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    cuil: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    civilState: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    personalPhone: {
      type: String,
    },
    salary: {
      type: Number,
    },
    netSalary: {
      type: Number,
    },
    socialQuota: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    recoveryPaymentType: {
      type: String,
      required: true,
    },
    recoveryPaymentType: {
      type: String,
      required: false,
    },
  },
  adress: {
    streetAdress: {
      type: String,
      required: true,
    },
    floor: {
      type: String,
      required: true,
    },
    aptNumber: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
  },
  workInfo: {
    repartition: {
      type: String,
      required: true,
    },
    fileNumber: {
      type: Number,
      required: true,
    },
    fileItem: {
      type: String,
      required: true,
    },
    cbu: {
      type: Number,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    branch: {
      type: Number,
      required: true,
    },
    banking: {
      type: Number,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
  },

  createdBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  
}, { timestamps: true });

const Partners = mongoose.model('Partners', partnersSchema);

module.exports = Partners;

// N° de Socio

// N° de documento
// N° de Trámite
// Sexo
// Tipo de documento
// Sexo
// N° de Trámite

//DatoGenerales

// Apellido
// Nombre
// CUIL
// Fecha de nacimiento
// Edad
// Nacionalidad
// Lugar de nacimiento
// Estado civil
// Correo electrónico
// Celular
// Teléfono preferencial
// Otro  preferencial

// Estado | what it is this field?

// Fecha de ingreso
// Sueldo Bruto
// Sueldo Neto
// Comercializador
// Tipo de cuota social
// Forma de cobro CS
// Forma de cobro Recupero CS

// Calle y N°
// Piso
// Depto
// Departamento
// Localidad
// Provincia
// Código postal
// Observaciones

// Repartición
// N° de legajo
// Item legajo
// Banco
// CBU
// Sucursal
// Bancaria
// N° de cuenta
// Observaciones
