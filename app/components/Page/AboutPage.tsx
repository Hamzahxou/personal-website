import Magnet from "../Magnet/Magnet";

export default function AboutPage() {
  return (
    <section className="w-full h-screen overflow-hidden bg-foreground relative px-10">
      <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col gap-4 md:gap-10 items-center justify-center select-none text-6xl md:text-8xl z-0">
        <span className="uppercase font-[800] text-nowrap text-transparent [-webkit-text-stroke:1px_#313131] leading-8">
          About Me
        </span>
        <span className="uppercase font-[800] text-nowrap text-transparent [-webkit-text-stroke:1px_#313131] leading-8">
          About Me
        </span>
        <span className="uppercase font-[800] text-nowrap text-transparent [-webkit-text-stroke:1px_#313131] leading-8">
          About Me
        </span>
      </div>
      <div className="z-20 flex h-full w-full justify-center items-center relative">
        <div>
          <h1 className="text-secondary text-4xl md:text-5xl uppercase font-bold mb-4 text-nowrap">
            I{"'"}m{" "}
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <span className="bg-secondary text-foreground py-0 px-2 rounded-md">
                Hamzah
              </span>
            </Magnet>
          </h1>
          <p className="md:w-96 text-secondary text-center text-sm md:text-md italic">
            a young man who loves coding and everything about technology
          </p>
        </div>
      </div>
    </section>
  );
}
