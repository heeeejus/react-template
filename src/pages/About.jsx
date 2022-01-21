import queryString from "query-string"; //name=mark를 가져오기 위해

export default function About(props) {
  const searchParams = props.location.search;
  console.log(searchParams);
  // const obj = new URLSearchParams(searchParams);
  // console.log(obj.get("name"));
  const query = queryString.parse(searchParams);
  console.log(query);
  return (
    <div>
      <h2>About</h2>
      {query.name && <p> name 는 {query.name} 입니다. </p>}
    </div>
  );
}
