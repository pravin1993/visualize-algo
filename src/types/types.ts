import { Operations } from "@enums/operation";

export type PositionPair = [number, number]

export type OperationPositions = {
    [Operations.HIGHLIGHT]: PositionPair;
    [Operations.SWAP]: PositionPair;
    [Operations.PIVOT]: number;
  };