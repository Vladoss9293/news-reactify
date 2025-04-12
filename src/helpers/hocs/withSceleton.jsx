import Sceleton from "../../components/Sceleton/Sceleton";

function withSceleton(Component, type, count, direction) {
    return function WithSceleton(props) {
        const {isLoading, ...restProps} = props;

        if (isLoading) {
            return <Sceleton type={type} count={count} direction={direction} />
        }

        return <Component {...restProps} />    
    }
}

export default withSceleton;