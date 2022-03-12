export const isUrl = (str: any) => {
  let protocol;

  try {
    ({ protocol } = new URL(str));
  } catch (_) {
    return false;
  }

  return ['http:', 'https:'].includes(protocol);
};
