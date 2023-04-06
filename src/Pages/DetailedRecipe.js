import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const DetailedRecipe = () => {
  const { id } = useParams();
  const [recipeSummary, setRecipeSummary] = useState(null);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: [
        `https://api.spoonacular.com/recipes/${id}/summary?apiKey=d156cebea94147f08d96f96c01db24a1`,
        `https://api.spoonacular.com/recipes/${id}/card?apiKey=d156cebea94147f08d96f96c01db24a1`,
      ],
      headers: {},
    };

    axios
      .all([axios.get(config.url[0]), axios.get(config.url[1])])
      .then(
        axios.spread((response1, response2) => {
          setRecipeSummary({
            ...response1.data,
            card: response2.data,
          });
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!recipeSummary) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1>{recipeSummary.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: recipeSummary.summary }} />
      </div>
<div><img src={recipeSummary.card.url} />
    </div>
      
    </div>
  );
};
