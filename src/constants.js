export const SHOP_NAME = "NNAKS SOLUTION ENGINEERING CO LTD";
export const LOCATION = "High Street, Mbarara City, Uganda";
import categoriesImage1 from "./images/categoriesImage1.webp";
import categoriesImage2 from "./images/categoriesImage2.webp";
import categoriesImage3 from "./images/categoriesImage3.webp";
import categoriesImage4 from "./images/categoriesImage4.webp";
import categoriesImage5 from "./images/categoriesImage5.webp";
import categoriesImage6 from "./images/categoriesImage6.webp";
import categoriesImage7 from "./images/categoriesImage7.webp";
import categoriesImage8 from "./images/categoriesImage8.webp";

export const Category = {
  SEUSLIGHTS: 'Seus Lights',
  ACCENTLIGHTS: 'Accent lights',
  AMBIENTLIGHTS: 'Ambient lights',
};

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'New seus lights',
    category: Category.SEUSLIGHTS,
    price: 850000,
    description: 'Beautiful design for sitting executive rooms',
    image: categoriesImage1,
    specs: ['Unique', "seus"],
    featured: true
  },
  {
    id: 'p2',
    name: 'Modern seus lights',
    category: Category.SEUSLIGHTS,
    price: 480000,
    description: 'The ultimate decoration in 2025',
    image: categoriesImage2,
    specs: ['Full set', 'Excellent'],
    featured: true
  },
  {
    id: 'p3',
    name: 'Modern accent lights',
    category: Category.ACCENTLIGHTS,
    price: 240000,
    description: 'New 2025 version of accent lights.',
    image: categoriesImage3,
    specs: ['Accent modern'],
    featured: true
  },
  {
    id: 'p4',
    name: 'Ring accent',
    category: Category.ACCENTLIGHTS,
    price: 4200000,
    description: 'Strikingly bright and beautiful.',
    image: categoriesImage4,
    specs: ['Ring'],
    featured: true
  },
  {
    id: 'p5',
    name: 'Glory ambient lights',
    category: Category.AMBIENTLIGHTS,
    price: 650000,
    description: 'Original ambient executive new model',
    image: categoriesImage5,
    specs: ['LED lights']
  },
  {
    id: 'p6',
    name: 'Glowing ambient lights',
    category: Category.AMBIENTLIGHTS,
    price: 1200000,
    description: 'Industry leading and modern.',
    image: categoriesImage6,
    specs: ['Glorious']
  },
  {
    id: 'p7',
    name: 'Bedroom ambinet lights',
    category: Category.AMBIENTLIGHTS,
    price: 150000,
    description: 'Ultra-high capacity.',
    image: categoriesImage7,
    specs: ['Made in US']
  },
  {
    id: 'p8',
    name: 'Y-ambient lights',
    category: Category.AMBIENTLIGHTS,
    price: 350000,
    description: 'Beautiful',
    image: categoriesImage8,
    specs: ['modern']
  }
];

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0
  }).format(amount);
};