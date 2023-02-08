import { v4 as uuidv4 } from "uuid"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export type Check = {
  id: string
  icon: string
  size: number
  color: string
  backgroundColor: string
}

interface BearState {
  checks: Check[]
  setNumChecks: (val: number) => void
  maxRows: number
  selected: string[]
  setSelected: (val: string[]) => void
  setMaxRows: (num: number) => void
  setChecksSize: (num: number) => void
  setChecksColour: (val: string) => void
  backgroundColor: string
  setBackgroundColor: (val: string) => void
  setChecksBackgroundColor: (val: string) => void
  borderColour: string
  setBorderColour: (val: string) => void
}

const useBearStore = create<BearState>()(
  devtools((set, get) => ({
    maxRows: 8,
    selected: [],
    setSelected: (val) => set(() => ({ selected: val })),
    setMaxRows: (val) => set(() => ({ maxRows: val })),
    backgroundColor: "#111111",
    setBackgroundColor: (val) => set(() => ({ backgroundColor: val })),
    borderColour: "#222222",
    setBorderColour: (val) => set(() => ({ borderColour: val })),
    setNumChecks: (val) =>
      set(() => {
        const numChecks = Object.keys(get().checks).length
        const diff = val - numChecks
        if (diff > 0) {
          const newChecks = new Array(diff).fill(0).map(() => ({
            id: uuidv4(),
            color: "#fff",
            backgroundColor: get().backgroundColor,
            icon: "check",
            size: 20,
          }))

          return { checks: [...get().checks, ...newChecks] }
        } else if (diff < 0) {
          return { checks: [...get().checks.slice(0, diff)] }
        }
      }),
    setChecksSize: (val) =>
      set(() => {
        get().checks.forEach((item) => {
          if (get().selected.includes(item.id)) {
            item.size = val
          }
        })
        return { checks: get().checks }
      }),
    setChecksBackgroundColor: (val) =>
      set(() => {
        get().checks.forEach((item) => {
          if (get().selected.includes(item.id)) {
            item.backgroundColor = val
          }
        })
        return { checks: get().checks }
      }),
    setChecksColour: (val) =>
      set(() => {
        get().checks.forEach((item) => {
          if (get().selected.includes(item.id)) {
            item.color = val
          }
        })
        return { checks: get().checks }
      }),
    checks: new Array(80).fill(0).map(() => ({
      id: uuidv4(),
      color: "#1f1f1f",
      backgroundColor: "#111111",
      icon: "check",
      size: 20,
    })),
  }))
)

export function useNumChecks() {
  return useBearStore((state) => state.checks.length)
}
export function useCheckSize() {
  const checks = useBearStore((state) => state.checks)
  const selected = useBearStore((state) => state.selected)
  const selectedChecks = checks.filter((item) => selected.includes(item.id))
  if (selectedChecks.length > 0) {
    const check = selectedChecks[0]
    const areAllChecksEqual = selectedChecks.every(
      (item) => item.size === check.size
    )
    return areAllChecksEqual ? check.size : ""
  }
  return ""
}

export function useChecksColour() {
  const checks = useBearStore((state) => state.checks)
  const selected = useBearStore((state) => state.selected)
  const selectedChecks = checks.filter((item) => selected.includes(item.id))
  if (selectedChecks.length > 0) {
    const check = selectedChecks[0]
    const areAllChecksEqual = selectedChecks.every(
      (item) => item.color === check.color
    )
    return areAllChecksEqual ? check.color : ""
  }
  return ""
}
export function useChecksBackgroundColor() {
  const checks = useBearStore((state) => state.checks)
  const selected = useBearStore((state) => state.selected)
  const selectedChecks = checks.filter((item) => selected.includes(item.id))
  if (selectedChecks.length > 0) {
    const check = selectedChecks[0]
    const areAllChecksEqual = selectedChecks.every(
      (item) => item.backgroundColor === check.backgroundColor
    )
    return areAllChecksEqual ? check.backgroundColor : ""
  }
  return ""
}

export { useBearStore }
