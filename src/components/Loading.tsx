export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#2D336B]">
      <div className="w-6 h-6 bg-[#2D336B] rounded-full animate-bounce mb-4" />
      <p className="text-lg font-semibold">Loading, please wait...</p>
    </div>
  );
}
