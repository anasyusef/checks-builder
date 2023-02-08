import React from "react"
import {
  useBearStore,
  useCheckSize,
  useChecksBackgroundColor,
  useChecksColour,
  useNumChecks,
} from "@/stores"
import { HexAlphaColorPicker } from "react-colorful"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

type Props = {}

export default function Sidebar({}: Props) {
  const state = useBearStore()
  const numChecks = useNumChecks()
  const checksSize = useCheckSize()
  const color = useChecksColour()
  const checksBackgroundColor = useChecksBackgroundColor()
  return (
    // <div className="sticky flex h-screen w-64 flex-col justify-between overflow-y-hidden border-r">
    <div className="sticky flex h-screen w-64 flex-col justify-between overflow-y-hidden border-r">
      <div className="container mt-28 flex w-full flex-col space-y-3">
        <div className="flex space-x-6">
          <div className="w-1/2">
            <Label htmlFor="icon-size">Icon size</Label>
            <Input
              className="h-9"
              id="icon-size"
              value={checksSize}
              onChange={(e) => state.setChecksSize(+e.target.value)}
              type="number"
              min={0}
              placeholder="Size"
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="num-checks">Icons number</Label>
            <Input
              className="h-9"
              value={numChecks}
              onChange={(e) => state.setNumChecks(+e.target.value)}
              type="number"
              min={0}
              placeholder="Size"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label htmlFor="max-icons-row">Max icons</Label>
            <Input
              className="h-9"
              value={state.maxRows}
              onChange={(e) => state.setMaxRows(+e.target.value)}
              type="number"
              min={0}
              placeholder="Size"
            />
          </div>
          <div className="w-1/2">
            <Label htmlFor="icon-color">Icon colour</Label>
            <Popover>
              <PopoverTrigger>
                <Button disabled size="sm" variant="outline">
                  <div
                    style={{ backgroundColor: color || "#000" }}
                    className={`h-4 w-16 rounded-sm`}
                  ></div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <HexAlphaColorPicker
                  color={color}
                  onChange={(val) => state.setChecksColour(val)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Label htmlFor="">Bg. colour</Label>
            <Popover >
              <PopoverTrigger >
                <Button disabled size="sm" variant="outline">
                  <div
                    style={{ backgroundColor: state.backgroundColor || "#000" }}
                    className={`h-4 w-16 rounded-sm`}
                  ></div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <HexAlphaColorPicker
                  color={state.backgroundColor}
                  onChange={(val) => state.setBackgroundColor(val)}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-1/2">
            <Label htmlFor="border-colour">Border colour</Label>
            <Popover>
              <PopoverTrigger >
                <Button disabled size="sm" variant="outline">
                  <div
                    style={{ backgroundColor: state.borderColour || "#000" }}
                    className={`h-4 w-16 rounded-sm`}
                  ></div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full">
                <HexAlphaColorPicker
                  color={state.borderColour}
                  onChange={(val) => state.setBorderColour(val)}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="w-1/2">
          <Label htmlFor="border-colour">Icon bg. colour</Label>
          <Popover>
            <PopoverTrigger >
              <Button disabled size="sm" variant="outline">
                <div
                  style={{ backgroundColor: checksBackgroundColor || "#000" }}
                  className={`h-4 w-16 rounded-sm`}
                ></div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <HexAlphaColorPicker
                color={checksBackgroundColor}
                onChange={(val) => state.setChecksBackgroundColor(val)}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
