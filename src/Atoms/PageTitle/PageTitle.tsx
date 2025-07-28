import React, { ReactElement } from 'react';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({
  title,
}: PageTitleProps): Readonly<ReactElement> {
  return <h2>{title}</h2>;
}
