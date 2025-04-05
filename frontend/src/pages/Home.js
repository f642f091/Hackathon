import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 80px;
  padding: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #007acc;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Welcome to SmartVest</Heading>
      <Paragraph>
        Whether you're just getting started with investing or you're looking to optimize your portfolio, 
        <Highlight> SmartVest</Highlight> helps you make better, data-backed financial decisions.
      </Paragraph>
      <Paragraph>
        <Highlight>Before you invest, make sure you’re financially stable:</Highlight>  
        one of the golden rules of personal finance is having an <Highlight>emergency fund</Highlight> — 
        ideally covering at least <Highlight>3–6 months of living expenses</Highlight>. 
        This ensures you're protected in case of unexpected events like job loss or medical emergencies.
      </Paragraph>
      <Paragraph>
        Once your essentials are covered, it's time to start investing with purpose. Based on your 
        <Highlight>risk tolerance</Highlight>, <Highlight>capital</Highlight>, and <Highlight>goals</Highlight>, 
        SmartVest will help you build a diversified portfolio tailored just for you.
      </Paragraph>
      <Paragraph>
        Click on the <Highlight>Invest</Highlight> tab to get started with your personalized portfolio plan.
      </Paragraph>
    </Container>
  );
};

export default Home;
