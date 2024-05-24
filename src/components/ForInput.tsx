export default function ForInput(props : any,){
    const {placeholder , onChange } = props;
    return (
        <input type="text"
        placeholder={placeholder} 
        onChange={onChange}
        className="m-2 p-1 rounded-pill"/>
    )

}