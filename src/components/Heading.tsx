import {HTMLAttributes, forwardRef} from 'react'
import {css} from 'style-engine/css'

export const Heading = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(function Heading() {
  return <h1 className={css({color: 'primary'})}>Heading</h1>
})
