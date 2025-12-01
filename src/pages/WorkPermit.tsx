import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';
const WorkPermit: React.FC = () => {

  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>({
    visaStatus: "Indian Citizen - Authorized to work in India",
    expiryDate: new Date('2025-12-31'),
    summary: "Currently working in Bengaluru, India",
    additionalInfo: "Open to opportunities in India and internationally. Available for relocation with proper work authorization."
  });

  // useEffect(() => {
  //   async function fetchWorkPermitData() {
  //     const data = await getWorkPermit();
  //     setWorkPermitData(data);
  //   }
  //   fetchWorkPermitData();
  // }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">💼 Work Authorization</h2>
        <p className="work-permit-summary">
          <strong>{workPermitData.visaStatus}</strong> 🛂 {workPermitData.summary}
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
