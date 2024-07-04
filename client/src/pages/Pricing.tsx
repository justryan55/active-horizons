import styled from "styled-components";

const PricingContainer = styled.div`
  height: 100vh;
  padding: 40px 20px;
  background-color: #efefef;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`;

const PricingTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PricingContent = styled.p`
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 20px;
`;

export default function Pricing() {
  return (
    <PricingContainer>
      <PricingTitle>Pricing</PricingTitle>
      <PricingContent>
        At Active Horizons Health Group, we are committed to providing
        transparent and fair pricing for all our services. We adhere to the NDIS
        pricing arrangements and price limits to ensure that our clients receive
        the highest standard of care without unexpected costs. We are pleased to
        advise that our services are 100% funded by the NDIS, meaning there are
        no out-of-pocket costs for NDIS participants.
      </PricingContent>
      <PricingContent>
        We bill for the time directly spent with the client and for the indirect
        time spent on tasks such as note taking, creating materials, writing
        reports, and communicating with key workers, teachers, and others
        involved.
      </PricingContent>
      <PricingContent>
        Please note that we only accept NDIS participants who are plan-managed
        or self-managed.
      </PricingContent>
    </PricingContainer>
  );
}

//   https://umbo.com.au/indirect-time-guide-for-clients/
