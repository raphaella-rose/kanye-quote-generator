import React from "react";

const ShowQuote = ({results}) => {
if (results) {
return (
<div>
 {results}
</div>
)
} else {
  return null;
}
}

export default ShowQuote