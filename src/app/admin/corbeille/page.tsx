'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaTrashRestore, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';

interface BeforeAfterPhoto {
  id: number;
  before: string;
  after: string;
  description: string;
  prestationType: string;
  deletedAt: string;
}

export default function TrashPage() {
  const [deletedPhotos, setDeletedPhotos] = useState<BeforeAfterPhoto[]>([]);
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
        method: 'POST',
      });

      if (response.ok) {
        setMessage({ type: 'success', content: 'Photo restaurée avec succès' });
        fetchDeletedPhotos();
      } else {
        throw new Error('Erreur lors de la restauration');
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur lors de la restauration de la photo' });
    }
  };

  const handlePermanentDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer définitivement cette photo ? Cette action est irréversible.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/photos/trash/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage({ type: 'success', content: 'Photo supprimée définitivement' });
        fetchDeletedPhotos();
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur lors de la suppression de la photo' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Corbeille
        </h1>
        <Link
          href="/admin"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Retour à la galerie
        </Link>
      </div>

      {message.content && (
        <div className={`p-4 rounded-md mb-6 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.content}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {deletedPhotos.map((photo) => (
          <motion.div
            key={photo.id}
            className="bg-white rounded-lg shadow overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={photo.before}
                  alt="Avant"
                  fill
                  className="object-cover opacity-75"
                  unoptimized
                />
                <div className="absolute top-2 left-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-medium shadow-sm">
                  Avant
                </div>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={photo.after}
                  alt="Après"
                  fill
                  className="object-cover opacity-75"
                  unoptimized
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-brand/90 backdrop-blur-sm text-white rounded-lg text-xs font-medium shadow-sm">
                  Après
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-2">{photo.description}</p>
              <p className="text-xs text-gray-400 mb-4">
                Supprimé le {new Date(photo.deletedAt).toLocaleDateString()}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleRestore(photo.id)}
                  className="p-2 text-green-500 hover:bg-green-50 rounded-full"
                  title="Restaurer"
                >
                  <FaTrashRestore className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handlePermanentDelete(photo.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  title="Supprimer définitivement"
                >
                  <FaTrashAlt className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {deletedPhotos.length === 0 && (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">La corbeille est vide</p>
          </div>
        )}
      </div>
    </div>
  );
}
