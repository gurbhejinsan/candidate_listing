import { InputGroup } from "../ui/input";

const PerDayForm = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <InputGroup
          name="bmi"
          type="number"
          label="BMI"
          placeholder="Enter BMI (optional)"
        />
        <InputGroup name="pft" label="PFT" placeholder="Enter PFT (optional)" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputGroup
          name="height"
          type="number"
          label="Height"
          placeholder="Enter Height (optional)"
        />
        <InputGroup
          name="weight"
          type="number"
          label="Weight"
          placeholder="Enter Weight"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <InputGroup
          name="rest_puls"
          type="number"
          label="Rest Puls"
          placeholder="Puls After Rest"
        />
        <InputGroup
          name="work_puls"
          type="number"
          label="Middle Puls"
          placeholder="Puls in middle of work"
        />
        <InputGroup
          name="end_puls"
          type="number"
          label="End Puls"
          placeholder="Enter Weight"
        />
      </div>
      <InputGroup name="remark" label="Remark" placeholder="Enter Remark" />
    </>
  );
};

export default PerDayForm;
