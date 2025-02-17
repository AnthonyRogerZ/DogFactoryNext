'use client';

import { useState, useEffect } from 'react';
import { FaTrashAlt, FaUndo } from 'react-icons/fa';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

interface DeletedPhoto {
  id: number;
  before: string;
  after: string;
  description: string;
  prestationType: string;
  deletedAt: string;
}

export default function TrashPage() {
  const [deletedPhotos, setDeletedPhotos] = useState<DeletedPhoto[]>([]);
  const [message, setMessage] = useState({ type: '', content: '' });

  useEffect(() => {
    fetchDeletedPhotos();
  }, []);

  const fetchDeletedPhotos = async () => {
    try {
      const response = await fetch('/api/admin/photos/trash');
      const data = await response.json();
      if (data.success) {
        setDeletedPhotos(data.photos);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des photos supprimées:', error);
    }
  };

  const handleRestore = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/photos/trash/${id}/restore`, {
        method: 'POST'
      });

      if (response.ok) {
        setMessage({ type: 'success', content: 'Photo restaurée avec succès' });
        setDeletedPhotos(photos => photos.filter(p => p.id !== id));
      } else {
        throw new Error('Erreur lors de la restauration');
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur lors de la restauration de la photo' });
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer définitivement cette photo ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/photos/trash/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setMessage({ type: 'success', content: 'Photo supprimée définitivement' });
        setDeletedPhotos(photos => photos.filter(p => p.id !== id));
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur lors de la suppression de la photo' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Corbeille
      </h1>

      {message.content && (
        <div className={`p-4 rounded-md mb-6 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.content}
        </div>
      )}

      {deletedPhotos.length === 0 ? (
        <div className="text-center py-12">
          <FaTrashAlt className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">La corbeille est vide</h3>
          <p className="mt-1 text-sm text-gray-500">Les photos supprimées apparaîtront ici.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deletedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 p-4">
                <div className="relative w-full h-40 md:h-64 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={photo.before}
                    alt="Avant"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium">
                    Avant
                  </div>
                </div>
                <div className="relative w-full h-40 md:h-64 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={photo.after}
                    alt="Après"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-brand/90 backdrop-blur-sm text-white rounded text-xs font-medium">
                    Après
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-gray-500">
                    {photo.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    Supprimée {formatDistanceToNow(new Date(photo.deletedAt), { addSuffix: true, locale: fr })}
                  </p>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleRestore(photo.id)}
                    className="inline-flex items-center px-3 py-2 border border-brand rounded-md text-sm font-medium text-brand hover:bg-brand/10"
                  >
                    <FaUndo className="w-4 h-4 mr-2" />
                    Restaurer
                  </button>
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md text-sm font-medium text-red-500 hover:bg-red-50"
                  >
                    <FaTrashAlt className="w-4 h-4 mr-2" />
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
