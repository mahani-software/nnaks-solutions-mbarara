import React from 'react';
import { Plus } from 'lucide-react';
import { formatCurrency } from '../constants';

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-2xl bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            New stock
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col flex-1 p-4">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">{product.category}</h3>
          <h3 className="text-lg font-bold text-gray-900">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="mt-4 mb-4">
            <div className="flex flex-wrap gap-1">
                {product.specs.slice(0, 2).map((spec, idx) => (
                    <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        {spec}
                    </span>
                ))}
            </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
            <p className="text-xl font-bold text-accent">{formatCurrency(product.price)}</p>
            <button 
                onClick={() => onAddToCart(product)}
                className="inline-flex items-center justify-center p-2 rounded-full bg-primary text-white hover:bg-gray-800 transition-colors shadow-md active:scale-95"
            >
                <Plus size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};