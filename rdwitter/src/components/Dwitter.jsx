
export default function Dwitter(props){
  return(
    <div className="dwitter">
      <div className="image">
        <img src = {props.image} />
      </div>
      <div className="title">
        <div class="profile">
          <span>{props.name}</span>
          <span>@{props.id}</span>
          <span>{props.date}</span>
        </div>
        <div className="content">{props.content}</div>
      </div>      
    </div>
  );
}