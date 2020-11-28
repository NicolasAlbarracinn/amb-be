exports.getValueForNextSequence = async (model, sequenceOfName) => {
    const sequenceDoc = await model.findOne().sort({ [sequenceOfName]: -1 }).limit(1);
    if (sequenceDoc) {
      return sequenceDoc[sequenceOfName] + 1;
    }
    return 1;
  };