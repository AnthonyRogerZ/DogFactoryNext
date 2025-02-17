'use client';

import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { prestationTypes } from '@/data/prestationTypes';

interface PhotoUpload {
  before?: File;
  after?: File;
  beforePreview?: string;
  afterPreview?: string;
  prestationType?: string;
}

interface BeforeAfterPhoto {
  id: number;
  before: string;
  after: string;
  description: string;
  prestationType: string;
}

export default function AdminPage() {
  const [photoUpload, setPhotoUpload] = useState<PhotoUpload>({
    prestationType: 'toilettage-complet'
  });
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [beforeAfterPhotos, setBeforeAfterPhotos] = useState<BeforeAfterPhoto[]>([]);
  const [editingPhoto, setEditingPhoto] = useState<BeforeAfterPhoto | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch('/api/admin/photos');
      const data = await response.json();
      if (data.success) {
        setBeforeAfterPhotos(data.photos);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des photos:', error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const preview = URL.createObjectURL(file);
      
      setPhotoUpload(prev => ({
        ...prev,
        [type]: file,
        [`${type}Preview`]: preview
      }));
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir déplacer cette photo dans la corbeille ?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/photos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage({ type: 'success', content: 'Photo déplacée dans la corbeille' });
        setBeforeAfterPhotos(photos => photos.filter(p => p.id !== id));
      } else {
        throw new Error('Erreur lors de la suppression');
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Erreur lors de la suppression de la photo' });
    }
  };

  const handleEdit = (photo: BeforeAfterPhoto) => {
    setEditingPhoto(photo);
    setPhotoUpload({
      prestationType: photo.prestationType,
      beforePreview: photo.before,
      afterPreview: photo.after
    });
    setShowUploadForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setMessage({ type: '', content: '' });

    try {
      const formData = new FormData();
      if (photoUpload.before) formData.append('before', photoUpload.before);
      if (photoUpload.after) formData.append('after', photoUpload.after);
      if (photoUpload.prestationType) {
        formData.append('prestationType', photoUpload.prestationType);
      }

      const url = editingPhoto 
        ? `/api/admin/photos/${editingPhoto.id}` 
        : '/api/admin/photos';
      
      const method = editingPhoto ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (!response.ok) throw new Error('Erreur lors de l\'upload');

      const data = await response.json();
      
      if (editingPhoto) {
        setBeforeAfterPhotos(photos => 
          photos.map(p => p.id === editingPhoto.id ? data.photo : p)
        );
      } else {
        setBeforeAfterPhotos(photos => [data.photo, ...photos]);
      }

      setMessage({
        type: 'success',
        content: editingPhoto ? 'Photo modifiée avec succès !' : 'Photos ajoutées avec succès !'
      });
      
      // Reset form
      setPhotoUpload({
        prestationType: 'toilettage-complet'
      });
      setEditingPhoto(null);
      setShowUploadForm(false);
      
    } catch (error) {
      setMessage({
        type: 'error',
        content: 'Erreur lors de l\'upload des photos.'
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Gestion des Photos Avant/Après
        </h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <Link
            href="/admin/corbeille"
            className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full sm:w-auto"
          >
            <FaTrashAlt className="mr-2 h-4 w-4 text-gray-500" />
            Corbeille
          </Link>
          <button
            onClick={() => {
              setShowUploadForm(!showUploadForm);
              setEditingPhoto(null);
              setPhotoUpload({
                prestationType: 'toilettage-complet'
              });
              if (!showUploadForm) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-brand/90 w-full sm:w-auto"
          >
            <FaPlus className="mr-2 h-4 w-4" />
            Ajouter des photos
          </button>
        </div>
      </div>

      {message.content && (
        <div className={`p-4 rounded-md mb-6 ${
          message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {message.content}
        </div>
      )}

      {showUploadForm && (
        <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            {editingPhoto ? 'Modifier la photo' : 'Ajouter une nouvelle photo'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de Prestation
              </label>
              <select
                value={photoUpload.prestationType}
                onChange={(e) => setPhotoUpload(prev => ({ ...prev, prestationType: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand"
              >
                {prestationTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Avant
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'before')}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-brand/10 file:text-brand hover:file:bg-brand/20"
                  />
                  {(photoUpload.beforePreview || editingPhoto?.before) && (
                    <div className="relative w-full h-40 sm:h-64 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={photoUpload.beforePreview || editingPhoto?.before || ''}
                        alt="Prévisualisation avant"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo Après
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'after')}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-brand/10 file:text-brand hover:file:bg-brand/20"
                  />
                  {(photoUpload.afterPreview || editingPhoto?.after) && (
                    <div className="relative w-full h-40 sm:h-64 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={photoUpload.afterPreview || editingPhoto?.after || ''}
                        alt="Prévisualisation après"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowUploadForm(false);
                  setEditingPhoto(null);
                  setPhotoUpload({
                    prestationType: 'toilettage-complet'
                  });
                }}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className={`w-full sm:w-auto inline-flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand ${
                  isUploading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isUploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {editingPhoto ? 'Modification...' : 'Upload en cours...'}
                  </>
                ) : (
                  editingPhoto ? 'Modifier' : 'Ajouter les photos'
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beforeAfterPhotos.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="relative w-full h-40 sm:h-64 rounded-lg overflow-hidden bg-gray-100">
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
              <div className="relative w-full h-40 sm:h-64 rounded-lg overflow-hidden bg-gray-100">
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
              <p className="text-sm text-gray-500 mb-4">{photo.description}</p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleEdit(photo)}
                  className="inline-flex items-center px-3 py-2 border border-brand rounded-md text-sm font-medium text-brand hover:bg-brand/10"
                >
                  <FaEdit className="w-4 h-4 mr-2" />
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="inline-flex items-center px-3 py-2 border border-red-500 rounded-md text-sm font-medium text-red-500 hover:bg-red-50"
                >
                  <FaTrash className="w-4 h-4 mr-2" />
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
