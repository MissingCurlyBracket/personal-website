import React from 'react';
import PageTitle from '../../Atoms/PageTitle/PageTitle';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageTitle title={'Contact'} />
      <p>
        For any inquiries, please contact me at{' '}
        <a href="mailto:negru.lucian01@gmail.com">negru.lucian01@gmail.com</a>
      </p>
    </div>
  );
}
