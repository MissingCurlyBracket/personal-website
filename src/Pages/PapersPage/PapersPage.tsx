import React from 'react';
import PageTitle from '../../Atoms/PageTitle/PageTitle';
import PaperSection from '../../Organisms/PaperSection/PaperSection';
import bachelorThesis from './bachelorThesis.json';

export default function PapersPage() {
  return (
    <div className="papers-page">
      <PageTitle title={'Papers'} />
      <PaperSection
        paperTitle={bachelorThesis.title}
        paperAbstract={bachelorThesis.abstract}
        paperKeywords={bachelorThesis.keyWords}
        paperUrl={bachelorThesis.paperUrl}
      />
    </div>
  );
}
