// Dummy authentication data for development

export const dummyUsers = {
  consultants: [
    {
      id: 'C001',
      username: 'raj_consultant',
      password: 'password123',
      name: 'Rajesh Kumar',
      email: 'rajesh@curtainry.com',
      phone: '+91 9876543210',
      location: 'Bangalore, Karnataka',
      dateOfBirth: '1985-05-15',
      enrollmentDate: '2023-01-15',
      profilePhoto: '/api/placeholder/100/100',
      experience: '5+ years',
      specialization: 'Residential & Commercial Curtains',
      rating: 4.8,
      completedJobs: 245,
      totalEarnings: 125000
    },
    {
      id: 'C002',
      username: 'priya_consultant',
      password: 'password123',
      name: 'Priya Sharma',
      email: 'priya@curtainry.com',
      phone: '+91 9876543211',
      location: 'Mumbai, Maharashtra',
      dateOfBirth: '1988-09-22',
      enrollmentDate: '2023-03-10',
      profilePhoto: '/api/placeholder/100/100',
      experience: '3+ years',
      specialization: 'Designer Curtains & Blinds',
      rating: 4.9,
      completedJobs: 189,
      totalEarnings: 98000
    }
  ],
  fitters: [
    {
      id: 'F001',
      username: 'kumar_fitter',
      password: 'password123',
      name: 'Kumar Patel',
      email: 'kumar@curtainry.com',
      phone: '+91 9876543212',
      location: 'Delhi, India',
      dateOfBirth: '1982-12-10',
      enrollmentDate: '2023-02-20',
      profilePhoto: '/api/placeholder/100/100',
      experience: '8+ years',
      specialization: 'Installation & Maintenance',
      rating: 4.7,
      completedJobs: 312,
      totalEarnings: 156000
    },
    {
      id: 'F002',
      username: 'ravi_fitter',
      password: 'password123',
      name: 'Ravi Singh',
      email: 'ravi@curtainry.com',
      phone: '+91 9876543213',
      location: 'Chennai, Tamil Nadu',
      dateOfBirth: '1990-07-18',
      enrollmentDate: '2023-04-05',
      profilePhoto: '/api/placeholder/100/100',
      experience: '4+ years',
      specialization: 'Repairs & Washing',
      rating: 4.6,
      completedJobs: 178,
      totalEarnings: 89000
    }
  ]
};

export const dummyOrders = [
  {
    id: 'ORD001',
    customerId: 'CUST001',
    customerName: 'Amit Gupta',
    customerPhone: '+91 9876543220',
    customerAddress: '123 MG Road, Bangalore, Karnataka 560001',
    location: 'Bangalore',
    assignedTo: 'C001',
    orderType: 'customer', // 'admin' or 'customer'
    status: 'pending', // 'pending', 'accepted', 'in_progress', 'completed'
    scheduledDate: '2025-10-08',
    scheduledTime: '10:00 AM',
    priority: 'high',
    catalogDetails: {
      title: 'Royal Silk Collection',
      serialNumber: 'RSC-001',
      composition: '100% Pure Silk',
      manufacturer: 'Indian Textiles Ltd',
      retailer: 'Curtain World',
      color: 'Golden Brown',
      pattern: 'Floral Embroidery',
      pricePerMeter: 2500
    },
    rooms: [] // Will be filled by consultant during visit
  },
  {
    id: 'ORD002',
    customerId: 'CUST002',
    customerName: 'Sunita Mehta',
    customerPhone: '+91 9876543221',
    customerAddress: '456 Brigade Road, Bangalore, Karnataka 560025',
    location: 'Bangalore',
    assignedTo: 'C001',
    orderType: 'admin',
    status: 'accepted',
    scheduledDate: '2025-10-07',
    scheduledTime: '2:00 PM',
    priority: 'medium',
    catalogDetails: {
      title: 'Modern Linen Series',
      serialNumber: 'MLS-045',
      composition: '80% Linen, 20% Cotton',
      manufacturer: 'Fabric Masters',
      retailer: 'Home Decor Plus',
      color: 'Light Grey',
      pattern: 'Solid',
      pricePerMeter: 1800
    },
    rooms: [
      {
        roomType: 'Master Bedroom',
        width: 8,
        height: 7,
        curtainSerial: 'MLS-045',
        quantity: 2
      }
    ]
  },
  {
    id: 'ORD003',
    customerId: 'CUST003',
    customerName: 'Deepak Shah',
    customerPhone: '+91 9876543222',
    customerAddress: '789 Commercial Street, Bangalore, Karnataka 560001',
    location: 'Bangalore',
    assignedTo: 'F001',
    orderType: 'customer',
    status: 'in_progress',
    scheduledDate: '2025-10-06',
    scheduledTime: '11:00 AM',
    priority: 'high',
    catalogDetails: {
      title: 'Premium Velvet Collection',
      serialNumber: 'PVC-020',
      composition: '100% Velvet',
      manufacturer: 'Luxury Fabrics Co',
      retailer: 'Elite Curtains',
      color: 'Deep Purple',
      pattern: 'Textured',
      pricePerMeter: 3200
    },
    rooms: [
      {
        roomType: 'Living Room',
        width: 12,
        height: 9,
        curtainSerial: 'PVC-020',
        quantity: 4
      },
      {
        roomType: 'Dining Room',
        width: 8,
        height: 8,
        curtainSerial: 'PVC-020',
        quantity: 2
      }
    ]
  },
  {
    id: 'ORD004',
    customerId: 'CUST004',
    customerName: 'Lakshmi Reddy',
    customerPhone: '+91 9876543223',
    customerAddress: '321 Koramangala, Bangalore, Karnataka 560034',
    location: 'Bangalore',
    assignedTo: 'F002',
    orderType: 'admin',
    status: 'pending',
    scheduledDate: '2025-10-09',
    scheduledTime: '3:30 PM',
    priority: 'low',
    catalogDetails: {
      title: 'Cotton Comfort Range',
      serialNumber: 'CCR-012',
      composition: '100% Cotton',
      manufacturer: 'Natural Textiles',
      retailer: 'Comfort Home',
      color: 'Cream White',
      pattern: 'Striped',
      pricePerMeter: 1200
    },
    rooms: []
  }
];

export const roomTypes = [
  'Master Bedroom',
  'Guest Bedroom',
  'Kids Bedroom',
  'Living Room',
  'Dining Room',
  'Kitchen',
  'Office Room',
  'Study Room',
  'Balcony',
  'Terrace',
  'Prayer Room',
  'Store Room'
];

// Helper functions
export const authenticateUser = (username, password, role) => {
  const users = role === 'consultant' ? dummyUsers.consultants : dummyUsers.fitters;
  return users.find(user => user.username === username && user.password === password);
};

export const getOrdersForUser = (userId, role) => {
  return dummyOrders.filter(order => order.assignedTo === userId);
};

export const updateOrderStatus = (orderId, newStatus) => {
  const order = dummyOrders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
  }
  return order;
};

export const addRoomToOrder = (orderId, roomData) => {
  const order = dummyOrders.find(o => o.id === orderId);
  if (order) {
    order.rooms.push(roomData);
  }
  return order;
};