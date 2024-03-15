import {test, expect} from "vitest";
import { allocation } from "./main.js";

test("input of 100 should return [50,30,20]", () => {
    expect(allocation(100)).toStrictEqual([50,30,20]);
  });

  test("input of 20 should return [10,6,4]", () => {
    expect(allocation(20)).toStrictEqual([10,6,4]);
  });

  test("input of 5 should return [5,0,0]", () => {
    expect(allocation(5)).toStrictEqual([5,0,0]);
  });

  test("input of 194 should return [97,58,39]", () => {
    expect(allocation(194)).toStrictEqual([97,58,39]);
  });

  test("input of 150 should return [75, 45, 30]", () => {
    expect(allocation(150)).toStrictEqual([75, 45, 30]);
  });

  test("input of 11 should return [10, 1, 0]", () => {
    expect(allocation(11)).toStrictEqual([10, 1, 0]);
  });