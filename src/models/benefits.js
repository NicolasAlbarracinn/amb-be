const mongoose = require('mongoose');

const { Schema } = mongoose;

const benefitsSchema = new Schema(
  {
    benefitId: {
      type: Number,
      required: true,
      unique: true,
    },
    benefitInfo: {
      lotNumber: {
        type: String,
        required: true,
      },
      benefitType: {
        type: String,
        required: true,
      },
      certificateNumber: {
        type: String,
        required: true,
      },
      applicationDate: {
        type: String,
        required: true,
      },
      portfolio: {
        type: String,
        required: true,
      },
      plan: {
        planOtion: {
          type: String,
        },
        signatureAmount: {
          type: String,
        },
        duesQuantity: {
          type: String,
        },
        duesAmount: {
          type: String,
        },
        amountGranted: {
          type: String,
        },
      },
      observations: {
        type: String,
      },
      benefitStatus: {
        type: String,
        required: true,
      },
      grantedPeriod: {
        type: String,
        required: true,
      },
      fileGranted: {
        type: String,
        required: true,
      },
      statusDate: {
        type: String,
        required: true,
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    modifiedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true },
);

const Benefits = mongoose.model('Benefits', benefitsSchema);

module.exports = Benefits;
