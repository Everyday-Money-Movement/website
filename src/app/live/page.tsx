import WorldMap from "@/components/map/WorldMap";

export default function LivePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Live on Bitcoin</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <WorldMap />
        </div>
      </div>
    </div>
  );
}
