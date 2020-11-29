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
  status: { 
    type: String,
    required: true,
    default: 'a',
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
    otherPerferences: {
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
      required: false,
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
    officeName: {
      type: String,
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
      required: false,
    },
  },

  createdBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  modifiedBy: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  
}, { timestamps: true });

const Partners = mongoose.model('Partners', partnersSchema);

module.exports = Partners;