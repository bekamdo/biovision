export interface Product {
  id: string;
  name: string;
  category: string;
  seller: string;
  rating: number;
  reviews: number;
  currentPrice: number;
  originalPrice: number;
  image: string;
}

export interface AuditLogEntry {
  serviceName: string;
  ipAddress: string;
  deviceModel: string;
  entityAffected: string;
  httpMethod: string;
  role: string;
  userAgent: string;
  responseBody: string;
  userName: string;
  statusCode: string;
  eventDescription: string;
  operationSystem: string;
}

interface DataRow {
  serviceName: string;
  ipAddress: string;
  deviceModel: string;
  entityAffected: string;
  httpMethod: string;
  role: string;
  userAgent: string;
  responseBody: string;
  userName: string;
  statusCode: string;
  eventDescription: string;
  operationSystem: string;
}

export const sampleData: DataRow[] = [
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  },
  {
    serviceName: "John Doe",
    ipAddress: "asjsbuwo832yr8",
    deviceModel: "Macbook Pro",
    entityAffected: "LOGIN",
    httpMethod: "GET",
    role: "User",
    userAgent: "Other/0.00",
    responseBody: "channel_parti",
    userName: "John Doe",
    statusCode: "200",
    eventDescription: "Add Data",
    operationSystem: "Windows"
  }
];

export interface User {
  id: number;
  name: string;
  role: string;
  avatar: string;
}
export interface Permission {
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
}

export interface Role {
  id: string;
  name: string;
  icon: string;
}

export interface Module {
  id: string;
  name: string;
  permissions: Record<string, Permission>;
}

export interface PermissionsData {
  modules: Module[];
  roles: Role[];
}
