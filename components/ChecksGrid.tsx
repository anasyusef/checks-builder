import React, { useEffect, useRef, useState } from "react"
import { useBearStore } from "@/stores"
import { SelectableGroup } from "react-selectable-fast"

import Check from "./Check"

type Props = {}

export function ChecksGrid({}: Props) {
  const state = useBearStore()
  const [isSSR, setIsSSR] = useState(true)
  const ref = useRef()

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  const handleSelection = (items: any[]) => {
    const ids = items.map((item) => item.props.id)

    state.setSelected(ids)
  }

  return (
    <div
      ref={ref}
      className="flex h-screen items-center justify-center border-blue-600"
    >
      <div
        style={{
          backgroundColor: state.backgroundColor,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        {/* {ref.current && ( */}
          <SelectableGroup
            // duringSelection={(e) => console.log(e)}
            onSelectionFinish={handleSelection}
            // onSelectionClear={(e) => console.log(e)}

            // scrollContainer={ref.current}
            selectboxClassName="border border-blue-500 bg-blue-500 bg-opacity-10"
            enableDeselect
            deselectOnEsc
          >
            <div
              style={{
                display: "grid",
                textAlign: "center",
                gridTemplateColumns: `repeat(${state.maxRows}, minmax(0, 1fr))`,
                columnGap: 0,
                rowGap: 0,
                border: `1.5px solid ${state.borderColour}`,
              }}
            >
              {state.checks.map(({ id, ...rest }) => (
                <Check key={id} id={id} {...rest} />
              ))}
            </div>
          </SelectableGroup>
        {/* )} */}
      </div>
    </div>
  )
}
