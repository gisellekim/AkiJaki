import { BarAnnouncement } from "../BarAnnouncement"
import { BarNavigation } from "../BarNavigation"

export const Header = () => {
  return (
    <div className="h-auto w-full">
      <BarAnnouncement text="Free shipping on orders over £45" />
      <BarNavigation />
    </div>
  )
}
