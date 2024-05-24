export default function ForButton(props : {
    value: string;
    onClick: () => void;
})
{
    const {value , onClick} = props;
    return (
        <button
        className="btn btn-secondary"
        onClick={onClick}
        >{value}</button>
    )

}