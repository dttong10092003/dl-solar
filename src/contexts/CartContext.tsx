import React, { createContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartState, CartItem, Product } from '../types';

interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: number) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export { CartContext };

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateTotals = (items: CartItem[]): { totalItems: number; totalAmount: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);
  return { totalItems, totalAmount };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.productId === product.id);
      
      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        // Sản phẩm đã có trong giỏ, cập nhật số lượng
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            const newQuantity = item.quantity + quantity;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.currentPrice,
            };
          }
          return item;
        });
      } else {
        // Thêm sản phẩm mới vào giỏ
        const newItem: CartItem = {
          id: Date.now(), // Temporary ID
          productId: product.id,
          name: product.name,
          image: product.image,
          currentPrice: product.currentPrice,
          originalPrice: product.originalPrice,
          quantity,
          totalPrice: quantity * product.currentPrice,
        };
        newItems = [...state.items, newItem];
      }
      
      const { totalItems, totalAmount } = calculateTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalAmount,
      };
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.productId !== action.payload.productId);
      const { totalItems, totalAmount } = calculateTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalAmount,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ
        const newItems = state.items.filter(item => item.productId !== productId);
        const { totalItems, totalAmount } = calculateTotals(newItems);
        
        return {
          items: newItems,
          totalItems,
          totalAmount,
        };
      }
      
      const newItems = state.items.map(item => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity,
            totalPrice: quantity * item.currentPrice,
          };
        }
        return item;
      });
      
      const { totalItems, totalAmount } = calculateTotals(newItems);
      
      return {
        items: newItems,
        totalItems,
        totalAmount,
      };
    }
    
    case 'CLEAR_CART':
      return initialCartState;
    
    case 'LOAD_CART':
      return action.payload;
    
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemQuantity = (productId: number) => {
    const item = cart.items.find(item => item.productId === productId);
    return item ? item.quantity : 0;
  };

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
