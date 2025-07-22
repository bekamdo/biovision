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