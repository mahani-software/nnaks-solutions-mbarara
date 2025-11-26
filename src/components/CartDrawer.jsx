import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { formatCurrency } from '../constants';

export const CartDrawer = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />

      <div className={`fixed inset-y-0 right-0 max-w-full flex transition-transform duration-500 sm:duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            
            {/* Header */}
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                    <X size={24} />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-20">
                    <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
                    <p className="mt-2 text-gray-500">Your cart is empty.</p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {items.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>{item.name}</h3>
                                <p className="ml-4">{formatCurrency(item.price * item.quantity)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button 
                                    onClick={() => onUpdateQuantity(item.id, -1)}
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >-</button>
                                <span className="px-2 text-gray-900 font-medium">{item.quantity}</span>
                                <button 
                                    onClick={() => onUpdateQuantity(item.id, 1)}
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >+</button>
                              </div>

                              <button
                                type="button"
                                onClick={() => onRemove(item.id)}
                                className="font-medium text-red-600 hover:text-red-500 flex items-center"
                              >
                                <Trash2 size={16} className="mr-1" /> Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>{formatCurrency(total)}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <button className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-gray-800">
                    Checkout (WhatsApp)
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                  <p>
                    or{' '}
                    <button onClick={onClose} className="text-accent font-medium hover:text-blue-500">
                      Continue Shopping<span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};