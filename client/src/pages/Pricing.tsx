import styled from "styled-components";
import { FaHandHoldingUsd, FaClock } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const PricingContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
`;

const PricingTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PricingContent = styled.p`
  display: flex;
  white-space: break-spaces;
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 20px;
  width: 80%;
`;

const DivBackground = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  padding: 40px 0px;

  width: 70%;
  z-index: 1000;
  transition: transform 0.3s, box-shadow 0.3s;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4caf50;
`;

const IconWrapperMargin = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  margin-top: 35px;
  color: #4caf50;
`;

const CTAButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  margin-top: 50px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e7d32;
  }
`;

export default function Pricing() {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PricingContainer>
      <PricingTitle>Pricing</PricingTitle>

      <DivBackground isDesktop={isDesktop}>
        <div>
          <IconWrapper>
            <FaHandHoldingUsd />
          </IconWrapper>

          <PricingContent>
            At Active Horizons Health Group, we are committed to providing
            transparent and fair pricing for all our services. We adhere to the
            NDIS pricing arrangements and price limits to ensure that our
            clients receive the highest standard of care without unexpected
            costs. We are pleased to advise that our services are 100% funded by
            the NDIS, meaning there are no out-of-pocket costs for NDIS
            participants.
          </PricingContent>
        </div>
        <div>
          <IconWrapperMargin>
            <FaClock />
          </IconWrapperMargin>

          <PricingContent>
            We bill for the time directly spent with the client and for the
            indirect time spent on tasks such as note taking, creating
            materials, writing reports, and communicating with key workers, and
            others involved.
          </PricingContent>
          <IconWrapper>
            <IoDocumentTextSharp />
          </IconWrapper>

          <PricingContent>
            Please note that we only accept NDIS participants who are
            plan-managed or self-managed.
          </PricingContent>
        </div>
      </DivBackground>
      <CTAButton>START TODAY</CTAButton>
    </PricingContainer>
  );
}

//   https://umbo.com.au/indirect-time-guide-for-clients/

// import styled from "styled-components";
// import { FaHandHoldingUsd, FaClock } from "react-icons/fa";
// import { IoDocumentTextSharp } from "react-icons/io5";

// const PricingContainer = styled.div`
//   height: 100vh;
//   padding: 40px 20px;
//   background-color: #efefef;
//   text-align: center;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   padding-top: 100px;
// `;

// const PricingTitle = styled.div`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// const PricingContent = styled.p`
//   max-width: 800px;
//   font-size: 1.2rem;
//   line-height: 1.6;
//   margin: 0 auto 20px;
// `;

// const DivBackground = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: rgb(255, 255, 255, 1);
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
//   padding: 40px 0px;

//   width: 60%;
//   z-index: 1000;
//   border-radius: 20px;
//   transition: transform 0.3s, box-shadow 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
//   }
// `;

// const IconWrapper = styled.div`
//   font-size: 2rem;
//   margin-bottom: 10px;
//   color: #4caf50;
// `;

// const CTAButton = styled.button`
//   font-size: 1.2rem;
//   font-weight: 600;
//   padding: 1rem 2.5rem;
//   color: #fff;
//   background-color: #4caf50;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #2e7d32;
//   }
// `;

// export default function Pricing() {
//   return (
//     <PricingContainer>
//       <DivBackground>
//         <IconWrapper>
//           <FaHandHoldingUsd />
//         </IconWrapper>
//         <PricingTitle>Pricing</PricingTitle>
//         <PricingContent>
//           At Active Horizons Health Group, we are committed to providing
//           transparent and fair pricing for all our services. We adhere to the
//           NDIS pricing arrangements and price limits to ensure that our clients
//           receive the highest standard of care without unexpected costs. We are
//           pleased to advise that our services are 100% funded by the NDIS,
//           meaning there are no out-of-pocket costs for NDIS participants.
//         </PricingContent>
//         <IconWrapper>
//           <FaClock />
//         </IconWrapper>
//         <PricingContent>
//           We bill for the time directly spent with the client and for the
//           indirect time spent on tasks such as note taking, creating materials,
//           writing reports, and communicating with key workers, and others
//           involved.
//         </PricingContent>
//         <IconWrapper>
//           <IoDocumentTextSharp />
//         </IconWrapper>
//         <PricingContent>
//           Please note that we only accept NDIS participants who are plan-managed
//           or self-managed.
//         </PricingContent>
//         <CTAButton>Start Your Journey</CTAButton>
//       </DivBackground>
//     </PricingContainer>
//   );
// }
