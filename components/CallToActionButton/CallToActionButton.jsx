import { ButtonLink } from "components/ButtonLink"

export const CallToActionButton = ({ align = "left", buttonLabel, destination }) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-center"
  }
  return (
    <div className={alignMap[align]}>
      <ButtonLink
        destination={destination}
        label={buttonLabel}
      />
    </div>
  )
}
