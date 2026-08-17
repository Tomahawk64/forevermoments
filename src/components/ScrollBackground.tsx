'use client'

export default function ScrollBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft ethereal ambient atmosphere on clean white background */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(at 15% 15%, rgba(168, 85, 247, 0.12) 0px, transparent 60%),
            radial-gradient(at 85% 85%, rgba(192, 132, 252, 0.15) 0px, transparent 60%),
            radial-gradient(at 50% 50%, rgba(243, 236, 248, 0.4) 0px, transparent 70%)
          `
        }}
      />

      {/* Gentle radiant ambient points */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[#A855F7]/6 rounded-full blur-[150px] will-change-transform" />
      <div className="absolute top-[45%] right-[5%] w-[700px] h-[700px] bg-[#B07CF0]/7 rounded-full blur-[180px] will-change-transform" />
      <div className="absolute bottom-[15%] left-[10%] w-[650px] h-[650px] bg-[#C084FC]/6 rounded-full blur-[160px] will-change-transform" />
    </div>
  )
}
