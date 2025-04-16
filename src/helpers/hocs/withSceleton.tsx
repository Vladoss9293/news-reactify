import React from "react";
import Sceleton from "../../components/Sceleton/Sceleton";
import { DirectionType, SceletonType } from "../../interfaces";

interface Props {
  isLoading: boolean;
  isError: boolean;
}

function withSceleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SceletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSceleton(props: Props & P) {
    const { isLoading, isError, ...restProps } = props;

    if (isLoading || isError) {
      return <Sceleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSceleton;
