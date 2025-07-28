import React from 'react';
import PaperTitle from '../../Atoms/PaperTitle/PaperTitle';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import PaperAbstract from '../../Atoms/PaperAbstract/PaperAbstract';
import PaperKeywords from '../../Atoms/PaperKeywords/PaperKeywords';

interface PaperSectionProps {
  paperTitle: string;
  paperAbstract: string;
  paperKeywords: string[];
  paperUrl: string;
}

export default function PaperSection({
  paperTitle,
  paperAbstract,
  paperKeywords,
  paperUrl,
}: Readonly<PaperSectionProps>) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
  return (
    <div className={'paper-section'}>
      <PaperTitle paperTitle={paperTitle} />
      <PaperAbstract abstract={paperAbstract} />
      <PaperKeywords keywords={paperKeywords} />
      <Worker
        workerUrl={
          'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'
        }
      >
        <div
          style={{
            height: '100%',
          }}
        >
          <Viewer fileUrl={paperUrl} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
}
