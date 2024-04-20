export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isNumberValid(formattedNumber) {
  if (typeof formattedNumber !== "string" || formattedNumber.length < 7) {
    return false;
  }

  const regex = /^\d*$/;
  return !!formattedNumber.match(regex);
}
