type TBarAnnouncement = {
  text: string
}

export const BarAnnouncement = ({ text }: TBarAnnouncement) => {
  return (
    <div className="bg-primary w-full p-1">
      <p className="text-white text-center">{text}</p>
    </div>
  )
}
