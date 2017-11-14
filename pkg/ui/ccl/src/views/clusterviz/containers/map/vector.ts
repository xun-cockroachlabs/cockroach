// Copyright 2017 The Cockroach Authors.
//
// Licensed under the Cockroach Community Licence (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://github.com/cockroachdb/cockroach/blob/master/LICENSE

export function distance(v1: [number, number], v2: [number, number]) {
    return length(sub(v1, v2));
}

export function length(v: [number, number]) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

export function add(v1: [number, number], v2: [number, number]): [number, number] {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function sub(v1: [number, number], v2: [number, number]): [number, number] {
    return [v1[0] - v2[0], v1[1] - v2[1]];
}

export function mult(v1: [number, number], scalar: number): [number, number] {
    return [v1[0] * scalar, v1[1] * scalar];
}

export function normalize(v: [number, number]): [number, number] {
    const l = length(v);
    if (l === 0) {
        return [0, 0];
    }
    return [v[0] / l, v[1] / l];
}

export function invert(v: [number, number]): [number, number] {
    return [v[1], -v[0]];
}

export function reverse(v: [number, number]): [number, number] {
    return [-v[0], -v[1]];
}

export function dotprod(v1: [number, number], v2: [number, number]) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}
