import ScrollFloat from "../ScrollFloat/ScrollFloat";

export default function ProjectPage() {
  return (
    <section className="w-full h-screen overflow-hidden bg-background p-5 md:p-10 ">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="text-center font-bold text-foreground"
      >
        PROJECT HERE
      </ScrollFloat>
    </section>
  );
}
