import React from "react";
import styled from "styled-components/native";


const Stars = styled.Text`
color: orange;
font-size: 18px;
`


const PaintStars = (votes) => {
    const intNum = Math.floor(votes);
    const decimalNum = (votes % 1).toFixed(1) * 10;
    let star = "";
    for (let i = 0; i < Math.floor(intNum / 2); i++) {
        star += "◆";
    }
    if (intNum % 2 === 1) star += "◈"
    if (decimalNum >= 5) star += "◇"

    return (
        <Stars>{star}</Stars>
    )
}

export default PaintStars;