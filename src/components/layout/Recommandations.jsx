import React, { useState, useEffect, useCallback} from "react";
import Input from "../atoms/Input";
import { useForm } from "../../utils/hooks/UseForm";
import IconButton from "../atoms/IconButton";
import send from '../../assets/svg/send.svg';
import { useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext";
import { createRecomandation, getCvRecommandations } from "../../api/recomandations";
import UseDate from "../../utils/hooks/UseDate";
import Alerts from "../atoms/Alerts";


const Recommandations = ({cvId}) => {
  const { formData, handleInputChange } = useForm({text:''});
  const {token } = useContext(AuthContext);
  const [recommandations, setRecommandations] = useState();
  const [error, setError] = useState();

  const getRecommandations = useCallback( async () => {
    try {
        const res =  await getCvRecommandations(cvId, token);
        setRecommandations(res.data.message)
    } catch (error) {
        setError(error.message)
    }
  }, [cvId, token]);


  useEffect(() => {
    if(cvId && token){
        getRecommandations()
    }  
  }, [cvId, token]);

  const submitReco = async() =>{
    try {
        const body = {cv : cvId, message : formData.text}
        const res = await createRecomandation(body, token)
        if(res.data.success = true){
            await getRecommandations()
        }
    } catch (error) {
        setError(error.message)
    }
  }


  return (
    <>
    {error && <Alerts message={error} type='error'/> }
    <div className="flex items-center space-x-4 mb-6">
    <div className="flex-grow">
    <Input
        id="reco"
        name="text" 
        type="textarea"
        value={formData.text}
        onChange={handleInputChange}
        placeholder="Super CV, tu devrais ajouter.."
        required={true}
        title="Écrivez un commentaire"
        rows={3}
        
      />
      </div>
      <div className="flex-shrink-0">
      <IconButton svg={send} onClick={submitReco}  />
      </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Recommandations</h2>
        {recommandations?.length > 0 ? (
          recommandations.map((reco) => (
            <div
              key={reco._id}
              className="mb-4 p-4 bg-white shadow rounded-lg"
            >
            <div className="flex flex-row justify-between">
              <p className="text-sm text-gray-600">
                <strong>
                  {reco.sender.firstname} {reco.sender.lastname} ({reco.sender.email})
                </strong>
              </p>
              <p className="text-xs text-gray-500">
                <UseDate dateString={reco.createdAt}/>
              </p>
              </div>
              <p className="text-gray-800">{reco.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Pas de recommandations :/.</p>
        )}
      </div>
    </>
  );
};

export default Recommandations;
