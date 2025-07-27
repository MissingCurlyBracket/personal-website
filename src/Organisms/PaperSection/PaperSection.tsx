import PaperTitle from "../../Molecules/PaperTitle/PaperTitle";
import {Viewer, Worker} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


interface PaperSectionProps {
    paperTitle: string;
    // paperAbstract: string;
    paperUrl: string;
}

export default function PaperSection({
                                         paperTitle,
                                         paperUrl
                                     }: Readonly<PaperSectionProps>) {

    return (
        <div className={"paper-section"}>
            <PaperTitle paperTitle={paperTitle}/>
            {/*<PaperAbstract abstract={paperAbstract}/>*/}
            <Worker
                workerUrl={"https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"}>
                <Viewer fileUrl={paperUrl}
                        plugins={[defaultLayoutPlugin()]}/>
            </Worker>
        </div>
    )
}