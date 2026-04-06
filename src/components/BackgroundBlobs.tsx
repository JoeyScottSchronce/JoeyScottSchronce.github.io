const blobBase =
  'absolute rounded-[50%_40%_60%_60%] bg-[radial-gradient(circle,#3377ff_10%,#49cbff_20%)] blur-[100px] max-[768px]:h-20 max-[768px]:w-20 max-[768px]:blur-[75px] max-[537px]:h-12 max-[537px]:w-12 max-[537px]:blur-[50px] h-28 w-28'

export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden">
      <div className={`${blobBase} top-1/2 left-[10%]`} />
      <div className={`${blobBase} top-[90%] left-[60%]`} />
      <div className={`${blobBase} top-[30%] left-[75%]`} />
    </div>
  )
}
