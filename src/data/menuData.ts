export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'veg' | 'non-veg' | 'snacks' | 'beverages';
  description: string;
  rating: number;
  isVeg: boolean;
}

export const menuData: MenuItem[] = [
  // Veg Items
  {
    id: '1',
    name: 'Chicken Biryani',
    price: 280,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'non-veg',
    description: 'Aromatic basmati rice with tender chicken pieces and authentic spices',
    rating: 4.8,
    isVeg: false,
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    price: 220,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'veg',
    description: 'Rich and creamy paneer curry with butter and aromatic spices',
    rating: 4.6,
    isVeg: true,
  },
  {
    id: '3',
    name: 'Mutton Curry',
    price: 320,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'non-veg',
    description: 'Slow-cooked tender mutton in rich gravy with traditional spices',
    rating: 4.7,
    isVeg: false,
  },
  {
    id: '4',
    name: 'Vegetable Fried Rice',
    price: 180,
    image: 'https://images.pexels.com/photos/1765278/pexels-photo-1765278.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'veg',
    description: 'Stir-fried rice with fresh vegetables and aromatic sauces',
    rating: 4.4,
    isVeg: true,
  },
  {
    id: '5',
    name: 'Chicken Tandoori',
    price: 300,
    image: 'https://images.pexels.com/photos/5474640/pexels-photo-5474640.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'non-veg',
    description: 'Marinated chicken grilled to perfection in tandoor',
    rating: 4.9,
    isVeg: false,
  },
  {
    id: '6',
    name: 'Dal Tadka',
    price: 150,
    image: 'https://images.pexels.com/photos/5640025/pexels-photo-5640025.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'veg',
    description: 'Yellow lentils tempered with cumin, garlic, and spices',
    rating: 4.3,
    isVeg: true,
  },
  {
    id: '7',
    name: 'Samosa',
    price: 40,
    image: 'https://images.pexels.com/photos/14737/pexels-photo-14737.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'snacks',
    description: 'Crispy triangular pastry filled with spiced potatoes',
    rating: 4.5,
    isVeg: true,
  },
  {
    id: '8',
    name: 'Pakoda',
    price: 60,
    image: 'https://images.pexels.com/photos/4869523/pexels-photo-4869523.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'snacks',
    description: 'Deep-fried fritters with vegetables and gram flour batter',
    rating: 4.2,
    isVeg: true,
  },
  {
    id: '9',
    name: 'Masala Chai',
    price: 25,
    image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverages',
    description: 'Traditional Indian tea with milk and aromatic spices',
    rating: 4.6,
    isVeg: true,
  },
  {
    id: '10',
    name: 'Fresh Lime Water',
    price: 35,
    image: 'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverages',
    description: 'Refreshing lime water with mint and rock salt',
    rating: 4.4,
    isVeg: true,
  },
  {
    id: '11',
    name: 'Lassi',
    price: 45,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'beverages',
    description: 'Creamy yogurt-based drink with sugar and cardamom',
    rating: 4.5,
    isVeg: true,
  },
  {
    id: '12',
    name: 'Chicken Curry',
    price: 250,
    image: 'https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'non-veg',
    description: 'Tender chicken cooked in rich onion-tomato gravy',
    rating: 4.6,
    isVeg: false,
  },
];

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'veg', name: 'Veg', icon: '🥗' },
  { id: 'non-veg', name: 'Non Veg', icon: '🍗' },
  { id: 'snacks', name: 'Snacks', icon: '🍟' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
];