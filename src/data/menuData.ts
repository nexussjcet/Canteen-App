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
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1664717698774-84f62382613b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'veg',
    description: 'Stir-fried rice with fresh vegetables and aromatic sauces',
    rating: 4.4,
    isVeg: true,
  },
  {
    id: '5',
    name: 'Chicken Tandoori',
    price: 300,
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'non-veg',
    description: 'Marinated chicken grilled to perfection in tandoor',
    rating: 4.9,
    isVeg: false,
  },
  {
    id: '6',
    name: 'Dal Curry',
    price: 150,
    image: 'https://images.unsplash.com/photo-1741026079032-7cb660e44bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'veg',
    description: 'Yellow lentils tempered with cumin, garlic, and spices',
    rating: 4.3,
    isVeg: true,
  },
  {
    id: '7',
    name: 'Samosa',
    price: 40,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'snacks',
    description: 'Crispy triangular pastry filled with spiced potatoes',
    rating: 4.5,
    isVeg: true,
  },
  {
    id: '8',
    name: 'Pakoda',
    price: 60,
    image: 'https://images.unsplash.com/photo-1631788012420-a0d6a3cfcdfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFrb2RhfGVufDB8fDB8fHww',
    category: 'snacks',
    description: 'Deep-fried fritters with vegetables and gram flour batter',
    rating: 4.2,
    isVeg: true,
  },
  {
    id: '9',
    name: 'Chai',
    price: 25,
    image: 'https://images.unsplash.com/photo-1625033405953-f20401c7d848?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWxhJTIwY2hhaXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'beverages',
    description: 'Traditional Indian tea with milk and aromatic spices',
    rating: 4.6,
    isVeg: true,
  },
  {
    id: '10',
    name: 'Fresh Lime Water',
    price: 35,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlc2glMjBsaW1lfGVufDB8fDB8fHww',
    category: 'beverages',
    description: 'Refreshing lime water with mint and rock salt',
    rating: 4.4,
    isVeg: true,
  },
  {
    id: '11',
    name: 'soda lime',
    price: 45,
    image: 'https://plus.unsplash.com/premium_photo-1676300547289-c87ea9c84569?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFzc2klMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'beverages',
    description: 'Creamy yogurt-based drink with sugar and cardamom',
    rating: 4.5,
    isVeg: true,
  },
  {
    id: '12',
    name: 'Chicken Curry',
    price: 250,
    image: 'https://media.istockphoto.com/id/1280147779/photo/chicken-curry-iftari.webp?a=1&b=1&s=612x612&w=0&k=20&c=P8wwOPDckLTrpuhxhyXNjxXj9PNB1TD3oLMVfzSqAuk=',
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