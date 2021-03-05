import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
const CardShow = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="pr-2">{details.name?.title}</span>
            <span className="pr-2">{details.name?.first}</span>
            <span className="pr-2">{details.name?.last}</span>
          </h1>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default CardShow;
