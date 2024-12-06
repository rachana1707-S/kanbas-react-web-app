import { BsGripVertical } from "react-icons/bs";
import { VscNotebook } from "react-icons/vsc";

export default function AssignmentControls() {
  return (
    <div className='d-inline-block'>
      <BsGripVertical className='me-2 fs-3' />
      <VscNotebook className='me-2 fs-3 text-success' />
    </div>
  );
}