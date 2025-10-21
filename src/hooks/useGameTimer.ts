import { useState, useEffect, useRef } from 'react';

export const useGameTimer = (isActive: boolean) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setElapsedSeconds(0);
      startTimeRef.current = null;
      return;
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now();
    }

    const interval = setInterval(() => {
      if (startTimeRef.current) {
        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setElapsedSeconds(elapsed);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = () => {
    const minutes = Math.floor(elapsedSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours} h ${remainingMinutes} min`;
    }
    return `${minutes} min`;
  };

  return { elapsedSeconds, formatTime };
};
