'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface BeforeAfterCardProps {
  id?: number;
  before: string;
  after: string;
  description: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function BeforeAfterCard({
  id,
  before,
  after,
  description,
  onEdit,
  onDelete
}: BeforeAfterCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-lg shadow-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="relative aspect-square">
          <Image
            src={before}
            alt="Avant"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2 bg-brand/90 text-white px-2 py-1 rounded text-sm">
            Avant
          </div>
        </div>
        <div className="relative aspect-square">
          <Image
            src={after}
            alt="Après"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2 bg-brand/90 text-white px-2 py-1 rounded text-sm">
            Après
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-opacity duration-200">
          <button
            onClick={onEdit}
            className="p-2 bg-white rounded-full text-brand hover:bg-brand hover:text-white transition-colors"
          >
            <FaEdit className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="p-2 bg-white rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            <FaTrash className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
