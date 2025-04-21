import { CrossIcon } from "../../icons/CrossIcon";

export const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-800 fixed top-0 left-0 opacity-50 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <CrossIcon />
              </div>
              <div></div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
