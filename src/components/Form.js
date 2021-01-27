import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Geosuggest from "react-geosuggest";

const FormWrapper = styled.div`
  width: 30vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  -webkit-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 12px 43px -21px rgba(0, 0, 0, 0.75);
  h3 {
    display: block;
    width: 50%;
    text-align: center;
    margin-bottom: 18px;
    font-size: 17px;
    color: #0c1d3a;
    font-weight: 600;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
    h3 {
      width: 80%;
      font-size: 14px;
    }
  }
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 50px 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    padding: 10px 20px;
  }
`;

const Input = styled.input`
  width: 70%;
  max-width: 300px;
  margin-bottom: 20px;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #4d78a5;
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

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const Button = styled.input`
  background-color: darkslateblue;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
  color: white;
  width: 40%;

  &:hover {
    background-color: purple;
  }

  @media screen and (max-width: 400px) {
    font-size: 14px;
    padding: 7px;
  }
`;

const Label = styled.label`
  display: block;
  width: 70%;
  margin-bottom: 10px;
  font-size: 15px;
  color: grey;
  font-weight: 500;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const StyledGeosuggest = styled(Geosuggest)`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    height: 28px;
    width: 100%;
    color: grey;
    font-weight: 700;
    border: 2px solid #4d78a5;
    border-radius: 10px;
    text-align: center;
    outline: none;
    padding: 5px 10px;
  }

  ul {
    list-style-type: none;
    width: 80%;

    li {
      margin: 7px 0;
      color: grey;
      font-size: 14px;

      b {
        color: darkslateblue;
      }
    }
  }

  @media screen and (max-width: 400px) {
    padding-bottom: 20px;
  }
`;

const Form = ({ getCenter }) => {
  const { register, handleSubmit, errors } = useForm();

  const pattern = /[+-]?([0-9]*[.])?[0-9]+/;

  const onSubmit = (data) => {
    const center = [parseFloat(data.latitude), parseFloat(data.longtitude)];
    getCenter(center);
    const myForm = document.querySelector(".myForm");
    myForm.reset();
  };

  const onSuggestSelect = (suggest) => {
    if (suggest) {
      const center = [suggest.location.lat, suggest.location.lng];
      getCenter(center);
    }
  };

  return (
    <FormWrapper>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <StyledForm onSubmit={handleSubmit(onSubmit)} className="myForm">
        <h3>You can type latitude and longtitude manually</h3>
        {/* register your input into the hook by invoking the "register" function */}
        <Label>latitude</Label>
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
        <Label>longtitude</Label>
        <Input name="longtitude" ref={register({ required: true, pattern: pattern })} />
        {/* errors will return when field validation fails  */}
        {errors.longtitude && errors.longtitude.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.longtitude && errors.longtitude.type === "pattern" && (
          <p>You need to type float number</p>
        )}
        <Button type="submit" value="send" />
      </StyledForm>
      <h3>or you can type and click city here:</h3>
      <StyledGeosuggest onSuggestSelect={onSuggestSelect} />
    </FormWrapper>
  );
};

export default Form;
