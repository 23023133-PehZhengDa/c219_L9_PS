import { useParams } from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
const {catId, sessionId} = useParams()


  const { name, desc, staff } = getSession({ catId, sessionId });

  return (
    <>
    <h1>Module</h1>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{staff.name}</h4>
      <span>
        {staff.title}
      </span>
    </>
  );
}
