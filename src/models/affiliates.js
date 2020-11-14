const mongoose = require('mongoose');

const { Schema } = mongoose;

//we should think about validation
//This are just the fields for the affiliates table, we need to think which is the best way to add the others fields to the schema
const affiliatesSchema = new Schema({
  patnerNumber: {
    // N° Socio.
    type: String,
    required: [true, 'patnerNumber is required'],
  },
  folderNumber: {
    // N° Legajo.
    type: String,
    required: [true, 'folderNumber is required'],
  },
  cuil: {
    type: String,
    required: [true, 'cuil is required'],
  },
  dni: {
    type: String,
    required: [true, 'dni is required'],
  },
  personalInfo: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  status: {
    //is this a boolean or a enum with options?
    type: Boolean,
  },
  distribution: {
    //Repartición
    type: String,
  },
  admissionDate: {
    type: Date,
    default: new Date(),
  },
  paymentMethod: {
    type: String,
    enum: ['credit car', 'cash'], // Other methods?
  },
  //this should be a Schema.Types.ObjectID that reference to comercializador schema/document
  //for now i will leave it as a string. do we need to create the schema or is the user?
  comercializador: {
    type: String,
  },
});

const Affiliates = mongoose.model('Affiliates', affiliatesSchema);

module.exports = Affiliates;

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
