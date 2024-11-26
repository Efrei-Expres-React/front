import React from "react";
import trash from '../../assets/svg/trash.svg';


const RecoAccordion = ({recoList, onDelete}) => {
  return (
    <>
    {recoList?.map((reco)=>(
      <div className="collapse collapse-arrow bg-base-200 border border-gray-300 rounded-md my-2">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-l font-bold tracking-tight text-gray-900">
            {reco?.title}
        </div>
        <div className="collapse-content">
          <ul className="divide-y divide-gray-300">
            {reco.recommendations?.map((recoItem, index)=>(
              <li
                  key={index}
                  className="flex justify-between items-center py-2"
                >
                  <div>
                    <p className="font-semibold">{recoItem?.message}</p>
                    <span className="text-sm text-gray-500">
                      From: {recoItem?.sender.firstname} {recoItem?.sender.lastname}
                    </span>
                  </div>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => onDelete(recoItem?._id)}
                  >
                    <img src={trash} />
                  </button>
                </li>
            ))}
          </ul>
        </div>
      </div>

    ))}

    </>
  );
};

export default RecoAccordion;
