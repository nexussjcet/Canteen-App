import React, { useState } from 'react';
import { menuData as initialData, categories } from '../data/menuData';
import { Pencil, Trash, Plus, X, Star } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
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
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    } else {
      setMenuItems([...menuItems, newItem]);
    }

    resetForm();
  };

  const resetForm = () => {
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
    setEditingItem(null);
    setIsFormOpen(false);
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setForm({ ...item });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-red-800">Admin Dashboard</h1>
          <div className="flex gap-2">
            <button
              onClick={() => {
                resetForm();
                setIsFormOpen(true);
              }}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded"
            >
              <Plus size={18} /> Add Item
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center border-b p-4">
                <h2 className="text-xl font-bold">
                  {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
                </h2>
                <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Item Name"
                      className="w-full border px-4 py-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                    <input
                      name="price"
                      type="number"
                      value={form.price}
                      onChange={handleChange}
                      placeholder="Price"
                      className="w-full border px-4 py-2 rounded"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                      name="image"
                      value={form.image}
                      onChange={handleChange}
                      placeholder="Image URL"
                      className="w-full border px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded"
                    >
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Time</label>
                    <input
                      name="prepTime"
                      value={form.prepTime}
                      onChange={handleChange}
                      placeholder="e.g. 10 mins"
                      className="w-full border px-4 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <input
                      name="rating"
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={form.rating}
                      onChange={handleChange}
                      placeholder="Rating (0-5)"
                      className="w-full border px-4 py-2 rounded"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isVeg"
                      name="isVeg"
                      checked={form.isVeg}
                      onChange={handleChange}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="isVeg" className="ml-2 block text-sm text-gray-700">
                      Vegetarian
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Item description"
                    className="w-full border px-4 py-2 rounded"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-700 text-white rounded-md text-sm font-medium hover:bg-red-800"
                  >
                    {editingItem ? 'Update Item' : 'Add Item'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Menu Items List */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {menuItems.length > 0 ? (
              menuItems.map(item => (
                <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                        title="Edit"
                      >
                        <Pencil size={16} className="text-blue-500" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                        title="Delete"
                      >
                        <Trash size={16} className="text-red-500" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="font-bold text-red-700">₹{item.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {item.rating}
                      </div>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">{item.prepTime}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {categories.find(c => c.id === item.category)?.name || item.category}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No menu items found</h3>
                <p className="text-gray-600 mb-4">Add your first menu item to get started</p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded"
                >
                  Add New Item
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;