"use client";

import { useId, useMemo } from "react";
import { GridProps } from "./Grid.interfaces";

export const Grid = ({ pattern, size }: GridProps) => {
    const p = useMemo(
        () =>
            pattern ?? [
                [
                    Math.floor(Math.random() * 4) + 7,
                    Math.floor(Math.random() * 6) + 1,
                ],
                [
                    Math.floor(Math.random() * 4) + 7,
                    Math.floor(Math.random() * 6) + 1,
                ],
                [
                    Math.floor(Math.random() * 4) + 7,
                    Math.floor(Math.random() * 6) + 1,
                ],
                [
                    Math.floor(Math.random() * 4) + 7,
                    Math.floor(Math.random() * 6) + 1,
                ],
                [
                    Math.floor(Math.random() * 4) + 7,
                    Math.floor(Math.random() * 6) + 1,
                ],
            ],
        [pattern],
    );

    return (
        <div className="absolute left-1/2 top-0 h-full w-full -ml-20 -mt-2 [mask-image:linear-gradient(white,transparent)] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 dark:from-zinc-900/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 dark:stroke-white/10 fill-black/10 dark:fill-white/10"
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {squares.map(([x, y]: any, index: number) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}-${index}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
