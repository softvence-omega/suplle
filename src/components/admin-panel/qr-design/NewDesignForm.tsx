import React, { useState } from 'react';

import type { Design } from './data/type';
import { CircleDollarSign, Upload } from 'lucide-react';

interface NewDesignFormProps {
  initialData?: Partial<Design>;
  onSubmit: (design: Partial<Design>) => void;
  onCancel?: () => void;
  buttonLabel?: string;
}

export const NewDesignForm: React.FC<NewDesignFormProps> = ({ 
  initialData = {}, 
  onSubmit, 
  onCancel,
  buttonLabel = "Save New Design"
}) => {
  const [formData, setFormData] = useState<Partial<Design>>({
    name: '',
    description: '',
    price: undefined,
    imageUrl: '',
    category: '',
    ...initialData
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || '' : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Reset form if no cancel button (embedded form)
    if (!onCancel) {
      setFormData({
        name: '',
        description: '',
        price: undefined,
        imageUrl: '',
        category: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
    
        <div>
          <label htmlFor="name" className="block text-base font-normal text-[#333333] dark:text-white mb-4 ">
            Design Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
          placeholder='Enter Design Name'
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-[#161616] h-[45px] placeholder-[#33333363] dark:placeholder-[#FFFFFF63]"
          />
       
        
      
      </div> 
      <div>
          <label htmlFor="name" className="block text-base font-normal text-[#333333] dark:text-white mb-4 ">
         Categories
          </label>
          <input
         id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          placeholder='Enter Qr Code categories Design Name'
        
            required
            className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-[#161616] h-[45px] placeholder-[#33333363] dark:placeholder-[#FFFFFF63]"
          />
       
        
      
      </div>
      
      <div>
        <label htmlFor="description" className="block text-base font-normal text-[#333333] dark:text-white mb-4">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder='Sort Description..........'
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white resize-none dark:bg-[#161616] placeholder-[#33333363]  dark:placeholder-[#FFFFFF63]"
        />
      </div>
      
  
        <div className='relative'>
          <label htmlFor="price" className="block text-base font-normal text-[#333333] dark:text-white mb-4">
            Price (USD)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder='USD'
            value={formData.price || ''}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white h-[45px] dark:bg-[#161616] placeholder-[#33333363]  dark:placeholder-[#FFFFFF63]"
          />
          <div className="relative">
                <CircleDollarSign className='absolute right-6 -top-5 -translate-y-1/2 text-gray-400 w-4 h-4'/>
          </div>
        </div>
        
        <div className='relative'>
          <label htmlFor="imageUrl" className="block text-base font-normal text-[#333333] dark:text-white mb-4">
            Image 
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            
            value={formData.imageUrl}
            onChange={handleChange}
     
            placeholder="Paste image or upload"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white h-[45px] dark:bg-[#161616] placeholder-[#33333363]  dark:placeholder-[#FFFFFF63]"
        
          />
          <div className="relative">
              <Upload className='absolute right-6 -top-5 -translate-y-1/2 text-gray-400 w-4 h-4 ' />
          </div>
        </div>
      
      
      <div className="flex  space-x-4 pt-2 ">
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-md border-transparent md:text-base text-sm "
        >
          {buttonLabel}
        </button>

          {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-white border border-primary text-primary rounded-md md:text-base text-sm dark:bg-[#161616] "
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};