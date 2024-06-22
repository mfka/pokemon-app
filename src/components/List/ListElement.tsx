import React from 'react';

export const ListElement: React.FC<{
  children: React.ReactNode;
  key?: React.Key;
}> = ({ children, ...props }) => <li {...props}>{children}</li>;

export default ListElement;
