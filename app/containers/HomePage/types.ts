export type LoginInfo = {
  username: string;
  password: string;
};

export type CreditCard = {
  number: string;
  cvc: string;
  validity: string
};

export type User = {
  name: string;
  code: string;
  qrCode: string;
  cardInfo: CreditCard;
};