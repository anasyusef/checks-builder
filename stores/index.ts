import { create } from "zustand"

interface BearState {
  checksSize: number
  setCheckSize: (num: number) => void
  numChecks: number
  setNumChecks: (num: number) => void
  maxRows: number
  setMaxRows: (num: number) => void
  iconColour: string
  setIconColour: (val: string) => void
  backgroundColor: string
  setBackgroundColor: (val: string) => void
  borderColour: string
  setBorderColour: (val: string) => void
}

const useBearStore = create<BearState>()((set) => ({
  checksSize: 10,
  setCheckSize: (val) => set(() => ({ checksSize: val })),
  numChecks: 80,
  setNumChecks: (val) => set(() => ({ numChecks: val })),
  maxRows: 8,
  setMaxRows: (val) => set(() => ({ maxRows: val })),
  iconColour: "#fff",
  setIconColour: (val) => set(() => ({ iconColour: val })),
  backgroundColor: "#fff",
  setBackgroundColor: (val) => set(() => ({ backgroundColor: val })),
  borderColour: "#fff",
  setBorderColour: (val) => set(() => ({ borderColour: val })),
}))

export { useBearStore }
