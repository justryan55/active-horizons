import styled from "styled-components";
import PolicyViewer from "../components/PolicyViewer";

const DivContainer = styled.div`
  min-height: 80vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 40px 0px;

  width: 40%;
  z-index: 1000;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: black;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  margin-bottom: 20px;

  img {
    margin-left: 20px;
  }

  img:hover {
    cursor: pointer;
  }
`;

export default function Policies() {
  return (
    <DivContainer>
      <DivBackground>
        <Title>Policies</Title>
        <FlexDiv>
          <GridDiv>
            <PolicyViewer
              title="Privacy Policy"
              description={`
                <h3>Effective Date: July 2024</h3>
                <h3>1. Introduction</h3>
                <p>Welcome to [Company Name] ("we", "our", "us"). We are committed to safeguarding the privacy of our clients ("you", "your"). This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in compliance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
                <h3>2. Information Collection</h3>
                <h4>2.1 Types of Data Collected</h4>
                <p>We may collect and process the following types of personal information:</p>
                <p>Personal Identification Information: Name, date of birth, contact details (phone number, email address, postal address).</p>
                <p>Health Information: Medical history, treatment plans, session notes, physiotherapy assessments, and other relevant health data.</p>
                <p>Technical Data: IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our services.</p>
                <p>Usage Data: Information about how you use our website, products, and services.</p>
                <h4>2.2 Methods of Collection</h4>
                <p>We collect information directly from you when:</p>
                <ul>
                  <li>You register on our website.</li>
                  <li>You complete forms on our website.</li>
                  <li>You communicate with us via phone, email, or other electronic means.</li>
                  <li>You participate in telehealth sessions.</li>
                </ul>
                <h3>3. Use of Information</h3>
                <p>We use your personal information for the following purposes:</p>
                <ul>
                  <li>Provision of Services: To deliver and manage our physiotherapy telehealth services.</li>
                  <li>Communication: To communicate with you regarding your treatment, appointments, and account.</li>
                  <li>Improvement of Services: To improve our services, including the development of new services and features.</li>
                  <li>Compliance and Legal Obligations: To comply with legal obligations, including record-keeping requirements and reporting to relevant authorities as required by law.</li>
                </ul>
                <h3>4. Sharing of Information</h3>
                <p>We do not share your personal information with third parties except in the following circumstances:</p>
                <ul>
                  <li>Service Providers: We may share your information with third-party service providers who assist us in delivering our services, such as IT support, cloud storage providers, and payment processors.</li>
                  <li>Legal Requirements: We may disclose your information to law enforcement, regulatory, or government agencies as required by law or to protect our rights and the rights of others.</li>
                  <li>Professional Collaboration: With your consent, we may share your health information with other healthcare professionals involved in your care.</li>
                </ul>
                <h3>5. Data Security</h3>
                <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:</p>
                <ul>
                  <li>Encryption: Data transmitted over the internet is encrypted using industry-standard SSL/TLS protocols.</li>
                  <li>Access Controls: Access to your personal information is restricted to authorised personnel only.</li>
                  <li>Regular Audits: We conduct regular audits of our data processing activities to ensure ongoing compliance with our privacy policies and legal obligations.</li>
                </ul>
                <h3>6. User Rights</h3>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                  <li>Access: You may request access to the personal information we hold about you.</li>
                  <li>Correction: You may request corrections to any inaccurate or incomplete information.</li>
                  <li>Deletion: You may request the deletion of your personal information, subject to certain legal exceptions.</li>
                  <li>Objection: You may object to the processing of your personal information under certain circumstances.</li>
                  <li>Data Portability: You may request a copy of your personal information in a structured, commonly used, and machine-readable format.</li>
                </ul>
                <p>To exercise these rights, please contact us using the contact information provided below.</p>
                <h3>7. Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us understand how you interact with our website. You can control the use of cookies through your browser settings.</p>
                <h3>8. Changes to the Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website and indicating the effective date.</p>
                <h3>9. Contact Information</h3>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                <p>Active Horizons Health Group<br/>Email: activehorizonshg@gmail.com</p>
              `}
            />
            <a href="/files/privacy-policy.pdf" download>
              <img src="/images/download.svg" alt="download" />
            </a>
          </GridDiv>

          <GridDiv>
            <PolicyViewer
              title="Terms of Service"
              description={`
                <h3>Effective Date: July 2024</h3>
                <h3>1. Introduction</h3>
                <p>Welcome to Active Horizons Health Group ("we", "our", "us"). These Terms of Service govern your use of our physiotherapy telehealth services ("Services"). By accessing or using our Services, you agree to comply with these Terms of Service and our Privacy Policy.</p>
                <h3>2. Services</h3>
                <h4>2.1 Description of Services</h4>
                <p>Our Services include remote physiotherapy consultations, assessments, treatment plans, and related healthcare services provided through telecommunication technologies.</p>
                <h4>2.2 Eligibility</h4>
                <p>You must be at least 18 years old or have parental consent to use our Services. By using our Services, you represent and warrant that you meet these eligibility requirements.</p>
                <h4>2.3 Registration</h4>
                <p>To access certain features of our Services, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information as necessary.</p>
                <h3>3. User Responsibilities</h3>
                <h4>3.1 Use of Services</h4>
                <p>You agree to use our Services solely for lawful purposes and in accordance with these Terms of Service and all applicable laws and regulations.</p>
                <h4>3.2 Account Security</h4>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use or suspected breach of security.</p>
                <h3>4. Payment and Billing</h3>
                <p>If applicable, payment for our Services will be handled as agreed upon during the registration or scheduling process. Fees and charges may apply for certain Services, and you agree to pay all fees incurred in connection with your use of the Services.</p>
                <h3>5. Intellectual Property</h3>
                <h4>5.1 Ownership</h4>
                <p>All content and materials provided through our Services, including but not limited to text, graphics, logos, images, and software, are the property of Active Horizons Health Group or its licensors and are protected by intellectual property laws.</p>
                <h4>5.2 Use of Content</h4>
                <p>You may access and use the content provided through our Services solely for your personal, non-commercial use. You may not modify, reproduce, distribute, or create derivative works based on such content without our prior written consent.</p>
                <h3>6. Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, Active Horizons Health Group shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses arising out of or in connection with your use of our Services.</p>
                <h3>7. Termination</h3>
                <p>We reserve the right to suspend or terminate your access to our Services at any time and for any reason, including but not limited to violation of these Terms of Service or applicable laws.</p>
                <h3>8. Governing Law</h3>
                <p>These Terms of Service shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law principles.</p>
                <h3>9. Changes to Terms of Service</h3>
                <p>We may update or modify these Terms of Service from time to time. Any changes will be effective upon posting the revised Terms of Service on our website. Your continued use of our Services after the effective date of the revised Terms of Service constitutes your acceptance of the changes.</p>
                <h3>10. Contact Information</h3>
                <p>If you have any questions or concerns about these Terms of Service, please contact us at:</p>
                <p>Active Horizons Health Group<br/>Email: activehorizonshg@gmail.com</p>
              `}
            />
            <a href="/files/terms-of-service.pdf" download>
              <img src="/images/download.svg" alt="download" />
            </a>
          </GridDiv>

          <GridDiv>
            <PolicyViewer
              title="Complaints Policy"
              description={`
                <h3>Effective Date: July 2024</h3>
                <h3>1. Introduction</h3>
                <p>Active Horizons Health Group ("we", "our", "us") is committed to providing high-quality physiotherapy telehealth services to our clients. We value your feedback and take complaints seriously to improve our services and ensure client satisfaction. This Complaints Policy outlines our approach to handling complaints in accordance with the principles of fairness, accessibility, responsiveness, and accountability as required under the NDIS regulations.</p>
                <h3>2. Scope</h3>
                <p>This policy applies to all clients, their representatives, and any other individuals who wish to lodge a complaint about our services.</p>
                <h3>3. Definition of a Complaint</h3>
                <p>A complaint is defined as an expression of dissatisfaction or concern related to our services, actions, or lack of actions, where a response or resolution is explicitly or implicitly expected.</p>
                <h3>4. Lodging a Complaint</h3>
                <h4>4.1 How to Lodge a Complaint</h4>
                <p>Complaints can be lodged in the following ways:</p>
                <p>In Writing: By emailing your complaint to activehorizonshg@gmail.com.</p>
                <h4>4.2 Information Required</h4>
                <p>To assist us in addressing your complaint promptly, please provide the following information:</p>
                <ul>
                  <li>Your name and contact details.</li>
                  <li>A clear description of the complaint, including relevant dates and details.</li>
                  <li>Any supporting documentation or evidence.</li>
                </ul>
                <h3>5. Complaint Handling Process</h3>
                <h4>5.1 Receipt of Complaint</h4>
                <p>Upon receipt of your complaint, we will acknowledge receipt within 2 business days.</p>
                <h4>5.2 Assessment and Investigation</h4>
                <p>We will promptly assess and investigate your complaint to understand the issues raised and gather relevant information.</p>
                <h4>5.3 Resolution</h4>
                <p>We will aim to resolve your complaint within 14 calendar days from the date of receipt. If we require more time to investigate or resolve your complaint, we will inform you of the reasons for the delay and provide you with regular updates on the progress.</p>
                <h4>5.4 Outcome Notification</h4>
                <p>Once a resolution has been reached, we will notify you in writing of the outcome. The outcome notification will include:</p>
                <ul>
                  <li>Details of the investigation findings.</li>
                  <li>Any actions taken or proposed to address the complaint.</li>
                  <li>Your rights to seek further review or escalate the complaint if you are dissatisfied with the outcome.</li>
                </ul>
                <h3>6. Review and Escalation</h3>
                <p>If you are not satisfied with the outcome of your complaint, you may request a review by contacting us at activehorizonshg@gmail.com.</p>
                <h3>7. Confidentiality and Privacy</h3>
                <p>We will handle your complaint with confidentiality and respect your privacy in accordance with our Privacy Policy and relevant privacy laws.</p>
                <h3>8. Feedback and Continuous Improvement</h3>
                <p>We value feedback received through the complaints handling process and will use it to improve our services and prevent future occurrences.</p>
                <h3>9. Contact Information</h3>
                <p>If you wish to lodge a complaint or have any questions about our Complaints Policy, please contact:</p>
                <p>Active Horizons Health Group<br/>Email: activehorizonshg@gmail.com</p>
              `}
            />
            <a href="/files/complaints-policy.pdf" download>
              <img src="/images/download.svg" alt="download" />
            </a>
          </GridDiv>
        </FlexDiv>
      </DivBackground>
    </DivContainer>
  );
}
