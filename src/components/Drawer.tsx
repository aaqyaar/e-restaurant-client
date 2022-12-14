import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  open: boolean;
  onClose?: () => void;
  position: 'top' | 'right' | 'bottom' | 'left';
  rest?: any;
};

export default function Drawer({
  children,
  position,
  width,
  height,
  className,
  open,
  onClose,
  ...rest
}: Props) {
  console.log(position.slice(0, 1));
  return (
    <div
      className={`fixed ${position}-0 ${
        open ? 'block' : 'hidden'
      } bg-gray-900 border-${position.slice(0, 1)}-2 border-gray-700 ${
        className ? className : ''
      }`}
      style={{
        width,
        height
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
