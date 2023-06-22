export class User {
  id: number;
  username: string;
  password: string;
  email: string;
  fullname: string;
  mobileNumber: string;
  userTypeCode: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;

  constructor(
    id: number,
    username: string,
    password: string,
    email: string,
    fullname: string,
    mobileNumber: string,
    userTypeCode: string,
    createdAt: Date,
    createdBy: string,
    updatedAt: Date,
    updatedBy: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.fullname = fullname;
    this.mobileNumber = mobileNumber;
    this.userTypeCode = userTypeCode;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;
    this.updatedBy = updatedBy;
  }
}
