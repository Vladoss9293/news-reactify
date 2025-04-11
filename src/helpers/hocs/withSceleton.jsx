import Sceleton from "../../components/Sceleton/Sceleton";

function withSceleton(Component, type, count) {
    return function WithSceleton(props) {
        const {isLoading, ...restProps} = props;

        if (isLoading) {
            return <Sceleton type={type} count={count} />
        }

        return <Component {...restProps} />    
    }
}

export default withSceleton;