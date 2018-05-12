declare module "@datacamp/ui-plot" {
  import { Component, Props } from "react";

  export interface IPlotProps extends Props<Plot> {
    sources?: string[];
    currentIndex?: number;
    setIndex: (currentIndex: number) => void;
    exercise: {
      language: string;
      type: string;
    };
    resizePlot: (
      currentIndex: number,
      language: string,
      width?: number,
      height?: number
    ) => void;
    expand: (source: string) => void;
  }

  export default class Plot extends Component<IPlotProps> {}
}
