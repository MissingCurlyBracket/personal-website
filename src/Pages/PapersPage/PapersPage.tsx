import PageTitle from "../../Atoms/PageTitle/PageTitle";
import PaperSection from "../../Organisms/PaperSection/PaperSection";

export default function PapersPage() {
    return (
        <div className="papers-page">
            <PageTitle title={"Papers"}/>
            <PaperSection
                paperTitle={"How Much Data is Enough? Learning Curves\n" +
                    "for Machine Learning"}
                paperUrl={"./CSE3000_Lucian_Negru_Final.pdf"}/>
        </div>
    );
}