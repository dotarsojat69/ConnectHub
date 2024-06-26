import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (name: string, comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, comment);
    setName('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-300 rounded-lg shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nama
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          Komentar
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Kirim
      </button>
    </form>
  );
};

export default CommentForm;
