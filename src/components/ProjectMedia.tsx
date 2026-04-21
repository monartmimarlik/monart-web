"use client";

import Image from "next/image";

type ProjectMediaProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

export function ProjectMedia({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
  loading,
}: ProjectMediaProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      loading={loading}
    />
  );
}
