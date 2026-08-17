'use client'

export default function ScrollBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep vibrant purple ambient atmosphere on rich lilac background */}
      <div 
        className="absolute inset-0 opacity-[0.40]"
        style={{
          backgroundImage: `
            radial-gradient(at 15% 15%, rgba(130, 37, 212, 0.20) 0px, transparent 60%),
            radial-gradient(at 85% 85%, rgba(110, 28, 174, 0.25) 0px, transparent 60%),
            radial-gradient(at 50% 50%, rgba(176, 124, 240, 0.15) 0px, transparent 70%)
          `
        }}
      />

      {/* Soft violet radiant ambient points */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[#8225D4]/12 rounded-full blur-[150px] will-change-transform" />
      <div className="absolute top-[45%] right-[5%] w-[700px] h-[700px] bg-[#9B4DEB]/10 rounded-full blur-[180px] will-change-transform" />
      <div className="absolute bottom-[15%] left-[10%] w-[650px] h-[650px] bg-[#6E1CAE]/10 rounded-full blur-[160px] will-change-transform" />
    </div>
  )
}
