import { createContext, useState } from 'react'

export const LightBoxContext = createContext()

export function LightBoxProvider ({ children }) {
  const [show, setShow] = useState(false)

  const showLightBox = () => {
    setShow(true)
  }

  const hideLightBox = () => {
    setShow(false)
  }

  return (
    <LightBoxContext.Provider value={{
      show,
      showLightBox,
      hideLightBox
    }}
    >
      {children}
    </LightBoxContext.Provider>
  )
}
