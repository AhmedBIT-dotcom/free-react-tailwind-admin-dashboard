export interface MockCustomerUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  avatar: string;
}

export const mockCustomerProfile: MockCustomerUser = {
  id: "CUST-1001",
  firstName: "Ahmed",
  lastName: "Al-Yemeni",
  email: "ahmed.alyemeni@example.com",
  phone: "+967 771 234 567",
  city: "Sana'a",
  avatar: "/images/user/user-03.jpg",
};
