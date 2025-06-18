

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isVeg: boolean;
  rating: number;
  prepTime: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'veg', name: 'Veg', icon: '🥬' },
  { id: 'non-veg', name: 'Non Veg', icon: '🍖' },
  { id: 'snacks', name: 'Snacks', icon: '🍿' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'desserts', name: 'Desserts', icon: '🍰' },
];

export const menuData: MenuItem[] = [
  // Veg Items
  {
    id: '1',
    name: 'Chicken Biryani',
    price: 180,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    category: 'non-veg',
    description: 'Aromatic basmati rice cooked with tender chicken pieces and traditional spices',
    isVeg: false,
    rating: 4.5,
    prepTime: '25 mins'
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    price: 140,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    category: 'veg',
    description: 'Creamy tomato-based curry with soft paneer cubes',
    isVeg: true,
    rating: 4.3,
    prepTime: '15 mins'
  },
  {
    id: '3',
    name: 'Masala Dosa',
    price: 80,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'veg',
    description: 'Crispy rice crepe filled with spiced potato mixture',
    isVeg: true,
    rating: 4.4,
    prepTime: '12 mins'
  },
  {
    id: '4',
    name: 'Chicken Curry',
    price: 160,
    image: 'https://as1.ftcdn.net/v2/jpg/01/64/41/20/1000_F_164412070_kZoPXrGd6AXwbLhXEIQulcbeU5xU6hdh.jpg',
    category: 'non-veg',
    description: 'Traditional chicken curry with aromatic spices',
    isVeg: false,
    rating: 4.2,
    prepTime: '20 mins'
  },
  {
    id: '5',
    name: 'Veg Fried Rice',
    price: 120,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    category: 'veg',
    description: 'Stir-fried rice with mixed vegetables and soy sauce',
    isVeg: true,
    rating: 4.1,
    prepTime: '10 mins'
  },
  {
    id: '6',
    name: 'Samosa',
    price: 25,
    image: 'https://images.pexels.com/photos/14477/pexels-photo-14477.jpeg',
    category: 'snacks',
    description: 'Crispy triangular pastry filled with spiced potatoes',
    isVeg: true,
    rating: 4.0,
    prepTime: '5 mins'
  },
  {
    id: '7',
    name: 'Masala Chai',
    price: 15,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    category: 'beverages',
    description: 'Traditional Indian spiced tea with milk',
    isVeg: true,
    rating: 4.6,
    prepTime: '3 mins'
  },
  {
    id: '8',
    name: 'Gulab Jamun',
    price: 40,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    category: 'desserts',
    description: 'Sweet milk dumplings in sugar syrup',
    isVeg: true,
    rating: 4.4,
    prepTime: '2 mins'
  },
  {
    id: '9',
    name: 'Mutton Biryani',
    price: 220,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    category: 'non-veg',
    description: 'Fragrant basmati rice with tender mutton pieces',
    isVeg: false,
    rating: 4.7,
    prepTime: '30 mins'
  },
  {
    id: '10',
    name: 'Dal Tadka',
    price: 90,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'veg',
    description: 'Yellow lentils tempered with cumin and spices',
    isVeg: true,
    rating: 4.2,
    prepTime: '15 mins'
  },
  {
    id: '11',
    name: 'Chicken Tikka',
    price: 180,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    category: 'non-veg',
    description: 'Grilled chicken marinated in yogurt and spices',
    isVeg: false,
    rating: 4.5,
    prepTime: '18 mins'
  },
  {
    id: '12',
    name: 'Pav Bhaji',
    price: 70,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'snacks',
    description: 'Spiced vegetable curry served with buttered bread',
    isVeg: true,
    rating: 4.3,
    prepTime: '12 mins'
  },
  {
    id: '13',
    name: 'Fresh Lime Soda',
    price: 30,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    category: 'beverages',
    description: 'Refreshing lime juice with soda water',
    isVeg: true,
    rating: 4.1,
    prepTime: '2 mins'
  },
  {
    id: '14',
    name: 'Ras Malai',
    price: 60,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    category: 'desserts',
    description: 'Soft cottage cheese dumplings in sweet milk',
    isVeg: true,
    rating: 4.5,
    prepTime: '3 mins'
  },
  {
    id: '15',
    name: 'Fish Curry',
    price: 170,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    category: 'non-veg',
    description: 'Fresh fish cooked in coconut-based curry',
    isVeg: false,
    rating: 4.3,
    prepTime: '22 mins'
  }
];