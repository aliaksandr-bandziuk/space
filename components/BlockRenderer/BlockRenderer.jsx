import { CallToActionButton } from "components/CallToActionButton";
import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Embed } from "components/Embed";
import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Map } from "components/Map";
import { MediaText } from "components/MediaText";
import { Paragraph } from "components/Paragraph";
import { Quote } from "components/Quote";
import { Slider } from "components/Slider";
// import Image from "next/image";
import { ImageCustom } from "components/ImageCustom"
import { theme } from "theme";

export const BlockRenderer = ({blocks }) => {
  return blocks.map(block => {
    switch (block.name) {
      case "acf/map": {
        return (
          <Map
            key={block.id}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Map>
        )
      }
      case "acf/ctabutton": {
        return (
          <CallToActionButton
            key={block.id}
            buttonLabel={block.attributes.data.label}
            destination={block.attributes.data.destination || "/"}
            align={block.attributes.data.align}
          />
        )
      }
      case "core/embed": {
        return (
          <Embed
            key={block.id}
            originalContent={block.originalContent}
          />
        )
      }
      case "core/quote": {
        return (
          <Quote
            key={block.id}
            dynamicContent={block.dynamicContent}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Quote>
        )
      }
      case "core/media-text": {
        return (
          <MediaText
            key={block.id}
            height={block.attributes.height}
            mediaLink={block.attributes.mediaLink}
            verticalAlignment={block.attributes.verticalAlignment}
            mediaPosition={block.attributes.mediaPosition}
            innerBlocks={block.innerBlocks}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </MediaText>
        )
      }
      case "core/gallery": {
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            cropImages={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        )
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] || 
              block.attributes.style?.color?.text
            }
          />
        )
      }
      case "core/post-title":
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            textColor={
              theme[block.attributes.textColor] || 
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          />
        );
      }
      case 'core/cover': {
        console.log("BLOCK: ", block);
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            overlayColor={block.attributes.overlayColor}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case "core/columns": {
        console.log("COLUMNS:", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            textColor={
              theme[block.attributes.textColor] || 
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            verticalAlignment={block.attributes.verticalAlignment}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case "core/column": {
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] || 
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      case "core/group": 
      case "core/block": {
        return (
          <BlockRenderer
            key={block.id}
            blocks={block.innerBlocks}
          />
        )
      }
      case "core/image": {
        return (
          <ImageCustom
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
            align={block.attributes.align}
            href={block.attributes?.href}
          />
        )
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  })
}