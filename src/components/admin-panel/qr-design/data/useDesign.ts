import { useState, useEffect } from 'react';

import { mockDesigns } from './mockDesigns';
import type { Design } from './type';

type DesignStatus = 'available' | 'comingSoon' | 'unavailable';

export const useDesigns = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  
  useEffect(() => {
    // In a real app, this would fetch from an API
    setDesigns(mockDesigns);
  }, []);
  
  const availableDesigns = designs.filter(design => design.status === 'available');
  const comingSoonDesigns = designs.filter(design => design.status === 'comingSoon');
  const unavailableDesigns = designs.filter(design => design.status === 'unavailable');
  
  const addDesign = (newDesign: Partial<Design>) => {
    const design: Design = {
      id: `design-${Date.now()}`,
      name: newDesign.name || 'Untitled Design',
      description: newDesign.description || '',
      imageUrl: newDesign.imageUrl || '',
      status: newDesign.status || 'available',
      category: newDesign.category|| '' ,
      price: newDesign.price
    };
    
    setDesigns(prev => [...prev, design]);
  };
  
  const updateDesign = (id: string, updatedData: Partial<Design>) => {
    setDesigns(prev => 
      prev.map(design => 
        design.id === id ? { ...design, ...updatedData } : design
      )
    );
  };
  
  const changeDesignStatus = (id: string, newStatus: DesignStatus) => {
    updateDesign(id, { status: newStatus });
  };
  
  const removeDesign = (id: string) => {
    setDesigns(prev => prev.filter(design => design.id !== id));
  };
  
  return {
    designs,
    availableDesigns,
    comingSoonDesigns,
    unavailableDesigns,
    addDesign,
    updateDesign,
    changeDesignStatus,
    removeDesign
  };
};