module.exports = email => {
  const regex = /(?!^).(?=[^@]+@)/g;
  const subst = `*`;

  // The substituted value will be contained in the result variable
  return email.replace(regex, subst);
};
