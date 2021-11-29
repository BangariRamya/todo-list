const List = ({props}) => {
   return (
      <ul>
          {props.map((item) => <li key={item}>{item}</li>)}
      </ul>
   ); 
}
export default List;