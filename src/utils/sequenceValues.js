exports.getValueForNextSequence = async (model, sequenceOfName) => {
    const sequenceDoc = await model.findOne().sort({ [sequenceOfName]: -1 }).limit(1);
    return sequenceDoc[sequenceOfName] + 1;
  };