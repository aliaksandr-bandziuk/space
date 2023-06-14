import { Column } from "components/Column";
import { Columns } from "components/Columns";
import { Cover } from "components/Cover";
import { Gallery } from "components/Gallery";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import Image from "next/image";
import { theme } from "theme";

export const BlockRenderer = ({blocks }) => {
  return blocks.map(block => {
    switch (block.name) {
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
          />
        );
      }
      case 'core/cover': {
        console.log("BLOCK: ", block);
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}>
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
          <Image
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
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