import React from "react";
import Sceleton from "../../components/Sceleton/Sceleton";
import { DirectionType, SceletonType } from "../../interfaces";

interface Props {
  isLoading: boolean;
}

function withSceleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SceletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSceleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Sceleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSceleton;
