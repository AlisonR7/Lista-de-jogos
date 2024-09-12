import { useState } from 'react';

const useGameForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (callback: Function) => {
    callback(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useGameForm;
