import Signup from "./Signup";
import { Container } from "react-bootstrap";

function Index() {
  return (
    <Container
    className ="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style ={{ maxWidth: "400px" }}>
        <Signup/>
      </div>
    </Container>
  )
}

export default Index;

