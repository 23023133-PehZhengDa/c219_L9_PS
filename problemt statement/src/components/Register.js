import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/comfirmed", { state: { name: nameRef.current.value, email: emailRef.current.value } })
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>
      Please register the course you are interested!
      </p>
      <form onSubmit={handleSubmit}>
       <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={nameRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
