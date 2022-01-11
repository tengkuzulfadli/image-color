import React, { useState } from "react";
import './ImageBox.css';

function GenerateColors(props) {
    const [clicked, setClicked] = useState();
    const rgbColors = createRgb();

    function rgbCalc(first, last){
        var colors = [];
        for( let i = first; i <= last; i++){
            if(i !== 0 && i % 8 === 0){
                colors.push(i)
                console.log(colors);
            }
        }
        return colors;
    }

    function createRgb(){
        var r = rgbCalc(8, 256);
        var g = rgbCalc(8, 256);
        var b = rgbCalc(8, 256);
        var allRgb = [];

        for(let h = 0; h < r.length; h++){
            const rRandom = Math.floor(Math.random() * r.length);
            const rValue = r[rRandom];
            r.splice(rRandom, 0);
            console.log(rValue);

            for(let i = 0; i < g.length; i++){
                const gRandom = Math.floor(Math.random() * g.length);
                const gValue = g[rRandom];
                g.splice(gRandom, 0);
                console.log(gValue);

                for(let j = 0; j < b.length; b++){
                    const bRandom = Math.floor(Math.random() * b.length);
                    const bValue = b[rRandom];
                    r.splice(bRandom, 0);
                    console.log(gValue);

                    const rgbCode = `rgb(${rValue},${gValue},${bValue})`;
                    allRgb.push(rgbCode)
                    console.log(rgbCode);
                    console.log(allRgb);
                }
            }
        }

        console.log(allRgb);
        return allRgb;
    }
    
    console.log(rgbColors);

    return(
        <>
            <div style={{ backgroundColor: clicked }} className="image-box">
                <button onClick={() => setClicked(rgbColors)} className="btn">Click</button>
            </div>
        </>
    );
}

export default GenerateColors;