export const InfoRow = ({ label, value }) => {
  return (
    <div>
      <span style={{ marginRight: 5 }}>
        <b>{label}:</b>
      </span>
      <span>{value}</span>
    </div>
  );
};
export const ProfileInformation = ({ userData }) => {
  if (!userData) {
    return (
      <>
        <u>
          <h3>Your Submitted User Information</h3>
        </u>
        <div className="user-info">
          <div>No information provided</div>
        </div>
      </>
    );
  }
  // eslint-disable-next-line no-unused-vars
  const { email, firstName, lastName, phoneNumberInput, city, } = userData;

  const phoneDisplay =
    phoneNumberInput[0] +
    "-" +
    phoneNumberInput[1] +
    "-" +
    phoneNumberInput[2] +
    "-" +
    phoneNumberInput[3];
  return (
    <>
      <u>
        <h3>Your Submitted User Information</h3>
      </u>
      <div className="user-info">
        <InfoRow label="Email" value={email} />
        <InfoRow label="First Name" value={firstName} />
        <InfoRow label="Last Name" value={lastName} />
        <InfoRow label="City" value={city} />
        {/* You will need to format the string "nnnnnnn" as "nn-nn-nn-n" */}
        <InfoRow label="Phone" value={phoneDisplay} />
      </div>
    </>
  );
};
