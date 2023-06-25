import { getAlignImage } from "utils/layout"
import Image from "next/image"
import Link from "next/link"

export const ImageCustom = ({
  src,
  width,
  height,
  alt,
  align,
  href
}) => {
  console.log("HREF: ", href)

  return (
    <>
      {href ? (
        <Link href={href} target="_blank">
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={`mb-8 ${getAlignImage(align)}`}
          />
        </Link>
      ) : (
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={getAlignImage(align)}
        />
      )}
    </>
  )
}