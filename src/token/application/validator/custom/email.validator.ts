const VALID_DOMAINS = ['gmail.com', 'hotmail.com', 'yahoo.es'];

const isValidEmailDomain = async (email: string) : Promise<boolean> => {
  const emailArray = email.split('@');
  return VALID_DOMAINS.includes(emailArray[1]);
}

export default isValidEmailDomain;

