import Image from "next/image";

// Fills its (relative, sized) parent with a blog cover. Posts without a cover
// image (e.g. a Sanity post where none was uploaded yet) get a branded
// placeholder instead of an empty <Image src="">, which renders a broken image.
export default function BlogCover({
  src,
  alt,
  className = "object-cover",
  sizes,
  priority,
}: {
  src?: string | null;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#f0fdf4]" role="img" aria-label={alt}>
        <Image src="/brand/logo-color.png" alt="" width={164} height={61} className="opacity-40 w-32 h-auto" />
      </div>
    );
  }
  return <Image src={src} alt={alt} fill className={className} sizes={sizes} priority={priority} />;
}
