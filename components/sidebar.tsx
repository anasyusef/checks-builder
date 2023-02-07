import React from "react"
import { useBearStore } from "@/stores"
import { HexAlphaColorPicker } from "react-colorful"

import { Input } from "./ui/input"

type Props = {}

export default function Sidebar({}: Props) {
  const state = useBearStore()
  return (
    // <div className="sticky flex h-screen w-64 flex-col justify-between overflow-y-hidden border-r">
    <div className="sticky flex h-screen w-64 flex-col justify-between overflow-y-hidden border-r">
      <div className="container mt-20 flex w-full flex-col space-y-2">
        <Input
          value={state.checksSize}
          onChange={(e) => state.setCheckSize(+e.target.value)}
          type="number"
          placeholder="Size"
        />
        <Input
          value={state.numChecks}
          onChange={(e) => state.setNumChecks(+e.target.value)}
          type="number"
          placeholder="Size"
        />
        <Input
          value={state.maxRows}
          onChange={(e) => state.setMaxRows(+e.target.value)}
          type="number"
          placeholder="Size"
        />
        <HexAlphaColorPicker
          color={state.iconColour}
          onChange={(val) => state.setIconColour(val)}
        />
        <HexAlphaColorPicker
          color={state.backgroundColor}
          onChange={(val) => state.setBackgroundColor(val)}
        />
        <HexAlphaColorPicker
          color={state.borderColour}
          onChange={(val) => state.setBorderColour(val)}
        />
      </div>
    </div>
  )
}
