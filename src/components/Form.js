import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const FormWrapper = styled.div`
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 50px 50px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid purple;
  font-size: 16px;
  color: skyblue;
  font-weight: bold;

  &:focus {
    outline: none;
    color: purple;
  }

  &#score {
    width: 100px;
  }
`;

const Button = styled.input`
  background-color: skyblue;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
  color: white;

  &:hover {
    background-color: purple;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  color: purple;
  font-weight: 600;
`;

const Form = ({ getCenter }) => {
  const { register, handleSubmit, errors } = useForm();

  const pattern = /[+-]?([0-9]*[.])?[0-9]+/;

  const onSubmit = (data) => {
    const center = [parseFloat(data.longtitude), parseFloat(data.latitude)];
    getCenter(center);
    const myForm = document.querySelector(".myForm");
    myForm.reset();
  };

  return (
    <FormWrapper>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <StyledForm onSubmit={handleSubmit(onSubmit)} className="myForm">
        {/* register your input into the hook by invoking the "register" function */}
        <Label>Latitude</Label>
        <Input
          name="latitude"
          defaultValue=""
          ref={register({ required: true, pattern: pattern })}
        />
        {/* errors will return when field validation fails  */}
        {errors.latitude && errors.latitude.type === "required" && <p>This field is required</p>}
        {errors.latitude && errors.latitude.type === "pattern" && (
          <p>You need to type float number</p>
        )}
        <Label>Longtitude</Label>
        <Input name="longtitude" ref={register({ required: true, pattern: pattern })} />
        {/* errors will return when field validation fails  */}
        {errors.longtitude && errors.longtitude.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.longtitude && errors.longtitude.type === "pattern" && (
          <p>You need to type float number</p>
        )}
        <Button type="submit" />
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
