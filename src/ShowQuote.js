import React from "react";

const ShowQuote = ({results}) => {
if (results) {
return (
<div className="ShowQuote">
<div className="quote">
 "{results}"
</div>
</div>

)
} else {
  return null;
}
}

export default ShowQuote