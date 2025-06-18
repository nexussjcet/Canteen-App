import React, { useState } from 'react';
import { menuData as initialData, categories } from '../data/menuData';
import { Pencil, Trash } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  category: string;
  rating: number;
  prepTime: string;
}

const AdminDashboard = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialData);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const [form, setForm] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: 0,
    image: '',
    isVeg: true,
    category: 'all',
    rating: 4.0,
    prepTime: '10 mins',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
    const checked = (e.target as HTMLInputElement).checked;

    setForm({
      ...form,
      [name]: isCheckbox ? checked : type === 'number' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: MenuItem = {
      id: editingItem ? editingItem.id : Date.now().toString(),
      ...form,
    };

    if (editingItem) {
      setMenuItems(menuItems.map(item => item.id === editingItem.id ? newItem : item));
      setEditingItem(null);
    } else {
      setMenuItems([...menuItems, newItem]);
    }

    setForm({
      name: '',
      description: '',
      price: 0,
      image: '',
      isVeg: true,
      category: 'all',
      rating: 4.0,
      prepTime: '10 mins',
    });
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setForm({ ...item });
  };

  const handleDelete = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-800">Admin Dashboard</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow mb-8"
      >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Item Name" className="border px-4 py-2 rounded" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border px-4 py-2 rounded" required />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border px-4 py-2 rounded" />
        <select name="category" value={form.category} onChange={handleChange} className="border px-4 py-2 rounded">
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border px-4 py-2 rounded col-span-1 md:col-span-2" />
        <input name="rating" type="number" value={form.rating} step="0.1" onChange={handleChange} placeholder="Rating (e.g. 4.5)" className="border px-4 py-2 rounded" />
        <input name="prepTime" value={form.prepTime} onChange={handleChange} placeholder="Prep Time (e.g. 10 mins)" className="border px-4 py-2 rounded" />
        <label className="flex items-center space-x-2 col-span-1">
          <input type="checkbox" name="isVeg" checked={form.isVeg} onChange={handleChange} />
          <span>Veg</span>
        </label>
        <button type="submit" className="bg-red-700 text-white py-2 rounded hover:bg-red-800 transition">
          {editingItem ? 'Update Item' : 'Add Item'}
        </button>
      </form>

      <div className="grid gap-4">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white shadow p-4 rounded-xl flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-sm text-gray-700 mt-1">
                ₹{item.price} • {item.isVeg ? 'Veg' : 'Non-Veg'} • {item.category}
              </p>
              <p className="text-sm text-gray-600">⭐ {item.rating} • 🕒 {item.prepTime}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                <Pencil size={18} />
              </button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
