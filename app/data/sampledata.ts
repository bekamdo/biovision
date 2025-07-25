import { AuditLogEntry, Product, User } from "@/types";


export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Lettuce",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/86d1ff6c482d9374622d017485e396b7d5721ade?width=492",
  },
  {
    id: "2",
    name: "Red Peppers",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/5b2484b2e6c4a3625ce9737cc77742dc1e2ed95c?width=492",
  },
  {
    id: "3",
    name: "Okra",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/0fd5da864fac68e7ceaa8f7c73387dbcec7c8bcb?width=492",
  },
  {
    id: "4",
    name: "Corn",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/621e697ea3bbd651cbeec7500ccc7141c50cc9d2?width=492",
  },
  {
    id: "5",
    name: "Mangoes",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2a007015dee132cb7660a2e9ca1840b9f2f11ddd?width=492",
  },
  {
    id: "6",
    name: "Green Peppers",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/4f40cc7fafef5ac331a6b3c45da2b6fb5d214d10?width=492",
  },
  {
    id: "7",
    name: "Cucumbers",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/62a4d1ba7e3b3b7c8e7c62064bb3d95d526ba06c?width=492",
  },
  {
    id: "8",
    name: "Chillis",
    category: "Vegetables",
    seller: "Mr.food",
    rating: 4,
    reviews: 4,
    currentPrice: 2,
    originalPrice: 3.99,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/2a007015dee132cb7660a2e9ca1840b9f2f11ddd?width=492",
  },
];

export const tags = [
    "Healthy",
    "Low fat",
    "Vegetarian",
    "Kid foods",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Launch",
    "Dinner",
    "Breackfast",
    "Fruit",
  ];

  export const users: User[] = [
  { id: 1, name: "John Doe", role: "Admin", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
  { id: 2, name: "John Doe", role: "Moderator", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
  { id: 3, name: "John Doe", role: "Moderator", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
  { id: 4, name: "John Doe", role: "Moderator", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
  { id: 5, name: "John Doe", role: "Admin", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
  { id: 6, name: "John Doe", role: "Authenticated User", avatar: "https://api.builder.io/api/v1/image/assets/TEMP/ec8013246d0ea1088521ef8e1d26cdde0c0bad54?width=80" },
];


  export const auditData = [
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


  

  
export const userData = [
    { name: "John Doe", role: "Admin" },
    { name: "John Doe", role: "Moderator" },
    { name: "John Doe", role: "Moderator" },
    { name: "John Doe", role: "Moderator" },
    { name: "John Doe", role: "Admin" },
    { name: "John Doe", role: "Authenticated User" },
  ];

   export  const superAdminPermissions = [
    { name: "Fundraiser", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Billings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Transactions", permissions: { View: true } },
    { name: "Chama", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Tickets", permissions: { View: true, Create: false, Edit: false, Delete: false, Comment: false, Suspend: false } },
    { name: "Users", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Audit Logs", permissions: { View: true, Export: false } },
    { name: "Settings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
  ];

    export const editorPermissions = [
    { name: "Fundraiser", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Billings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Transactions", permissions: { View: true } },
    { name: "Chama", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Tickets", permissions: { View: true, Create: false, Edit: false, Delete: false, Comment: false, Suspend: false } },
    { name: "Users", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Audit Logs", permissions: { View: true, Export: false } },
    { name: "Settings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
  ];

    export const userPermissions = [
    { name: "Fundraiser", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Billings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Transactions", permissions: { View: true } },
    { name: "Chama", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Tickets", permissions: { View: true, Create: false, Edit: false, Delete: false, Comment: false, Suspend: false } },
    { name: "Users", permissions: { View: true, Create: false, Edit: false, Delete: false } },
    { name: "Audit Logs", permissions: { View: true, Export: false } },
    { name: "Settings", permissions: { View: true, Create: false, Edit: false, Delete: false } },
  ];

  export const sampleArticles = [
  {
    id: '1998498',
    author: {
      name: 'Kianna Kenter',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/e5cc5340fdde9bfe98fac3c9f22e6f29bdbe6ec7?placeholderIfAbsent=true'
    },
    title: 'Noida Bank Employee Booked For Illicitly Transferring..',
    publishedOn: '03-Jan-2023 | 08:53am',
    updatedOn: '03-Jan-2023 | 08:53am',
    approvedBy: 'Kianna Kenter',
    status: 'Published' as const
  },
  {
    id: '1998499',
    author: {
      name: 'Phillip Ekstrom',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/584ac73e60b35fea67523021f6a16440a6858bec?placeholderIfAbsent=true'
    },
    title: 'Dunki Release LIVE Updates: SRK Fans Call Film...',
    publishedOn: '06-Jan-2023 | 09:55am',
    updatedOn: '06-Jan-2023 | 10:25am',
    approvedBy: 'Phillip Ekstrom',
    status: 'Unpublished' as const
  },
  {
    id: '19984100',
    author: {
      name: 'Corey Bator',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a30ad71b27a527e91e425a3af3e8475ce023cadb?placeholderIfAbsent=true'
    },
    title: 'There\'s A Message in The Suspension Spree...',
    publishedOn: '06-Jan-2023 | 09:46am',
    updatedOn: '06-Jan-2023 | 10:27am',
    approvedBy: 'Corey Bator',
    status: 'Published' as const
  },
  {
    id: '19984101',
    author: {
      name: 'Omar Donin',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ce469a0889df2f4b637681732991ef03b80b76cf?placeholderIfAbsent=true'
    },
    title: 'How 150 Meetings by Amit Shah and 3,200 Suggestions...',
    publishedOn: '07-Jan-2023 | 08:53am',
    updatedOn: '07-Jan-2023 | 08:53am',
    approvedBy: 'Omar Donin',
    status: 'Unpublished' as const
  },
  {
    id: '19984102',
    author: {
      name: 'Jocelyn Rosser',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/181b181b191184d8d91860cb94df48f2a2d38e60?placeholderIfAbsent=true'
    },
    title: 'US Has Deepened Partnership with India\': Blinken at Year...',
    publishedOn: '07-Jan-2023 | 08:53am',
    updatedOn: '07-Jan-2023 | 08:53am',
    approvedBy: 'Jocelyn Rosser',
    status: 'Published' as const
  },
  {
    id: '19984103',
    author: {
      name: 'Madelyn Gouse',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/aad5bf98efb6752462c4e196b87d6ea353692a20?placeholderIfAbsent=true'
    },
    title: 'Covid-19 LIVE: 2,669 Active Cases in India; 21 People...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Madelyn Gouse',
    status: 'Published' as const
  },
  {
    id: '19984104',
    author: {
      name: 'Jaxson Carder',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4729e1a763636638f627625b7d90508717766a42?placeholderIfAbsent=true'
    },
    title: 'No Paneer at Indian Wedding? Angry Guests Throw Chairs...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Jaxson Carder',
    status: 'Unpublished' as const
  },
  {
    id: '19984105',
    author: {
      name: 'Giana Stanton',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/71dc0fcadd094407fa56495f1f110d8f64fd5392?placeholderIfAbsent=true'
    },
    title: 'Delhi CM Arvind Kejriwal Responds to ED, Calls Summons...',
    publishedOn: '08-Jan-2023 | 08:53am',
    updatedOn: '08-Jan-2023 | 08:53am',
    approvedBy: 'Giana Stanton',
    status: 'Unpublished' as const
  },
  {
    id: '19984106',
    author: {
      name: 'Kaylynn Bator',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a9e840af551bb61477f6df602265e09a2c4ca601?placeholderIfAbsent=true'
    },
    title: 'Disproportionate Assets Case: TN Minister Ponmudy, Wife...',
    publishedOn: '09-Jan-2023 | 08:53am',
    updatedOn: '09-Jan-2023 | 08:53am',
    approvedBy: 'Kaylynn Bator',
    status: 'Published' as const
  },
  {
    id: '19984107',
    author: {
      name: 'Jocelyn Philips',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/71dc0fcadd094407fa56495f1f110d8f64fd5392?placeholderIfAbsent=true'
    },
    title: 'Why Is Kerala at the Forefront Whenever There\'s A Surge...',
    publishedOn: '09-Jan-2023 | 08:53am',
    updatedOn: '09-Jan-2023 | 08:53am',
    approvedBy: 'Jocelyn Philips',
    status: 'Published' as const
  },
  {
    id: '19984108',
    author: {
      name: 'Ruben Curtis',
      image: 'https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/d25cb2a7092e7fcc29a81ad403d2176e3365ac64?placeholderIfAbsent=true'
    },
    title: 'Tata Harrier and Safari Secure 5-Star Safety Rating...',
    publishedOn: '10-Jan-2023 | 08:53am',
    updatedOn: '11-Jan-2023 | 08:53am',
    approvedBy: 'Ruben Curtis',
    status: 'Published' as const
  }
];

