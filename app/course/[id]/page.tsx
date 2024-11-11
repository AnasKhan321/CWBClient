import CourseDetails from "@/ClientComponents/CourseDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;  // Resolving the promise
  const { id } = resolvedParams; // Now 'id' will be available
  const parts = id.split('-');
  const lastPart = parts.pop(); // Gets the last part, "1"
  const idPart = parts.join('-'); 

  return (
    <div className="min-h-screen">
      <CourseDetails props={idPart} videoNumber={parseInt(lastPart ? lastPart : "1")} />
    </div>
  );
}
