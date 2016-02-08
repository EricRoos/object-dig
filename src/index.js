module.exports = (target, ...keys) => {
  let digged = target;
  for (const key of keys) {
    if (typeof key === 'function') {
      digged = key(digged);
    } else {
      digged = digged[key];
    }
    if (typeof digged === 'undefined') {
      return undefined;
    }
  };
  return digged;
};
