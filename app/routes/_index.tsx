export default function Index() {
  return (
    <>
      <div className="bg-white p-8">
        <section className="m-auto max-w-screen-md flex flex-col gap-8">
          <h1 className="~text-[2rem]/[5rem]">Growth by design</h1>
          <p>Driving products growth by understanding the why behind users, business, and technology</p>
        </section>

        <section className="m-auto max-w-screen-md flex flex-col gap-8">
          <p className="text-sm text-orange-500">Manifesto</p>
          <h2 className="text-4xl">According to Harvard Business Review, 75% of startups don't succeed. I know the frustration of working hard and not seeing results. I also know the solution.</h2>
          <p>Every new concept appears promising. It's easy to simply follow in the footsteps of competitors, trust your instincts, or optimistically hope for the best. However, our judgment is often clouded by subtle biases, leading to less than rational decision-making.
          </p>

          <p>Impactful design goes beyond just aesthetic appeal. It must directly contribute to business performance. My approach incorporates design, psychology, and technology, with a specific focus on driving product growth.</p>

          <ul>
            <li className="flex gap-4 bg-stone-100 p-4 rounded-md">
              Focus on the most critical performance metrics.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
