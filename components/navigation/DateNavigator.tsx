import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../buttons/Button';


interface DateNavigatorProps {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function DateNavigator({ label, onPrevious, onNext }: DateNavigatorProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-md) var(--space-xl)',
      }}
    >
      <Button variant="icon" onClick={onPrevious} icon={<ChevronLeft size={20} />} />
      <span style={{ fontSize: 17, fontWeight: 600 }}>{label}</span>
      <Button variant="icon" onClick={onNext} icon={<ChevronRight size={20} />} />
    </div>
  );
}
