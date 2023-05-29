export const C1 = (props) => {
    return (
        <>
            {props.title ? 'true' : 'false'}
            <button type="button" onClick={() => props.setter(!props.title)}>Click</button>
        </>
    )
}