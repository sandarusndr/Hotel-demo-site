const testimonials = [
  {
    name: "Amina",
    text: "Clean rooms, friendly staff, and a great location.",
  },
  {
    name: "Daniel",
    text: "The check-in was fast and the room was super comfortable.",
  },
  {
    name: "Sofia",
    text: "Loved the breakfast and the quiet atmosphere.",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          What our guests say
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border bg-white p-5">
              <p className="text-sm text-gray-700">“{t.text}”</p>
              <div className="mt-3 text-sm font-semibold">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
