import { useState } from 'react';

export const usePin = (length = 8) => {
  const [pin, setPin] = useState('');

  const handlePress = (val: string) => {
    if (val === 'delete') {
      setPin((prev) => prev.slice(0, -1));
    } else if (pin.length < length) {
      setPin((prev) => prev + val);
    }
  };

  const resetPin = () => setPin('');

  return { pin, handlePress, resetPin };
};
