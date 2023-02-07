import React from "react"
import { useBearStore } from "@/stores"

type Props = {}

export function ChecksGrid({}: Props) {
  const state = useBearStore()
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        style={{
          // height: "100vh",
          // width: "100%",
          // display: "flex",
          backgroundColor: state.backgroundColor,
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <div
          style={{
            display: "grid",
            textAlign: "center",
            // width: "fit-content",
            gridTemplateColumns: `repeat(${state.maxRows}, minmax(0, 1fr))`,
            columnGap: 0,
            rowGap: 0,
            border: `1.5px solid ${state.borderColour}`,
          }}
        >
          {new Array(state.numChecks).fill(0).map(() => (
            <div
              style={{
                border: `1.5px solid ${state.borderColour}`,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 20 21"
                width={state.checksSize}
                height={state.checksSize}
                color={state.iconColour}
              >
                <path
                  d="M 19.41 10.903 C 19.41 9.461 18.612 8.21 17.451 7.617 C 17.592 7.219 17.668 6.79 17.668 6.338 C 17.668 4.321 16.108 2.688 14.186 2.688 C 13.757 2.688 13.347 2.765 12.967 2.917 C 12.404 1.696 11.211 0.861 9.833 0.861 C 8.456 0.861 7.265 1.698 6.698 2.915 C 6.32 2.764 5.909 2.687 5.48 2.687 C 3.555 2.687 1.998 4.321 1.998 6.338 C 1.998 6.789 2.073 7.219 2.214 7.617 C 1.054 8.21 0.256 9.459 0.256 10.903 C 0.256 12.268 0.969 13.458 2.027 14.086 C 2.009 14.241 1.998 14.396 1.998 14.555 C 1.998 16.572 3.555 18.207 5.48 18.207 C 5.909 18.207 6.319 18.128 6.697 17.978 C 7.263 19.196 8.454 20.032 9.832 20.032 C 11.212 20.032 12.403 19.196 12.967 17.978 C 13.346 18.127 13.756 18.205 14.186 18.205 C 16.11 18.205 17.668 16.571 17.668 14.553 C 17.668 14.394 17.657 14.239 17.638 14.085 C 18.694 13.458 19.41 12.268 19.41 10.904 Z M 13.376 7.859 L 9.423 13.793 C 9.291 13.991 9.075 14.098 8.853 14.098 C 8.723 14.098 8.59 14.062 8.473 13.983 L 8.368 13.897 L 6.166 11.693 C 5.899 11.425 5.899 10.992 6.166 10.725 C 6.433 10.458 6.866 10.457 7.133 10.725 L 8.747 12.338 L 12.236 7.098 C 12.445 6.783 12.871 6.7 13.184 6.909 C 13.5 7.119 13.586 7.545 13.376 7.858 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
