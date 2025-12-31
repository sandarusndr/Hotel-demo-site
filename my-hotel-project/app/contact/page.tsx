export const metadata = {
  title: "Contact | My Hotel",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-sm text-gray-600">
        Send us a message and we’ll get back to you.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <form className="rounded-lg border bg-white p-5">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Name</span>
              <input className="h-10 text-gray-500 rounded border px-3" required />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Email</span>
              <input
                type="email"
                className="h-10 rounded border px-3 text-gray-500"
                required
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Message</span>
              <textarea className="min-h-28 rounded text-gray-500 border p-3" required />
            </label>

            <button
              type="submit"
              className="h-10 rounded bg-black px-4 text-sm font-semibold text-white"
            >
              Send
            </button>

            <p className="text-xs text-gray-500">
              This is a static form (no backend wired yet).
            </p>
          </div>
        </form>

        <div className="overflow-hidden rounded-lg border bg-white">
          <div className="border-b p-4">
            <div className="text-sm text-gray-500">Find us</div>
            <p className="mt-1 text-sm text-gray-600">
              GrandStay, Akuressa, Sri Lanka
            </p>
          </div>
          <iframe
            title="Google Maps"
            className="h-72 sm:h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=6.1124216,80.4877242&z=17&output=embed"
          />
        </div>
      </div>
    </div>
  );
}
