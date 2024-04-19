"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

type TDropdown = {
  icon: ReactNode
  list: ReactNode
  style: string
}

export const Dropdown = ({ icon, list, style }: TDropdown) => {
  const [isActive, setIsActive] = useState(false)
  const iconRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const onWindowClick = (event: MouseEvent | TouchEvent) => {
    const clickWasOutside = !dropdownRef?.current?.contains(
      event.target as Node
    )

    if (clickWasOutside) {
      setIsActive(false)
    }
  }

  const onIconClick = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    setIsActive(!isActive)
    event.stopPropagation()
  }

  useEffect(() => {
    if (isActive) {
      window.addEventListener("click", onWindowClick)
    }

    return () => {
      window.removeEventListener("click", onWindowClick)
    }
  }, [isActive])

  return (
    <>
      <div onClick={onIconClick} ref={iconRef}>
        {icon}
      </div>
      {isActive ? (
        <div className={style} ref={dropdownRef}>
          {list}
        </div>
      ) : null}
    </>
  )
}
