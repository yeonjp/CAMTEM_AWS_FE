import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Reservation from "../Components/Reservation";
import "../css/CenterContent.css";

function CenterContent() {
  return (
    <Container fluid className="bgContainer mt-5 p-3" >
      <Form>
        <h5 className="subTitle text-start ps-3">
          여행지 검색하기
        </h5>
        <Reservation />
      </Form>
    </Container>
  );
}
export default CenterContent;