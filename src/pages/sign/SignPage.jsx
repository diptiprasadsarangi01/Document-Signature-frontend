import PageSidebar from "../../components/sign/PageSidebar";
import DocumentCanvas from "../../components/sign/DocumentCanvas";
import FieldPanel from "../../components/sign/FieldPanel";

export default function SignPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <PageSidebar />
      <DocumentCanvas />
      <FieldPanel />
    </div>
  );
}