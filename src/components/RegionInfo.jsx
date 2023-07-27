import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
const { Meta } = Card;

function RegionInfo() {
  // Get the region data from the Redux store using the `useSelector` hook.
  const regionData = useSelector((state) => state.regionData);

  return (
    <Card
      hoverable
      style={{
        width: 350,
      }}
      // Set the cover image of the card using the 'img' property from the 'regionData'.
      cover={<img alt='example' src={regionData.img} />}
    >
      {/* Display the title and description of the card using the 'name' and 'desc' properties from the 'regionData'. */}
      <Meta title={regionData.name || 'World'} description={regionData.desc} />

      {/* Additional region information displayed as paragraphs */}
      <div>
        <h3>Region Information</h3>
        <p>
          <span style={{ fontWeight: '700' }}>Currency Symbol:</span>
          {regionData.currency}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Speed Units:</span>
          {regionData.speedUnits}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Distance Units:</span>
          {regionData.distanceUnits}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Volume Units:</span>
          {regionData.volumeUnits}
        </p>
        <p>
          <span style={{ fontWeight: '700' }}>Timezone:</span>
          {regionData.timezone}
        </p>
      </div>
    </Card>
  );
}

export default RegionInfo;
