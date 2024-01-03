function SectionText({ smallText, title }) {
  return (
    <div className="text-center">
      <p className="fs-18 fw-600 orange-color text-uppercase">{smallText}</p>
      <h2 className="blue-color fs-50 fw-700">{title}</h2>
    </div>
  );
}

export default SectionText;
