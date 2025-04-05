import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 2rem 2rem 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

const Option = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #d6f0ff;
  }
`;

const Invest = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    capital: "",
    risk: "",
    goal: ""
  });

  const next = () => setStep(prev => prev + 1);
  const prev = () => setStep(prev => prev - 1);

  const handleInput = (e) => {
    setFormData({ ...formData, capital: e.target.value });
  };

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    next();
  };

  const handleSubmit = () => {
    console.log("Submitting:", formData);
    // TODO: send to Flask backend here
  };

  return (
    <Container>
      {step === 0 && (
        <>
          <Question>How much capital are you investing?</Question>
          <Input
            type="number"
            value={formData.capital}
            onChange={handleInput}
            placeholder="e.g. 5000"
          />
          <Button onClick={next}>Next</Button>
        </>
      )}

      {step === 1 && (
        <>
          <Question>What is your risk tolerance?</Question>
          <Option onClick={() => handleSelect("risk", "Low")}>Low</Option>
          <Option onClick={() => handleSelect("risk", "Medium")}>Medium</Option>
          <Option onClick={() => handleSelect("risk", "High")}>High</Option>
          <Button onClick={prev}>Back</Button>
        </>
      )}

      {step === 2 && (
        <>
          <Question>What's your primary goal?</Question>
          <Option onClick={() => handleSelect("goal", "Retirement")}>Retirement</Option>
          <Option onClick={() => handleSelect("goal", "Short-term gains")}>Short-term gains</Option>
          <Option onClick={() => handleSelect("goal", "Long-term growth")}>Long-term growth</Option>
          <Button onClick={prev}>Back</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}

      {step === 3 && (
        <>
          <Question>Thanks! Here's your input:</Question>
          <p><strong>Capital:</strong> ${formData.capital}</p>
          <p><strong>Risk:</strong> {formData.risk}</p>
          <p><strong>Goal:</strong> {formData.goal}</p>
          {/* Later: show portfolio recommendation here */}
        </>
      )}
    </Container>
  );
};

export default Invest;
